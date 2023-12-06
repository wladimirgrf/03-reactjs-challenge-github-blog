import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { api } from '../lib/axios'

interface Profile {
  avatarUrl: string
  name: string
  company: string
  login: string
  bio: string
  url: string
  followers: number
}

interface Issue {
  title: string
  author: string
  body: string
  comments: number
  createdAt: Date
}

interface ProfileContextType {
  profile: Profile
  issues: Issue[]
  fetchIssues: (query?: string) => Promise<void>
}

interface ProfileProviderProps {
  children: ReactNode
}

const login = 'filipedeschamps'
const repo = 'filipedeschamps/tabnews.com.br'

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [profile, setProfile] = useState<Profile>({} as Profile)
  const [issues, setIssues] = useState<Issue[]>([])

  const getProfile = useCallback(async () => {
    const response = await api.get(`/users/${login}`)

    const { data } = response

    setProfile({
      avatarUrl: data.avatar_url,
      name: data.name,
      company: data.company,
      login: data.login,
      bio: data.bio,
      url: data.html_url,
      followers: data.followers,
    })
  }, [])

  useEffect(() => {
    getProfile()
  }, [getProfile])

  const fetchIssues = useCallback(async (query?: string) => {
    const response = await api.get('/search/issues', {
      params: { q: `${query}repo:${repo}` },
    })

    const issuesFound: Issue[] = response.data.items.map((item: any) => ({
      title: item.title,
      author: item.user.login,
      body: item.body,
      comments: item.comments,
      createdAt: new Date(item.created_at),
    }))

    setIssues(issuesFound)
  }, [])

  return (
    <ProfileContext.Provider
      value={{
        profile,
        issues,
        fetchIssues,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
