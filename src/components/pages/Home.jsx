import Hero from "../Hero";
import About from "./About";
import Contact from "./Contacts";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </>
  );
};

export default Home;