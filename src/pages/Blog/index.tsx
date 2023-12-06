import { useContext } from 'react'

import { ProfileCard } from '../../components/ProfileCard'
import { PostCard } from './components/PostCard'
import { Search } from './components/Search'
import { BlogContainer, PostList } from './styles'
import { ProfileContext } from '../../contexts/ProfileContext'

export function Blog() {
  const { issues } = useContext(ProfileContext)

  return (
    <BlogContainer>
      <ProfileCard />
      <Search />

      <PostList>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostList>
    </BlogContainer>
  )
}
