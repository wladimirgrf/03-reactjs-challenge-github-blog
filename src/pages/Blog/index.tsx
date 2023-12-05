import { ProfileCard } from '../../components/ProfileCard'
import { Post } from './components/Post'
import { Search } from './components/Search'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <ProfileCard />

      <Search />

      <Post />
      <Post />
    </BlogContainer>
  )
}
