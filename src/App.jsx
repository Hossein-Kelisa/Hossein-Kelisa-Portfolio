import ToggleLanguages from "./components/ToggleLanguages";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Skills from "./components/Skills";
// import Learning from "./components/Learning";
import "./i18n";
import "./index.css";

const App = () => {
  return (
      <>
        <ToggleLanguages />
        <Navbar />
        <main>
          <Image />
          <Hero />
          <Layout />
          <Skills />
          {/* <Learning /> */}
          <Resume />
          <Contact />
        </main>
        <Footer />
      </>
  );
};

export default App;
