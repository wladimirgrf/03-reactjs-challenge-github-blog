import { ProfileCard } from '../../components/ProfileCard'
import { Post } from './components/Post'
import { Search } from './components/Search'
import { BlogContainer, PostList } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <ProfileCard />
      <Search />

      <PostList>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostList>
    </BlogContainer>
  )
}
