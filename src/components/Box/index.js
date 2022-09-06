import styles from "./Box.module.scss";
import Link from "next/link";
import Image from "next/image";
const Box = (props) => {
  const { width, height, color } = props;
  return (
    <div
      className={styles.box}
      style={{ width: width + 'px', height: height + 'px', background: color }}
    ></div>
  );
};

export default Box;
