import MyLanguages from "./MyLanguages";
import Certificates from "./Certificates";
import Resume from "./Resume";
import Collaboration from "./Collaboration";
import GrowthAndLife from "./GrowthAndLife";
import "./Layout.css";

const Layout = () => (
  <section id="profile" className="layout">
    <div className="layout-left">
      <section className="Languages-card">
        <MyLanguages />
      </section>
      <section className="collaboration-card">
        <Collaboration />
      </section>
      <section className="certification-card">
        <Certificates />
      </section>
      <section className="Resume-card">
        <Resume />
      </section>
    </div>
    <div className="layout-right">
      <GrowthAndLife />
    </div>
  </section>
);

export default Layout;
