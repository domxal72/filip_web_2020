import styled from 'styled-components';
import {
  layout,
  space,
} from 'styled-system';

import { Box } from './box'

export const Img = styled('img')`
  ${layout}
  ${space}
`

Img.defaultProps = {
  display: 'block',
  maxWidth: '100%',
  alt: 'image failed to load',
}