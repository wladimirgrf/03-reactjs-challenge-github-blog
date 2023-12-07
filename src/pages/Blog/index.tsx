import { useContext } from 'react'

import { ProfileCard } from '../../components/ProfileCard'
import { PostCard } from './components/PostCard'
import { Search } from './components/Search'
import { BlogContainer, PostList } from './styles'
import { ProfileContext } from '../../contexts/ProfileContext'

export function Blog() {
  const { issues } = useContext(ProfileContext)
  const validIssues = issues.filter((issue) => issue.body)

  return (
    <BlogContainer>
      <ProfileCard />
      <Search />

      <PostList>
        {validIssues.map((issue) => (
          <PostCard
            key={issue.id}
            title={issue.title}
            body={issue.body}
            createdAt={issue.createdAt}
          />
        ))}
      </PostList>
    </BlogContainer>
  )
}
