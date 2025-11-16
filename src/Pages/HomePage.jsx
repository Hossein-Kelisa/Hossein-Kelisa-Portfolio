import ToggleLanguages from "../components/ToggleLanguages";
import ThemeToggle from "../components/ThemeToggle";
import Navbar from "../components/Navbar";
import Image from "../components/Image";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Learning from "../components/Learning";
import MyLanguages from "../components/MyLanguages";
import RequirementForm from "../components/RequirementForm";
import Proposal from "../components/Proposal";
import Hobbies from "../components/Hobbies";
import ScrollTop from "../components/ScrollTop";
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
        <Layout />
        <Skills />
        <Learning />
        <MyLanguages />
        <RequirementForm />
        <Hobbies />
        <Proposal />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
