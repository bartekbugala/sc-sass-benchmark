import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const HomeView = (props) => {
  const { header, main } = props;
  return (
    <>
      <Layout>
        <Header {...header} title={main?.title} />
        <Main {...main} />
        {/* <Footer {...props}/> */}
      </Layout>
    </>
  );
};

export default HomeView;
