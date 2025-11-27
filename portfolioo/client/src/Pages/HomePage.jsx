import Hero from "../components/HomeComponents/Hero";
import Contact from "../components/HomeComponents/Contact";
import Footer from "../components/Footer";
// import Layout from "../components/HomeComponents/Layout";
import ScrollTop from "../components/ScrollTop";
import About from "../components/HomeComponents/About";
import Text from "../components/HomeComponents/Text";
import ThemeToggle from "../components/ThemeToggle";
import ToggleLanguages from "../components/ToggleLanguages";
import GrowthAndLife from "../components/HomeComponents/GrowthAndLife";
import Certificates from "../components/HomeComponents/Certificates";
import Resume from "../components/HomeComponents/Resume";
import MyLanguages from "../components/HomeComponents/MyLanguages";
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
        <Certificates />
        <GrowthAndLife />
        <MyLanguages />
        <Resume />
        {/* <Layout /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
