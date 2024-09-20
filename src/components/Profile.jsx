import RoundButton from "./RoundButton";
function Profile() {
  return (
    <>
      <section className="sm:px-10 sm:gap-12 xs:px-5 px-3 pt-10 sm:pt-20 h-fit sm:flex items-center -mb-1 justify-between bg-neutral-900">
        <div className="basis-1/3 self-start sm:pb-0 pb-8 sm:pt-10 pt-0">
          <div className="rounded-full sm:max-lg:w-full w-3/4 m-auto overflow-hidden">
            <img
              src="orange-crop.png"
              className="w-[800px] object-left-top object-cover opacity-8"
            />
          </div>
        </div>
        <div className="basis-2/3">
          <h1 className="xs:text-2xl text-xl underline underline-offset-4 text-neutral-100 font-[700] uppercase tracking-wider mb-8">
            About Me
          </h1>
          <p className="sm:text-md text-sm font-[300] leading-6 tracking-wide text-neutral-100">
            I am a Full Stack Developer skilled in building responsive web
            applications using the MERN stack (MongoDB, Express.js, React, and
            Node.js). Starting with front-end technologies like HTML, CSS,
            JavaScript, React, and Tailwind, I’ve expanded my skills to include
            back-end development and database management. I’ve applied these
            skills in various personal and freelance projects, creating both
            user-friendly interfaces and efficient server-side applications. I’m
            passionate about learning and staying updated with the latest web
            technologies to continuously improve as a developer. My current
            focus is on mastering full-stack development and using my skills to
            create effective web solutions.
          </p>
        </div>
      </section>
    </>
  );
}

export default Profile;
