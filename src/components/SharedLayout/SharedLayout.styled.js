import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.primary};
  text-decoration: none;

  :not(:last-child) {
    margin-right: ${p => p.theme.space[6]};
  }
  :hover:not(.active) {
    color: ${p => p.theme.colors.light};
  }

  &.active {
    color: ${p => p.theme.colors.secondary};
  }
`;
