import styled from 'styled-components'

export const LayoutContainer = styled.div`
  margin: 0 auto;

  background: ${(props) => props.theme['base-background']};

  display: flex;
  flex-direction: column;
`
