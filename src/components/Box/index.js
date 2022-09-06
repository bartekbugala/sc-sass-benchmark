import styles from "./Box.module.scss";

const Box = (props) => {
  const { width, height, color, children } = props;
  return (
    <div
      className={styles.box}
      style={{ maxWidth: width + 'px', minHeight: height + 'px', background: color }}
    >
      {children}
    </div>
  );
};

export default Box;
