// import RippleBg from "./ui/RippleBg";

import RippleBg from "./RippleBg";

function Background({ children }) {
  return (
    <>
      <div className="overlay1"></div>
      {/* <div className="pattern bg-[url('/static/bg/bg-pattern.jpg')]"></div> */}
      <RippleBg />
      <div className="overlay2"></div>
      <div className="background-image bg-[url('/static/bg/bg.jpg')]"></div>
      {children}
    </>
  );
}

export default Background;
