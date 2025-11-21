import Hero from "../components/HomeComponents/Hero";
import Contact from "../components/HomeComponents/Contact";
import Footer from "../components/Footer";
import Layout from "../components/HomeComponents/Layout";
import ScrollTop from "../components/ScrollTop";
import About from "../components/HomeComponents/About";
import Text from "../components/HomeComponents/Text";
import "../i18n";

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        <Text />
        <ScrollTop />
        <About />
        <Layout />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
