import React from 'react';

import { Flex } from './flex'

export default function Svg({ children, ...props }) {
  return (
    <Flex justifyContent='center' alignItems='center' {...props}>
      <svg width='auto' {...props}>
        {children}
      </svg>
    </Flex>
  )
}
