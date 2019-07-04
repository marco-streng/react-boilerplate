import React from 'react'
import renderer from './helper/tests/jest'

import App from './App'

describe('App', () => {
  test('default', () => {
    const tree = renderer(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
