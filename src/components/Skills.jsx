import { FaReact } from "react-icons/fa";
import { BiLogoRedux } from "react-icons/bi";
import { LiaJsSquare } from "react-icons/lia";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiReactquery } from "react-icons/si";
import { GrCss3 } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { RiSupabaseLine } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const skillDivStyle =
  "flex items-center justify-between xs:gap-2 gap-0 text-[2.8rem] sm:text-4xl whitespace-nowrap flex-col p-2";

const skillTextStyle = "sm:text-[12px] text-[10px] font-[600]";

function Skills() {
  return (
    <section
      className={` md:px-30 lg:px-40 sm:px-24 px-4 py-12 h-fit flex items-center justify-center lg:mb-8`}
    >
      <div className="skills border-2 border-neutral-900 relative w-full h-full bg-neutral-300/30 py-12 px-6 md:px-12">
        <h1 className="text-xl text-neutral-900 font-[700] uppercase mb-12 tracking-wider">
          My Toolkit
        </h1>
        <div className="grid grid-flow-row xs:gap-8 gap-2 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-3 grid-cols-2 md:text-5xl text-4xl text-neutral-900">
          <div className={`${skillDivStyle}`}>
            <div className="rotate">
              <FaReact />
            </div>
            <span className={skillTextStyle}>React JS</span>
          </div>
          <div className={skillDivStyle}>
            <BiLogoRedux />
            <span className={skillTextStyle}>Redux</span>
          </div>

          <div className={skillDivStyle}>
            <SiReactquery />
            <span className={skillTextStyle}>React Query</span>
          </div>

          <div className={skillDivStyle}>
            <BiLogoTailwindCss />
            <span className={skillTextStyle}>Tailwind CSS</span>
          </div>
          <div className={skillDivStyle}>
            <SiStyledcomponents />
            <span className={skillTextStyle}>Styled Components</span>
          </div>
          <div className={skillDivStyle}>
            <LiaJsSquare />
            <span className={skillTextStyle}>JavaScript</span>
          </div>
          <div className={skillDivStyle}>
            <AiOutlineHtml5 />
            <span className={skillTextStyle}>HTML5</span>
          </div>
          <div className={skillDivStyle}>
            <GrCss3 />
            <span className={skillTextStyle}>CSS3</span>
          </div>

          <div className={skillDivStyle}>
            <FaBootstrap />
            <span className={skillTextStyle}>Bootstrap</span>
          </div>
          <div className={skillDivStyle}>
            <FaGitAlt />
            <span className={skillTextStyle}>GIT</span>
          </div>
          <div className={skillDivStyle}>
            <IoLogoGithub />
            <span className={skillTextStyle}>GitHub</span>
          </div>
          <div className={skillDivStyle}>
            <RiSupabaseLine />
            <span className={skillTextStyle}>Supabase</span>
          </div>
          <div className={skillDivStyle}>
            <IoLogoNodejs />
            <span className={skillTextStyle}>Node JS</span>
          </div>
          <div className={skillDivStyle}>
            <BiLogoMongodb />
            <span className={skillTextStyle}>MongoDB</span>
          </div>
          <div className={skillDivStyle}>
            <SiExpress />
            <span className={skillTextStyle}>Express JS</span>
          </div>
          <div className={skillDivStyle}>
            <img src="cloud-api.png" alt="api-icon" className="h-12 w-12" />
            <span className={skillTextStyle}>RSET API</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
