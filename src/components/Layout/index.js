import styles from "./Layout.module.scss";
import Link from "next/link";
const Layout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
