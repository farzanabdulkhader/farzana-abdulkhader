import RoundButton from "./RoundButton";

function Hero() {
  return (
    <>
      <div className="relative flex items-center flex-col justify-center lg:h-[720px] md:h-[550px] sm:h-[470px] h-[320px]">
        <div className="sm:mb-0 mb-[135px] px-4 xs:tracking-[5px] sm:px-8">
          <p className="title text-4xl font-[300] sm:mb-6 -mb-2 text-teal-800 md:text-[7rem] sm:text-[6rem] text-[3.5rem]">
            Farzana
          </p>
          <div className="flex items-start space-x-2 justify-between font-[500] uppercase text-neutral-700 my-4">
            <div className="mt-2 h-[1.5px] bg-neutral-700 w-full"></div>
            <p className="whitespace-nowrap text-xs  md:text-xl">
              Web Developer
            </p>
            <div className="mt-2 h-[1.5px] bg-neutral-700 w-full"></div>
          </div>
        </div>
        <div className="lg:bottom-24 md:bottom-20 bottom-14 absolute flex items-center justify-center">
          <a
            href="./Resume of FARZANA 2024.pdf"
            download
            className="cursor-pointer text-[13px] font-[500] underline underline-offset-4"
          >
            <RoundButton>Download CV</RoundButton>
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
