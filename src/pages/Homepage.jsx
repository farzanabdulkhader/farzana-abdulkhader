import Skills from "../components/Skills";
import Works from "../components/Works";
import About from "../components/About";
import Sidebars from "../components/Sidebars";
import Hero from "../components/Hero";

function Homepage() {
  return (
    <>
      <Hero />
      <Sidebars />
      <Works />
      <Skills />
      <About />
    </>
  );
}

export default Homepage;
