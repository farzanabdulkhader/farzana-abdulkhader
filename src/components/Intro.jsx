import Hero from "./Hero";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

function Intro() {
  return (
    <>
      <SidebarLeft />
      <Hero />
      <SidebarRight />
    </>
  );
}

export default Intro;
