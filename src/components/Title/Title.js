import PropTypes from 'prop-types';
import { TitleStyled } from './Title.styled';

const Title = ({ children, as }) => {
  return <TitleStyled as={as}>{children}</TitleStyled>;
};

export default Title;
Title.defaultProps = {
  as: 'h2',
};

Title.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
};
