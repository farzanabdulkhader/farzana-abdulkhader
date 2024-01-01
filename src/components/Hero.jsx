function Hero() {
  return (
    <>
      <div className="relative flex items-center flex-col justify-center h-screen">
        <div className="flex md:flex-row flex-col md:items-end items-center justify-between md:gap-12 gap-32">
          <div>
            <img src="hero.png" className="h-72" />
          </div>
          <div
            className="px-4 xs:tracking-[8px] sm:px-8 
        text-left"
          >
            <p className=" -ms-2 text-4xl font-[300]  mb-8 text-[#ff914d]  md:text-[6rem] sm:text-[6rem] text-[3.5rem]">
              Hello!
            </p>
            <div className="flex items-start xs:tracking-[4px] space-x-2 justify-between font-[600] text-neutral-900 uppercase">
              <p className="whitespace-nowrap text-sm md:text-2xl">
                I&apos;m <span className="text-[#ff914d]">Farzana</span>,
                <br></br> a Frontend developer
                {/* <img src="girl.png" className="h-14 mb-[1px] inline" /> */}
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
