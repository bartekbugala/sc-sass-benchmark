import styled from "styled-components";
import { breakpoints } from "src/styles/variables";
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: ${breakpoints.lg}) {
    width: 1024px;
    margin: 0 auto;
  }
`;

export default Layout;
