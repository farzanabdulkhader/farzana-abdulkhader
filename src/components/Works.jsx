import Project from "./Project";
import projects from "../data/projects";
import RoundButton from "./RoundButton";
import { Link } from "react-router-dom";

function Works() {
  return (
    <>
      <section className="px-2 xs:px-8 sm:max-lg:px-24 lg:px-40 py-12 md:py-4 h-fit items-center justify-center">
        <div>
          <h1 className="text-2xl underline underline-offset-4 text-neutral-900 font-[700] uppercase tracking-wider mb-8">
            My Works
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            {projects.map((project) => (
              <Project project={project} key={project.id} />
            ))}
          </div>
          <div className="flex justify-end">
            <Link to="/projects">
              <RoundButton>View all projects</RoundButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Works;
