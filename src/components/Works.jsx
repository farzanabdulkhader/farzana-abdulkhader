import Project from "./Project";
import projects from "../data/projects";
import RoundButton from "./RoundButton";
import { Link } from "react-router-dom";

// const testStyle =
//   "xl:bg-blue-200 lg:bg-pink-200 md:bg-green-200 -z-50 sm:bg-yellow-200 xs:bg-blue-200 bg-red-200"; // {`${testStyle}`}

function Works() {
  return (
    <>
      <section
        className={`px-2 sm:max-lg:py-20 xs:px-8 sm:max-lg:px-[5rem] lg:px-28 py-12 md:py-4 h-fit items-center justify-center mb-[8rem]`}
      >
        <div>
          <h1 className="text-2xl underline underline-offset-4 text-neutral-900 font-[700] uppercase tracking-wider mb-8">
            My Works
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
            {projects.map((project) => (
              <Project project={project} key={project.id} />
            ))}
          </div>
          <div className="flex justify-end mt-4">
            <Link to="/projects">
              <RoundButton color="dark">View all projects</RoundButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Works;
