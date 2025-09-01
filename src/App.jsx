import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Skills from "./components/Skills";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Image />
        <Hero />
        <Layout />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
