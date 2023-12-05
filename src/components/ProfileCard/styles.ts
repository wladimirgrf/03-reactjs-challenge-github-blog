import styled from 'styled-components'

export const ProfileCardContainer = styled.section`
  width: 100%;
  max-width: 54rem;
  z-index: 99;

  display: flex;
  flex-direction: row;

  border-radius: 10px;
  padding: 2rem 2.5rem;
  margin-top: -5rem;
  margin-left: auto;
  margin-right: auto;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  img {
    width: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileBox = styled.div`
  margin: 0 2rem 0;

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: bold;
  }

  a {
    display: flex;
    align-items: center;

    font-size: 0.75rem;
    font-weight: bold;
    gap: 0.524rem;
    text-decoration: none;

    color: ${(props) => props.theme.blue};
  }
`

export const ProfileFooter = styled.footer`
  margin-top: 1.5rem;
  gap: 1.5rem;
  display: flex;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
