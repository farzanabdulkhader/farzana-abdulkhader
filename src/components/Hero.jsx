import RoundButton from "./RoundButton";

function Hero() {
  return (
    <>
      <div className="flex items-center flex-col justify-center sm:h-[100dvh] h-[calc(100dvh-135px)]">
        <div className=" sm:mb-0 mb-[135px] xs:text-[1rem] text-md px-4 xs:tracking-[5px] sm:px-8">
          <p className="xs:text-[8rem] text-4xl font-[300] mb-6 text-neutral-900 xs:font-[800]">
            Farzana
          </p>
          <div className="flex items-start space-x-2 justify-between font-[500] uppercase text-neutral-900 my-4">
            <div className="mt-2 h-[1.5px] bg-neutral-900 w-full"></div>
            <p className="whitespace-nowrap">Web Developer</p>
            <div className="mt-2 h-[1.5px] bg-neutral-900 w-full"></div>
          </div>
        </div>
        <div className="top-[32rem] absolute flex items-center justify-center">
          <a
            href="./FARZANA RESUME 2023.pdf"
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
