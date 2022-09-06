import styles from "./Main.module.scss";
import Image from "next/image";
import Box from "../Box";
import Text from "../Text";
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
                      alt={component.name}
                      width="600"
                      height="400"
                    />
                  );
                case "text":
                  return (
                    <Text
                      key={idx}
                      size={component.size}
                      text={component.text}
                    />
                  );
                case "box":
                  return (
                    <Box
                      key={idx}
                      color={component.color}
                      width={component.width}
                      height={component.height}
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
