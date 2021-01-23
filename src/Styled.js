import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'polished'

import theme from './theme'

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  body {
    color: ${(props) => props.theme.palette.textColor};
    font-family: sans-serif;
    font-size: 15px;
  }
`

const StyledWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      {children}
      <GlobalStyle />
    </>
  </ThemeProvider>
)

StyledWrapper.propTypes = {
  children: PropTypes.node
}

export default StyledWrapper
