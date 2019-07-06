// react-hot-loader has to be imported before react and react-dom
import { hot } from 'react-hot-loader/root'
import React from 'react'

import { registerServiceWorker } from './lib/serviceWorker'

import Styled from './Styled'
import Header from './components/Header'

const App = () => (
  <Styled>
    <Header />
  </Styled>
)

registerServiceWorker()

export default hot(App)
