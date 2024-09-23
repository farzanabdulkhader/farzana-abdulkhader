import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PiGithubLogo } from "react-icons/pi";
import { GoLinkExternal } from "react-icons/go";
import Tooltip from "./Tooltip";

const colorVariants = {
  kidzin: "bg-kidzin border-kidzin before:bg-kidzin text-dark",
  weatherly: "bg-weatherly border-weatherly before:bg-weatherly text-dark",
  notever: "bg-notever before:bg-notever border-notever text-light",
  fairshare: "bg-fairshare before:bg-fairshare border-fairshare text-dark",
  wandershare: "bg-wandershare before:bg-wandershare border-wandershare",
};

const Project = ({ project }) => {
  const { title, skills, shade, image, video, gitLink, liveLink } = project;
  const projectRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const checkVisibility = () => {
    if (projectRef.current) {
      const rect = projectRef.current.getBoundingClientRect();
      const isInView = rect.top >= 60 && rect.bottom <= window.innerHeight - 60;
      setIsVisible(isInView);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", checkVisibility);

    // Initial check
    handleResize();
    checkVisibility();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <div
      ref={projectRef}
      className={`h-fit relative p-2 pb-14 w-full before:absolute before:h-full before:left-0  before:top-0 before:bottom-0 before:z-[-1] z-0 before:transition-all before:duration-1000 before:hover:right-0
         before:${colorVariants[shade]} 
         ${isMobile && isVisible ? "before:right-0" : "before:right-full"} 
         `}
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
            className="w-full cursor-pointer object-cover object-center h-full scale-110 hover:scale-125 transition ease-in-out duration-[2s]"
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
              <Link
                to={liveLink}
                target="_blank"
                className={`${colorVariants[shade]}`}
              >
                <GoLinkExternal />
              </Link>
            )}
          </span>
        </Tooltip>
        <Tooltip text="View code">
          <span className="p-1 text-neutral-100 hover:scale-110 transition ease-in-out duration-300">
            <Link
              to={gitLink}
              target="_blank"
              className={`${colorVariants[shade]}`}
            >
              <PiGithubLogo />
            </Link>
          </span>
        </Tooltip>
      </div>
      <div className="text-right flex flex-col items-end absolute text-neutral-100 right-2 bottom-2">
        <h1
          className={`${colorVariants[shade]} cursor-pointer font-[600] text-lg p-2 inline`}
        >
          {title}
        </h1>
        <p className={`${colorVariants[shade]} p-3 block`}>
          {skills?.join(" | ")}
        </p>
      </div>
    </div>
  );
};

export default Project;
