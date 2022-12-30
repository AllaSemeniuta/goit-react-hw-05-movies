import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[6]};
`;

export const GalleryItem = styled.li`
  :hover {
    transform: scale(1.03);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${p => p.theme.shadows.primary};
  }
`;

export const GalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${p => p.theme.space[4]};
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const NavItem = styled(NavLink)`
  text-decoration: none;
`;

export const MovieTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]};
  margin-top: ${p => p.theme.space[3]};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
