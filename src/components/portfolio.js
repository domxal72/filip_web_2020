import React from 'react'

import { Flex } from './ui/flex';

import Lundegard from './img-sections/lundegard'
import Ecosond from './img-sections/ecosond'
import Revma from './img-sections/revma'
import Sklizeno from './img-sections/sklizeno'
import Hello from './img-sections/hello'
import Book from './img-sections/book'
import Rest from './img-sections/rest'

function Portfolio({ state }) {
  return (
    <Flex flexDirection='column' display={state.visiblePortfolio ? 'flex' : 'none'}>
      <Lundegard />
      <Ecosond />
      <Revma />
      <Sklizeno />
      <Hello />
      <Book />
      <Rest />
    </Flex>
  )
}

export default Portfolio
