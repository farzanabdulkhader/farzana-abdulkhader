import { FaReact } from "react-icons/fa";
import { BiLogoRedux } from "react-icons/bi";
import { SiReactrouter } from "react-icons/si";
import { MdJavascript } from "react-icons/md";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiReactquery } from "react-icons/si";
import { DiCss3Full } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { RiSupabaseLine } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { RiBootstrapLine } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";

const skillDivStyle =
  "flex items-center justify-between xs:gap-2 gap-1 whitespace-nowrap flex-col p-2";

const skillTextStyle = "sm:text-[12px] text-[10px] font-[600]";

function Skills() {
  return (
    <section className="md:px-36 lg:px-40 sm:px-24 px-8 py-12 h-fit flex items-center justify-center lg:mb-8">
      <div className="skills border-2 border-neutral-900 relative w-full h-full bg-neutral-300/30 py-12 px-6 md:px-12">
        <h1 className="text-xl underline underline-offset-4 text-neutral-900 font-[700] uppercase tracking-wider mb-8">
          My Toolkit
        </h1>
        <div className="grid grid-flow-row xs:gap-10 gap-2 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-3 grid-cols-2 md:text-5xl text-4xl text-neutral-900">
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
            <SiReactrouter />
            <span className={skillTextStyle}>React Router</span>
          </div>
          <div className={skillDivStyle}>
            <SiReactquery />
            <span className={skillTextStyle}>React Query</span>
          </div>
          <div className={skillDivStyle}>
            <SiReacthookform />
            <span className={skillTextStyle}>React Hook Form</span>
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
            <AiOutlineHtml5 />
            <span className={skillTextStyle}>HTML5</span>
          </div>
          <div className={skillDivStyle}>
            <DiCss3Full />
            <span className={skillTextStyle}>CSS3</span>
          </div>
          <div className={skillDivStyle}>
            <MdJavascript />
            <span className={skillTextStyle}>JavaScript</span>
          </div>
          <div className={skillDivStyle}>
            <RiBootstrapLine />
            <span className={skillTextStyle}>Bootstrap</span>
          </div>
          <div className={skillDivStyle}>
            <FaGitAlt />
            <span className={skillTextStyle}>GIT</span>
          </div>
          <div className={skillDivStyle}>
            <LuGithub />
            <span className={skillTextStyle}>GitHub</span>
          </div>
          <div className={skillDivStyle}>
            <RiSupabaseLine />
            <span className={skillTextStyle}>Supabase</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
