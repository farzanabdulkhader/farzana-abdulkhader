import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Works from "../components/Works";
import About from "../components/About";
import RippleBg from "../components/RippleBg";

function Homepage() {
  return (
    <>
      <RippleBg />
      <Intro />
      <Works />
      <Skills />
      <About />
    </>
  );
}

export default Homepage;
