import Components from "./Components";
import styles from "./Main.module.scss";

const Main = (props) => {
  const { title, description, components } = props;
  const hasComponents = Array.isArray(components) && components?.length > 0;

  return (
    <main className={styles.main}>
      <h1>{title}</h1>
      <p>{description}</p>
      <section>
        {hasComponents ? (
          <Components components={components}>
            <Components components={components}>
              <Components components={components}>
                <Components components={components}/>
              </Components>
            </Components>
          </Components>
        ) : null}
      </section>
    </main>
  );
};

export default Main;
