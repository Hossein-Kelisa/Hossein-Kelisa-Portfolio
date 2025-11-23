import Hero from "../components/HomeComponents/Hero";
import Contact from "../components/HomeComponents/Contact";
import Footer from "../components/Footer";
import Layout from "../components/HomeComponents/Layout";
import ScrollTop from "../components/ScrollTop";
import About from "../components/HomeComponents/About";
import Text from "../components/HomeComponents/Text";
import ThemeToggle from "../components/ThemeToggle";
import ToggleLanguages from "../components/ToggleLanguages";
import "../i18n";

const HomePage = () => {
  return (
    <>
      <ToggleLanguages />
      <ThemeToggle />
      <ScrollTop />
      <main>
        <Hero />
        <Text />
        <About />
        <Layout />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
