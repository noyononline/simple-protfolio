import React from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import AboutMe from "../Components/AboutMe/AboutMe";
import Experience from "../Components/Experience/Experience";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
