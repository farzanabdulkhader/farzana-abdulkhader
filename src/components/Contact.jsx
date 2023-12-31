import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import RoundButton from "./RoundButton";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

const hoverStyle =
  "hover:scale-105 hover:text-neutral-300 transition-all duration-100";

function Contact() {
  return (
    <section className="flex items-center justify-between md:px-20 lg:px-40 sm:px-12 px-6  m-auto py-12 h-fit bg-neutral-900">
      <div className="text-neutral-100">
        <h1 className="xs:text-xl text-lg text-neutral-100 mb-6 ">
          Hit me up!👇🏻
        </h1>
        <div className="flex items-center justify-start ">
          <Link to="mailto:farzanabdulkhader@gmail.com">
            <div className="text-neutral-900 xs:w-10 xs:h-10 xs:text-2xl text-xl w-8 h-8 rounded-full inline-flex items-center justify-center bg-slate-100">
              <MdEmail />
            </div>
          </Link>
          <div className="xs:ps-4 ps-2">
            <p className="font-[600] xs:text-xl text-md">Mail</p>
            <a
              href="mailto:farzanabdulkhader@gmail.com"
              className="inline xs:text-sm text-xs"
            >
              farzanabdulkhader@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="sm:flex-row flex-col flex items-center justify-between sm:space-y-0 space-y-8 md:space-x-12 sm:space-x-6">
        <a
          href="./Resume of FARZANA 2024.pdf"
          download
          className="cursor-pointer"
        >
          <RoundButton color="orange">
            <div className="space-y-2 mt-4">
              <span>Download CV</span>
              <motion.i
                animate={{ y: [-2, 0, 2, 4, 2, 0, -2] }}
                transition={{ repeat: "infinity", duration: 2 }}
                className="fa fa-light fa-circle-down"
                style={{ fontSize: "15px" }}
              ></motion.i>
            </div>
          </RoundButton>
        </a>
        <div className="flex text-neutral-100 text-xl space-x-4 items-center justify-between">
          <Link
            to="https://github.com/farzanabdulkhader"
            target="_blank"
            className={hoverStyle}
          >
            <TbBrandGithubFilled />
          </Link>

          <Link
            to="mailto:farzanabdulkhader@gmail.com"
            target="_blank"
            className={hoverStyle}
          >
            <MdEmail />
          </Link>
          <Link
            to="https://www.linkedin.com/in/farzana-abdul-khader-b46b45141/"
            target="_blank"
            className={hoverStyle}
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
