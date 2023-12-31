function Hero() {
  return (
    <>
      <div className="relative flex items-center flex-col justify-center h-screen">
        <div className="px-4 xs:tracking-[6px] sm:px-8 text-center">
          <p className="title -mb-6 uppercase sm:font-[200] font-[300] lg:font-[100] text-neutral-900 md:text-[7rem] sm:text-[6rem] text-[5rem]">
            Farzana
          </p>
          <div className="flex items-start space-x-2 justify-between font-[500] uppercase text-teal-900">
            <p className=" text-xl">Frontend Web Developer | React JS</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
