import styled from 'styled-components'

export const ProfileCardContainer = styled.section`
  width: 54rem;
  z-index: 99;

  display: flex;
  flex-direction: row;

  border-radius: 10px;
  padding: 2rem 2.5rem;
  margin-top: -5rem;
  margin-left: auto;
  margin-right: auto;

  background: ${({ theme }) => theme['base-profile']};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  img {
    width: 9.25rem;
    border-radius: 8px;
  }

  @media (max-width: 1020px) {
    width: 94%;
    margin-top: -5%;
    margin-left: 3%;
    margin-right: 3%;
  }
`

export const ProfileCardBox = styled.div`
  margin: 0 2rem 0;
  width: 100%;

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    word-wrap: break-word;
    color: ${({ theme }) => theme['base-text']};
  }
`

export const ProfileCardHeader = styled.header`
  display: flex;
  justify-content: space-between;

  span {
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.5rem;
    font-weight: bold;
  }

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

    @media (max-width: 1020px) {
      margin-left: 1rem;
    }
  }
`

export const ProfileCardFooter = styled.footer`
  margin-top: 1.5rem;
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
