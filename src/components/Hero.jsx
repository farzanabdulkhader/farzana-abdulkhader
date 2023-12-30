function Hero() {
  return (
    <>
      <div className="relative flex items-center flex-col justify-center h-screen">
        <div className="px-4 xs:tracking-[6px] sm:px-8 text-center">
          <p className="title text-4xl uppercase font-[100] mb-10 text-neutral-900 md:text-[7rem] sm:text-[6rem] text-[3.5rem]">
            Farzana
          </p>
          <div className="flex items-start space-x-2 justify-between font-[500] uppercase text-teal-900">
            <p className="whitespace-nowrap text-xs md:text-xl">
              Frontend Web Developer | React JS
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
