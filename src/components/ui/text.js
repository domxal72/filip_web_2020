import styled from 'styled-components';
import {
  typography,
} from 'styled-system';

import { Box } from './box'

export const Text = styled(Box)`
  ${typography}
`

Text.defaultProps = {
  fontSize: '14px'
}