import styled from 'styled-components'

export const PostContainer = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 54rem;
`

export const PostBody = styled.article`
  padding: 2.5rem 2rem;

  div {
    line-height: 1.6;
    overflow: scroll;
    color: ${({ theme }) => theme['base-text']};
  }
`
