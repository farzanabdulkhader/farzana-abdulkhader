import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Background from "../components/Background";
import About from "../components/About";

function Homepage() {
  return (
    <>
      <Background>
        <Intro />
        <Works />
        <Skills />
        <About />
      </Background>
    </>
  );
}

export default Homepage;
