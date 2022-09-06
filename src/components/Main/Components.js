import Image from "next/image";
import Box from "../Box";
import Text from "../Text";

const Components = ({ children, components, nest = 0 }) => {
  const hasComponents = Array.isArray(components) && components?.length > 0;
  
  return (
    <>
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
                    layout="intrinsic"
                  />
                );
              case "text":
                return (
                  <Text key={idx} size={component.size} text={component.text} />
                );
              case "box":
                return (
                  <Box
                    key={idx}
                    color={component.color}
                    width={component.width}
                    height={component.height}
                  >
                    {children}
                  </Box>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};

export default Components;
