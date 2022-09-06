import Components from "./Components";
import MainStyled from "./Main.sc";

const Main = (props) => {
  const { title, description, components } = props;
  const hasComponents = Array.isArray(components) && components?.length > 0;

  return (
    <MainStyled>
      <h1>{title}</h1>
      <p>{description}</p>
      <section>
        {hasComponents ? (
          <Components components={components}>
            <Components components={components}>
              <Components components={components}>
                <Components components={components} />
              </Components>
            </Components>
          </Components>
        ) : null}
      </section>
    </MainStyled>
  );
};

export default Main;
