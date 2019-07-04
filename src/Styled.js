import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'polished'

import theme from './theme'

const GlobalStyle = createGlobalStyle`
  ${normalize()}
`

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      {children}
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
)
