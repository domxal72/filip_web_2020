import React from 'react'

import { Flex } from '../ui/flex'
import { colors } from '../theme'

export default function SectionContainer({ children }) {
  return (
    <Flex borderBottom={`1px solid ${colors.activeTab}`} pb={10} mb={30}>
      {children}
    </Flex>
  )
}

