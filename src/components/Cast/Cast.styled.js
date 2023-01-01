import styled from 'styled-components';

export const Image = styled.img`
  width: 200px;
  border-radius: ${p => p.theme.radii.normal};
  height: 200px;
  object-fit: cover;
  margin-bottom: ${p => p.theme.space[2]};
`;

export const Text = styled.p`
  margin-bottom: ${p => p.theme.space[2]};

  span {
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;
