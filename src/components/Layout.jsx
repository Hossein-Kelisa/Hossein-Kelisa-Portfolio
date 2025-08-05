import React from 'react';
import About from './About';
import Certificates from './Certificates';
import Projects from './Projects';
import './Layout.css';

const Layout = () => (
  <section className="layout">
    <div className="layout-left">
      <section className="card">
        <About />
      </section>
      <section className="card">
        <Certificates />
      </section>
    </div>
    <div className="layout-right card">
      <Projects />
    </div>
  </section>
);

export default Layout;
