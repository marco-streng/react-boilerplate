import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: ${(props) => props.theme.palette.header.backgroundColor};
  color: ${(props) => props.theme.palette.header.textColor};
  font-size: 14pt;
  font-weight: bold;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
`

const Header = () => <StyledHeader>React Boilerplate</StyledHeader>

export default Header
