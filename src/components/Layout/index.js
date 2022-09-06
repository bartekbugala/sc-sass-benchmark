import LayoutStyled from "./Layout.sc";
import Link from "next/link";
const Layout = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
