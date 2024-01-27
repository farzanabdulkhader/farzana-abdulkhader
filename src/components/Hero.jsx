// const testStyle =
//   "xl:bg-blue-200 lg:bg-pink-200 md:bg-green-200 -z-50 sm:bg-yellow-200 xs:bg-blue-200 bg-red-200"; // {`${testStyle}`}

import RippleBg from "./RippleBg";

function Hero() {
  return (
    <>
      <div
        id="top"
        className={`relative flex items-center flex-col justify-center h-[690px]`}
      >
        <div className="flex md:flex-row flex-col tracking-widest md:items-end items-center justify-between lg:gap-32 md:max-lg:gap-8 sm:gap-14 gap-8">
          <div>
            <img
              src="hero.png"
              className="md:h-80 lg:h-80 sm:h-96 xs:h-96 h-60 object-contain"
            />
          </div>

          <div className="relative xs:tracking-3 text-left lg:scale-125 md:scale-100 sm:scale-125">
            <RippleBg />
            <p className="font-[300] -ml-1 text-orange md:text-[6rem] sm:text-6xl text-6xl">
              Hello!
            </p>
            <div className="flex items-start justify-between font-[600] text-neutral-900 text-xl uppercase">
              <p className="whitespace-nowrap">
                I&apos;m <span className="text-orange">Farzana</span>,<br></br>a
                Frontend developer
                <br></br> based in Kerala, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
