// react-hot-loader has to be imported before react and react-dom
import { hot } from 'react-hot-loader/root'
import React from 'react'
import styled from 'styled-components'

import { registerServiceWorker } from './lib/serviceWorker'

import Styled from './Styled'
import Header from './components/Header'
import LinkButton from './components/LinkButton'

import logoSrc from './static/icons/icon-512.png'

const Logo = styled.img`
  display: block;
  margin: 30px auto;
  max-width: 206px;
`

const Center = styled.div`
  text-align: center;
`

const App = () => (
  <Styled>
    <Header />
    <Logo src={logoSrc} alt='Boilerplate' />
    <Center>
      <p>React ❤️styled component ❤️Jest ❤️webpack ❤️ JavaScript Standard Style ❤️stylelint</p>
      <LinkButton href='https://github.com/marco-streng/react-boilerplate' target='_blank'>GitHub</LinkButton>
    </Center>
  </Styled>
)

registerServiceWorker()

export default hot(App)
