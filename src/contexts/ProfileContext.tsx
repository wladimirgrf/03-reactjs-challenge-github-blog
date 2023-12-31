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

export interface Issue {
  id: number
  title: string
  author: string
  body: string
  url: string
  numberOfComments: number
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

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [login] = useState(import.meta.env.VITE_GITHUB_PROFILE)
  const [repo] = useState(import.meta.env.VITE_GITHUB_REPOSITORY)
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
  }, [login])

  const fetchIssues = useCallback(
    async (query: string = '') => {
      const response = await api.get(`/search/issues?q=${query}%20repo:${repo}`)

      const issuesFound: Issue[] = response.data.items.map((item: any) => ({
        id: item.id,
        title: item.title,
        author: item.user.login,
        body: item.body,
        url: item.html_url,
        numberOfComments: item.comments,
        createdAt: new Date(item.created_at),
      }))

      setIssues(issuesFound)
    },
    [repo],
  )

  useEffect(() => {
    getProfile()
  }, [getProfile])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

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
