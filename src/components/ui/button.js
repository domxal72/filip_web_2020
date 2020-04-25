import styled from 'styled-components';
import {
  flexbox
} from 'styled-system';

import { ALink } from './a-link'
import { colors } from '../theme'

export const Button = styled(ALink)`
  ${flexbox}
  :hover {
    background-color: ${colors.hoverTab}; 
  }
`

Button.defaultProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 50,
  borderRadius: 25,
  minWidth: 230,
  bg: colors.black,
  color: colors.white,
}