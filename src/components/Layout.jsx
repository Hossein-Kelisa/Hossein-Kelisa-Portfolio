import About from "./About";
import Certificates from "./Certificates";
import Learning from "./Learning";
import "./Layout.css";

const Layout = () => (
  <section className="layout">
    <div className="layout-left">
      <section className="about-card">
        <About />
      </section>
      <section className="certification-card">
        <Certificates />
      </section>
    </div>
    <div className="layout-right">
      <Learning />
    </div>
  </section>
);

export default Layout;
