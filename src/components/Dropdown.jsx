import { NavLink } from "react-router-dom";

const hoverStyle =
  "relative after:absolute after:h-[1.5px] after:bottom-0 after:w-0 hover:after:w-full after:left-0 hover:after:right-0 after:bg-neutral-900 after:translate-all after:duration-500";

function Dropdown() {
  return (
    <div>
      <ul className="flex flex-col items-center justify-center gap-1 text-[11px] md:text-xs md:leading-8 leading-6 font-[600]">
        <li>
          <NavLink to="/projects" className={hoverStyle}>
            Projects
          </NavLink>
        </li>
        <li className="whitespace-nowrap">
          <NavLink to="/about" className={hoverStyle}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={hoverStyle}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
