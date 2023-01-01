const Title = ({ children, as }) => {
  return <Title as={as}>{children}</Title>;
};

export default Title;
Title.defaultProps = {
  as: 'h2',
};
