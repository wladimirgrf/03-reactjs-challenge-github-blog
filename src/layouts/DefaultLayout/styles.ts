import styled from 'styled-components'

export const LayoutContainer = styled.div`
  margin: 0 auto;

  background: ${({ theme }) => theme['base-background']};

  display: flex;
  flex-direction: column;
`
