import { GoLinkExternal } from "react-icons/go";
import { PiGithubLogo } from "react-icons/pi";
import { Link } from "react-router-dom";
import Tooltip from "./Tooltip";

const colorVariants = {
  kidzin: "bg-kidzin border-kidzin before:bg-kidzin text-dark",
  weatherly: "bg-weatherly border-weatherly before:bg-weatherly text-dark",
  notever: "bg-notever before:bg-notever border-notever text-dark",
  fairshare: "bg-fairshare before:bg-fairshare border-fairshare text-dark",
  wandershare:
    "bg-wandershare before:bg-wandershare border-wandershare text-dark",
};

function Project({ project }) {
  const { title, skills, shade, image, video, gitLink, liveLink } = project;
  return (
    <div
      className={`h-fit relative p-2 pb-14 w-full before:absolute before:h-full before:left-0 before:right-full before:top-0 before:bottom-0 before:${colorVariants[shade]} before:z-[-1] z-0 before:translate-all before:duration-1000 hover:before:right-0`}
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
          <span className="p-1 text-neutral-100 hover:scale-110 transition ease-in-out duration-300">
            <Link to={gitLink} target="_blank">
              <PiGithubLogo />
            </Link>
          </span>
        </Tooltip>
      </div>
      <div className="text-right flex flex-col items-end absolute text-neutral-100 right-2 bottom-2">
        <h1
          className={`${colorVariants[shade]} cursor-pointer font-[600] text-lg p-2 rounded-sm inline`}
        >
          {title}
        </h1>
        <p className={`${colorVariants[shade]} p-3 rounded-sm block`}>
          {/* <p className="border-red-500 border-2 p-2 rounded-sm block"> */}
          {skills.join(" | ")}
        </p>
      </div>
    </div>
  );
}

export default Project;
