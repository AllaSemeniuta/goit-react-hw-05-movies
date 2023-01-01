import styled from 'styled-components';

export const AuthorInfo = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[3]};
`;

export const Item = styled.li`
  list-style: circle;
`;
