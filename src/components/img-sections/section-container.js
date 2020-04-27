import React from 'react'

import { Flex } from '../ui/flex'
import { theme } from '../theme'

export default function SectionContainer({ children }) {
  return (
    <Flex mb={theme.sectionGap}>
      {children}
    </Flex>
  )
}

