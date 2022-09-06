import HomeView from "../views/HomeView";
import testProps from "../data/testProps";

const pageProps = {
  main: {
    title: "Kontakt",
  },
};

export default function Kontakt() {
  return <HomeView {...testProps} {...pageProps} />;
}
