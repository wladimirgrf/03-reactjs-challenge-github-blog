import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { ProfileProvider } from './contexts/ProfileContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <ProfileProvider>
          <Router />
        </ProfileProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
