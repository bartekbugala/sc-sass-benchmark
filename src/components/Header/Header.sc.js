import styled from "styled-components";
import { colors, breakpoints, fonts } from "@styles/variables";

export const Header = styled.header`
  width: 100%;
`;

export const Nav = styled.nav`
  background-color: ${colors.info};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    flex: 1 1 50px;
    font-size: ${fonts.weight.lg};
    &:hover {
      background-color: ${colors.info_01};
    }
  }
  & a.active {
    background-color: ${colors.info_10};
  }
  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    min-height: 100px;
    & a {
    }
  }
`;
