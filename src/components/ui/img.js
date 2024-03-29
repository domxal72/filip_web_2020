import styled from 'styled-components';
import {
  layout,
  space,
} from 'styled-system';

export const Img = styled('img')`
  ${layout}
  ${space}
  cursor: ${({ cursor }) => cursor ? cursor : 'auto'};
`

Img.defaultProps = {
  display: 'block',
  maxWidth: '100%',
  alt: 'image failed to load',
}