import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

const hoverStyle =
  "hover:scale-110 hover:text-gray transition-all duration-100";

function SidebarRight({ page }) {
  return (
    <div className="sm:fixed absolute flex-col flex items-center justify-between w-20 sm:py-10  py-12 h-screen top-0 right-0 bottom-0">
      {page !== "projects" ? <NavMenu /> : <div></div>}

      <div className="xs:flex hidden md:self-center self-end md:ml-0 me-3 flex-col text-xl text-dark items-center justify-between space-y-4">
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
  );
}

export default SidebarRight;
