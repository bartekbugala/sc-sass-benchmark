import BoxStyled from "./Box.sc";

const Box = (props) => {
  const { width, height, color, children } = props;
  console.log(props);
  return (
    <BoxStyled width={width} height={height} color={color}>
      {children}
    </BoxStyled>
  );
};

export default Box;
