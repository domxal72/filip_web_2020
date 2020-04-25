import styled from 'styled-components';
import {
  flexbox,
} from 'styled-system';

import { Box } from './box'
import { theme } from '../theme'

const { imgRowGap, imgBottomGap } = theme

export const Flex = styled(Box)`
  ${flexbox}
`

Flex.defaultProps = {
  display: 'flex',
}


export const FlexSecCol = styled(Flex)``

FlexSecCol.defaultProps = {
  flexDirection: 'column',
  width: '100%',
}

export const FlexImgRow = styled(Flex)``

FlexImgRow.defaultProps = {
  mb: imgRowGap,
  width: '100%',
  // flexWrap: ['wrap', 'wrap', 'nowrap'],
  flexDirection: ['column', 'row', 'row'],
  justifyContent: ['center', 'initial', 'initial'],
  alignItems: ['center', 'initial', 'initial'],
}


export const FlexImgCol = styled(Flex)``

FlexImgCol.defaultProps = {
  mb: imgBottomGap,
}