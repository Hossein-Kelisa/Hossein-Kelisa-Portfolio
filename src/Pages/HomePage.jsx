import ToggleLanguages from "../components/ToggleLanguages";
import ThemeToggle from "../components/ThemeToggle";
import Navbar from "../components/HomeComponents/Navbar";
import Image from "../components/HomeComponents/Image";
import Hero from "../components/HomeComponents/Hero";
import Contact from "../components/HomeComponents/Contact";
import Footer from "../components/Footer";
import Layout from "../components/HomeComponents/Layout";
import ScrollTop from "../components/ScrollTop";
import About from "../components/HomeComponents/About";
import "../i18n";

const HomePage = () => {
  return (
    <>
      <ToggleLanguages />
      <ThemeToggle />
      <Navbar />
      <main>
        <Image />
        <Hero />
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
