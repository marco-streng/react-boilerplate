import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background: ${props => props.theme.palette.header.backgroundColor};
  color: ${props => props.theme.palette.header.textColor};
  font-size: 14pt;
  padding: 20px;
`

export default () => (
  <Header>Boilerplate</Header>
)
