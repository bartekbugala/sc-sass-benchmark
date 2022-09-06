import styles from "./Text.module.scss";

const Text = (props) => {
  const { text, size } = props;
  return (
    <p className={styles.text} style={{ fontSize: `var(--t-${size})` }}>{text}</p>
  );
};

export default Text;
