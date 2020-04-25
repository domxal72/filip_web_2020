import styled from 'styled-components';
import {
  layout,
  color,
  space,
  position,
  border,
} from 'styled-system';

export const ALink = styled('a')`
  ${layout}
  ${color}
  ${space}
  ${position}
  ${border}
  text-decoration: ${({ textDecoration }) => textDecoration ? textDecoration : 'none'};
  cursor: ${({ cursor }) => cursor ? cursor : 'pointer'};
`

ALink.defaultProps = {
  display: 'inline-block',
}