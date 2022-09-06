import HomeView from "../views/HomeView";
import testProps from "../data/testProps";

const pageProps = {
  main: {
    title: "Kontakt",
    description: "Scroll shift jest wynikiem irytującego UX przeglądarki."
  },
};

export default function Kontakt() {
  return <HomeView {...testProps} {...pageProps} />;
}
