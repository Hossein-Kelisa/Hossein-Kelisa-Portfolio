import React from 'react';
import About from './About';
import Certificates from './Certificates';
import Projects from './Projects';
import './Layout.css';

const Layout = () => (
  <div className="container">
    <div className="left-column">
      <About />
      <Certificates />
    </div>
    <Projects />
  </div>
);

export default Layout;
