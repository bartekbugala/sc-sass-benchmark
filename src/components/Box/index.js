import styles from "./Box.module.scss";

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
