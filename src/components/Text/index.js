import TextStyled from './Text.sc'

const Text = (props) => {
  const { text, size } = props;
  return (
    <TextStyled fontSize={size}>{text}</TextStyled>
  );
};

export default Text;
