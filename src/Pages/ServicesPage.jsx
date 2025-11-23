import Footer from "../components/Footer";
import Skills from "../components/ServiceComponents/Skills";
import Projects from "../components/ServiceComponents/Projects";
import RequirementForm from "../components/ServiceComponents/RequirementForm";
import Proposal from "../components/ServiceComponents/Proposal";
import ScrollTop from "../components/ScrollTop";
import ThemeToggle from "../components/ThemeToggle";
import ToggleLanguages from "../components/ToggleLanguages";
import ServicesHero from "../components/ServiceComponents/ServicesHero";

const ServicesPage = () => {
  return (
    <>
      <ThemeToggle />
      <ToggleLanguages />
      <ScrollTop />
      <main>
        <ServicesHero />
        <Projects />
        <Skills />
        <Proposal />
        <RequirementForm />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
