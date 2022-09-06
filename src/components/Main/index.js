import styles from "./Main.module.scss";
import Image from "next/image";
import Box from "../Box";
const Main = (props) => {
  const { title, description, components } = props;
  const hasComponents = Array.isArray(components) && components?.length > 0;
  return (
    <main className={styles.main}>
      <h1>{title}</h1>
      <p>{description}</p>
      <section>
        {hasComponents
          ? components.map((component, idx) => {
              switch (component.type) {
                case "image":
                  return (
                    <Image
                      key={idx}
                      src={component.src}
                      width="600"
                      height="400"
                      alt={component.name}
                    />
                  );
                case "text":
                  return <p key={idx}>{component.text}</p>;
                case "box":
                  return (
                    <Box
                      key={idx}
                      width={component.width}
                      height={component.height}
                      color={component.color}
                    />
                  );
                default:
                  return null;
              }
            })
          : null}
      </section>
    </main>
  );
};

export default Main;
