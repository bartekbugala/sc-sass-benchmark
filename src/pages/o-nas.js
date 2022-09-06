import HomeView from "../views/HomeView";
import testProps from "../data/testProps";

const pageProps = {
  main: { title: "O nas", description: 'Mamy sporo komponentów' },
};

export default function AboutUs() {
  return <HomeView {...testProps} {...pageProps} />;
}
