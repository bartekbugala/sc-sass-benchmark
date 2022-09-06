import styled from "styled-components";
import { dimensions, colors } from "src/styles/variables";
const Main = styled.main`
  padding: ${dimensions.d_8};
  display: flex;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  flex-wrap: wrap;
  width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    flex-basis: 100%;
  }
  p {
    flex-basis: 100%;
  }
`;
export default Main;
