// Tohle jsem nakonec nepouzil

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  layout,
  color,
  space,
  flexbox,
  position,
} from 'styled-system';

export const StyledLink = styled(NavLink)`
  ${layout}
  ${color}
  ${space}
  ${flexbox}
  ${position}
  text-decoration: ${({ textDecoration }) => textDecoration ? textDecoration : 'none'};
`
StyledLink.defaultProps = {
  display: 'flex',
  textDecoration: 'none',
}