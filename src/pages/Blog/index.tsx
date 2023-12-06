import { ProfileCard } from '../../components/ProfileCard'
import { PostCard } from './components/PostCard'
import { Search } from './components/Search'
import { BlogContainer, PostList } from './styles'

export function Blog() {
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
