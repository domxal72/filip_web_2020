import styled from 'styled-components';
import {
  layout,
  color,
  space,
  position,
  border,
} from 'styled-system';

export const Box = styled('div')`
  ${layout}
  ${color}
  ${space}
  ${position}
  ${border}
`

Box.defaultProps = {
  display: 'inline-block',
  position: 'relative',
}