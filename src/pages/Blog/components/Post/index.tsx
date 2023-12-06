import { PostContainer, PostTitle } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostTitle>
        <h3>JavaScript data types and data structures</h3>
        <span>At 1 day</span>
      </PostTitle>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in ...
      </p>
    </PostContainer>
  )
}
