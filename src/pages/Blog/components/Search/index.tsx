import { SearchContainer } from './styles'

export function Search() {
  return (
    <SearchContainer>
      <header>
        <strong>Posts</strong>
        <span>6 posts</span>
      </header>
      <input type="text" placeholder="Search content" />
    </SearchContainer>
  )
}
