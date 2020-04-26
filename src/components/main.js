import React from 'react'

import { Flex } from './ui/flex'
import { theme } from './theme'

import Portfolio from './portfolio'
import Contact from './contact'

export default function Main() {
  return (
    <Flex
      mt={60}
      mx='auto'
      pt={30}
      px={theme.pagePaddingX}
      maxWidth={theme.pageMax}
      width='100%'
      justifyContent='center'
    >
      <Portfolio />
      <Contact />
    </Flex>
  )
}

