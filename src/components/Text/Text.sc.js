import styled from "styled-components";
import colors from "@styles/variables";
const Text = styled.p`
  color: ${colors.danger};
  font-size: ${({ fontSize }) =>
    fontSize ? `{var(--t-${fontSize})}` : "12px"};
`;
export default Text;
