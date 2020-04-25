import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Flex } from './ui/flex'
import { theme } from './theme'

import Portfolio from './portfolio'
import Contact from './contact'

function Main({ state }) {
  return (
    <Flex mt={60} mx='auto' pt={50} px={120} maxWidth={theme.pageMax} width='100%'>
      {/* <Switch>
        <Route exact path="/">
          <Portfolio />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch> */}
      <Portfolio state={state} />
      <Contact state={state} />
    </Flex>
  )
}

export default Main
