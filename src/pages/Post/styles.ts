import styled from 'styled-components'

export const PostContainer = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 54rem;
`

export const PostBody = styled.article`
  padding: 2.5rem 2rem;

  color: ${({ theme }) => theme['base-text']};
`
