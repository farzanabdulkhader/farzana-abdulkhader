import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "./MenuIcon";

const hoverStyle =
  "relative after:absolute after:h-[1.5px] after:bottom-0 after:w-0 hover:after:w-full after:left-0 hover:after:right-0 after:bg-neutral-900 after:translate-all after:duration-500";

function NavMenu() {
  const [iconIsVisible, setIconIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (windowWidth < 1000) {
      setIconIsVisible(true);
    } else {
      setIconIsVisible(false);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFrom = 150;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (windowWidth < 1000) {
        setIconIsVisible(true);
      } else if (windowWidth > 999 && winScroll > heightToHideFrom) {
        !iconIsVisible && setIconIsVisible(true);
      } else {
        setIconIsVisible(false);
      }
    };

    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [iconIsVisible, windowWidth]);

  return (
    <>
      {iconIsVisible ? (
        <MenuIcon />
      ) : (
        <ul className="me-52 flex justify-end text-sm font-[600] space-x-3">
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
