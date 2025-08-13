import React from 'react';
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
