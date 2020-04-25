import React from 'react'

import { Flex, FlexImgRow, FlexImgCol, FlexSecCol } from '../ui/flex'

export default function SectionContainer({ children }) {
  return (
    <Flex borderBottom='1px solid black' pb={10}>
      {children}
    </Flex>
  )
}

