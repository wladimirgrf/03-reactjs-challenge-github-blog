import styled from 'styled-components'

export const BlogContainer = styled.main`
  margin: 0 auto;
`

export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 1020px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 3%;
    margin-right: 3%;
  }
`
