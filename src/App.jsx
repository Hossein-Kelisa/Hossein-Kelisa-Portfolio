import ToggleLanguages from "./components/ToggleLanguages";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Skills from "./components/Skills";
import Learning from "./components/Learning";
import Proposal from "./components/Proposal";
import "./i18n";
import "./index.css";
import Hobbies from "./components/Hobbies";

const App = () => {
  return (
      <>
        <ToggleLanguages />
        <ThemeToggle />
        <Navbar />
        <main>
          <Image />
          <Hero />
          <Layout />
          <Skills />
          <Learning />
          <Hobbies />
          <Proposal />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </>
  );
};

export default App;
