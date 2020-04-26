import React from 'react';

import { Flex } from './flex'

export default function Svg({ children, ...props }) {
  return (
    <Flex {...props}>
      <svg {...props}>
        {children}
      </svg>
    </Flex>
  )
}
