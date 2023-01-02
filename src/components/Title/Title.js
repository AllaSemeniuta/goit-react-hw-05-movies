import styled from 'styled-components';

const Title = ({ children, as }) => {
  return <TitleStyled as={as}>{children}</TitleStyled>;
};

export default Title;
Title.defaultProps = {
  as: 'h2',
};

export const TitleStyled = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]};
`;
