import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'polished'

import theme from './theme'

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  body {
    color: ${props => props.theme.palette.textColor};
    font-family: sans-serif;
    font-size: 15px;
  }
`

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      {children}
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
)
