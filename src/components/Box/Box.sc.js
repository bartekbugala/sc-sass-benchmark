import styled from "styled-components";
import { colors,dimensions, breakpoints } from "@styles/variables";

const Box = styled.div`
    max-width: ${({ width }) => (width ? `${width}px` : "100px")};
    min-height: ${({ height }) => (height ? `${height}px` : "100px")};
    background: ${({ color }) => (color ? `${color}` : "brown")};
    padding: ${dimensions.d_12}
`;

export default Box;