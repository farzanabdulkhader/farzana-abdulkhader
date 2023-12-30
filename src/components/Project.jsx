import { GoLinkExternal } from "react-icons/go";
import { PiGithubLogo } from "react-icons/pi";
import { Link } from "react-router-dom";
import Tooltip from "./Tooltip";

function Project({ project }) {
  const { title, skills, shade, image, video, gitLink, liveLink } = project;
  const colorVariants = {
    peach: "bg-peachy border-peachy before:bg-peachy",
    green: "bg-greeny border-greeny before:bg-greeny",
    grape: "bg-grapey border-grapey before:bg-grapey",
    orange: "bg-orangey border-orangey before:bg-orangey",
    teal: "bg-teal-300 before:bg-teal-300 border-teal-300 text-neutral-100",
    dark: "bg-fuchsia-600 before:bg-fuchsia-600 border-fuchsia-600",
  };

  return (
    <div
      className={`h-fit relative p-3 pb-14 w-full mb-2 before:absolute before:h-full before:left-0 before:right-full before:top-0 before:bottom-0 before:${colorVariants[shade]} before:z-[-1] z-0 before:translate-all before:duration-1000 hover:before:right-0`}
    >
      <div
        className={`${colorVariants[shade]} h-fit w-full border-2 overflow-hidden`}
      >
        {image ? (
          <img
            src={image}
            className="w-full object-cover cursor-pointer hover:scale-125 transition ease-in-out duration-[2s]"
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            className="w-full cursor-pointer object-cover object-center h-full scale-110 hover:scale-125 transition
              ease-in-out duration-[2s]"
          >
            <source src={video} type="video/mp4" />
          </video>
        )}
      </div>
      <div
        className={`${colorVariants[shade]} flex space-x-2 text-xl absolute top-14`}
      >
        <Tooltip text="Open live site">
          <span className="p-1 text-neutral-100 hover:scale-110 transition ease-in-out duration-300">
            {liveLink && (
              <Link to={liveLink} target="_blank">
                <GoLinkExternal />
              </Link>
            )}
          </span>
        </Tooltip>
        <Tooltip text="View code">
          <span className="p-1  text-neutral-100 hover:scale-110 transition ease-in-out duration-300">
            <Link to={gitLink} target="_blank">
              <PiGithubLogo />
            </Link>
          </span>
        </Tooltip>
      </div>
      <div className="text-right absolute text-neutral-100 -right-1 bottom-0 p-4">
        <h1
          className={`${colorVariants[shade]} cursor-pointer font-[600] text-lg p-2 rounded-sm`}
        >
          {title}
        </h1>
        <p className={`${colorVariants[shade]} inline p-2 rounded-sm`}>
          {skills.join(" | ")}
        </p>
      </div>
    </div>
  );
}

export default Project;
