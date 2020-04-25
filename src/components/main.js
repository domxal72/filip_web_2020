import React from 'react'

import { Flex } from './ui/flex'
import { theme } from './theme'

import Portfolio from './portfolio'
import Contact from './contact'

export default function Main({ state, setState }) {
  return (
    <Flex mt={60} mx='auto' pt={50} px={theme.pagePaddingX} maxWidth={theme.pageMax} width='100%'>
      <Portfolio state={state} />
      <Contact state={state} setState={setState} />
    </Flex>
  )
}

