import Contact from "../components/Contact";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Background from "../components/Background";

function Homepage() {
  return (
    <>
      <Background>
        <Intro />
        <Works />
        <Skills />
        <Profile />
        <Contact />
        <Footer />
      </Background>
    </>
  );
}

export default Homepage;
