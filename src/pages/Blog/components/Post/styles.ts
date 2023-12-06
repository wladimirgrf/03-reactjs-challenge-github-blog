import styled from 'styled-components'

export const PostContainer = styled.article`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  border-radius: 10px;
  line-height: 1.6;

  background: ${({ theme }) => theme['base-post']};

  p {
    margin-top: 1.25rem;
    font-size: 1rem;
    color: ${({ theme }) => theme['base-text']};
  }
`

export const PostTitle = styled.div`
  display: flex;
  justify-content: flex-start;

  h3 {
    flex: 1;
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-title']};
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['base-span']};
  }
`
