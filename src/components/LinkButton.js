import styled from 'styled-components'

export default styled.a`
  background-color: ${props => props.theme.palette.button.backgroundColor};
  border-radius: 3px;
  color: ${props => props.theme.palette.button.textColor};
  display: inline-block;
  font-weight: bold;
  padding: 10px 20px;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.palette.button.hover.backgroundColor};
    color: ${props => props.theme.palette.button.hover.textColor};
  }
`
