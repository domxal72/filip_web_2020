import styled from 'styled-components';
import {
  flexbox,
} from 'styled-system';

import { Box } from './box'
import { theme } from '../theme'

const { imgRowGap, imgRowMainGap, imgBottomGap } = theme

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
  flexDirection: ['column', 'row', 'row'],
  justifyContent: ['center', 'flex-start', 'flex-start'],
  alignItems: ['center', 'flex-start', 'flex-start'],
}


export const FlexImgCol = styled(Flex)``

FlexImgCol.defaultProps = {
  mb: imgBottomGap,
  alignItems: ['center', 'flex-start', 'flex-start'],
}

export const FlexImgRowMain = styled(FlexImgRow).attrs(() => ({
  justifyContent: 'center',
  mb: imgRowMainGap
}))``