import styled from 'styled-components'

export const PostContainer = styled.article`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;
  border-radius: 10px;
  line-height: 1.6;
  cursor: pointer;

  background: ${({ theme }) => theme['base-post']};
  border: 2px solid transparent;

  p {
    margin-top: 1.25rem;
    font-size: 1rem;
    color: ${({ theme }) => theme['base-text']};
  }

  &:hover {
    border-color: ${({ theme }) => theme['base-label']};
  }
`

export const PostTitle = styled.div`
  display: flex;
  align-items: baseline;

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
