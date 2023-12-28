import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "./MenuIcon";

const hoverStyle =
  "relative after:absolute after:h-[1.5px] after:bottom-0 after:w-0 hover:after:w-full after:left-0 hover:after:right-0 after:bg-neutral-900 after:translate-all after:duration-500";

function NavMenu() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFrom = 600;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
        isVisible && setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [isVisible]);

  return (
    <>
      {!isVisible ? (
        <MenuIcon />
      ) : (
        <ul className="me-52 lg:flex hidden justify-end text-sm font-[600] space-x-3">
          <li>
            <NavLink to="/projects" className={hoverStyle}>
              Projects
            </NavLink>
          </li>
          <li>/</li>
          <li className="whitespace-nowrap">
            <NavLink to="/about" className={hoverStyle}>
              About Me
            </NavLink>
          </li>
          <li>/</li>
          <li>
            <NavLink to="/contact" className={hoverStyle}>
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
}

export default NavMenu;
