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
  cursor: ${({ cursor }) => cursor ? cursor : 'auto'};
`

Box.defaultProps = {
  display: 'inline-block',
  position: 'relative',
}