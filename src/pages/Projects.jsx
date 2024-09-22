import Project from "../components/Project";
import Sidebars from "../components/Sidebars";
import RoundButton from "../components/RoundButton";
import projects from "../data/projects";
import ProjectEdit from "../components/ProjectEdit";

function Projects() {
  return (
    <>
      <Sidebars page="projects" />
      <section
        className={`px-2 md:my-20 my-4 sm:max-lg:py-20 xs:px-8 sm:max-lg:px-[5rem] lg:px-28 py-12 md:py-4 h-fit items-center justify-center`}
      >
        <div>
          <h1 className="text-4xl text-center underline underline-offset-2 text-neutral-900 font-[700] uppercase tracking-wider mb-20">
            My Works
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4">
            {projects.map((project) => (
              <ProjectEdit project={project} key={project.id} />
            ))}
          </div>
        </div>
        <div className="float-right my-8">
          {" "}
          <RoundButton color="dark">To Top</RoundButton>
        </div>
      </section>
    </>
  );
}

export default Projects;
