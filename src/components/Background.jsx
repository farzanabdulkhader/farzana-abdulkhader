import RippleBg from "./RippleBg";

// const bgStyle =
//   "bg-cover bg-center bg-no-repeat bg-fixed absolute h-full w-full top-0 left-0";

function Background({ children }) {
  return (
    <>
      <div
      // className={`${bgStyle} -z-100 opacity-40 bg-[url("/static/bg/bg-pattern.jpg")]`}
      ></div>
      {/* <div className={`${bgStyle} overlay1 -z-200 opacity-70`}></div> */}
      <RippleBg />
      {/* <div className={`${bgStyle} -z-100 bg-neutral-100/50`}></div> */}
      <div
      // className={`${bgStyle} -z-20 opacity-30  bg-[url('/static/bg/bg.jpg')]`}
      ></div>
      {children}
    </>
  );
}

export default Background;
