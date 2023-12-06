import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 1.875rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-image: linear-gradient(
    ${({ theme }) => theme['base-profile']} 80%,
    ${({ theme }) => theme.blue} 200%
  );
`
