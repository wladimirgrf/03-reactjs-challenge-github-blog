import styled from 'styled-components'

export const IssueCardContainer = styled.section`
  width: 100%;
  z-index: 99;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
  padding: 2rem 2.5rem;
  margin-top: -4rem;

  background: ${({ theme }) => theme['base-profile']};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  h1 {
    margin-top: 1.25rem;
    word-break: break-all;
    word-wrap: break-word;
  }

  @media (max-width: 1020px) {
    width: 94%;
    margin-top: -4%;
    margin-left: 3%;
    margin-right: 3%;
  }
`

export const IssueCardHeader = styled.header`
  display: flex;
  justify-content: space-between;

  a {
    height: 1.188rem;

    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;

    font-size: 0.75rem;
    gap: 0.5rem;

    border-bottom: 1px solid transparent;
    color: ${({ theme }) => theme.blue};

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.blue};
    }
  }
`

export const IssueCardFooter = styled.footer`
  margin-top: 0.5rem;
  gap: 1.5rem;
  display: flex;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${({ theme }) => theme['base-subtitle']};

    svg {
      color: ${({ theme }) => theme['base-label']};
    }
  }

  @media (max-width: 1020px) {
    flex-direction: column;
  }
`
