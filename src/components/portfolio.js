import React, { useContext } from 'react'

import { Flex } from './ui/flex';

import { AppContext } from './app-context'

import Lundegard from './img-sections/lundegard'
import Ecosond from './img-sections/ecosond'
import Revma from './img-sections/revma'
import Sklizeno from './img-sections/sklizeno'
import Hello from './img-sections/hello'
import Book from './img-sections/book'
import Rest from './img-sections/rest'

export default function Portfolio() {

  const { appState: { visiblePortfolio } } = useContext(AppContext)

  return (
    <Flex flexDirection='column' display={visiblePortfolio ? 'flex' : 'none'}>
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

