import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Image = styled.img`
  width: 280px;
  border-radius: ${p => p.theme.radii.normal};
  height: 400px;
  object-fit: cover;
  /* margin-bottom: ${p => p.theme.space[2]}; */
`;

export const BackLinkText = styled.span`
  margin-left: ${p => p.theme.space[3]};
`;

export const BackLink = styled(NavLink)`
  margin-bottom: ${p => p.theme.space[3]};
  display: flex;
  text-decoration: none;
  cursor: pointer;
  /* justify-content: center; */
  align-items: center;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  margin-bottom: ${p => p.theme.space[3]};
`;

export const AdditionalInfoLink = styled(NavLink)`
  /* margin-top: ${p => p.theme.space[3]}; */
  text-decoration: none;
  border: ${p => p.theme.borders.normal};
  padding: ${p => p.theme.space[2]};
  border-radius: ${p => p.theme.radii.normal};

  :not(:last-child) {
    margin-right: ${p => p.theme.space[3]};
  }

  /* cursor: pointer; */
`;
