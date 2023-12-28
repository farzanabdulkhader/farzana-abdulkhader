// import RippleBg from "./ui/RippleBg";

import RippleBg from "./RippleBg";

function Background({ children }) {
  return (
    <>
      <div className="overlay1"></div>
      <div className="pattern"></div>
      <RippleBg />
      <div className="overlay2"></div>
      <div className="background-image"></div>
      {children}
    </>
  );
}

export default Background;
