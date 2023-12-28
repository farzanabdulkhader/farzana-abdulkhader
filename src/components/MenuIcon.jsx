import { CgMenuGridO } from "react-icons/cg";
import useComponentVisible from "../hooks/useComponentVisible";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";

const hoverStyle =
  "relative after:absolute after:h-[1.5px] after:bottom-0 after:w-0 hover:after:w-full after:left-0 hover:after:right-0 after:bg-neutral-900 after:translate-all after:duration-500";

function MenuIcon() {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  function openMenu() {
    setIsOpenMenu(true);
    setIsComponentVisible(true);
  }

  function closeMenu() {
    setIsOpenMenu(false);
  }

  const [isVisibleDropdown, setIsVisibleDropdown] = useState(true);
  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFrom = 1890;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
        if (isVisibleDropdown) {
          setIsVisibleDropdown(false);
          setIsOpenMenu(false);
        }
      } else {
        setIsVisibleDropdown(true);
      }
    };

    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [isVisibleDropdown]);

  return (
    <>
      {!isOpenMenu || !isComponentVisible ? (
        <div
          className="cursor-pointer text-[26px] hover:scale-105 hover:text-neutral-950 transition-all duration-100"
          onClick={openMenu}
        >
          <CgMenuGridO />
        </div>
      ) : (
        <div className="relative cursor-pointer text-2xl " onClick={closeMenu}>
          <IoMdArrowDropdown />
          {isComponentVisible && isVisibleDropdown && (
            <div
              ref={ref}
              className="absolute mt-2 right-[-8px] border-2 border-neutral-900 bg-neutral-300/30 p-2 cursor-pointer flex flex-col items-end justify-end"
            >
              <ul className="lg:flex flex-col hidden gap-8 justify-center items-end text-sm font-[600] space-x-3">
                <li>
                  <NavLink to="/projects" className={hoverStyle}>
                    Projects /
                  </NavLink>
                </li>
                <li className="whitespace-nowrap">
                  <NavLink to="/about" className={hoverStyle}>
                    About Me /
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={hoverStyle}>
                    Contact /
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default MenuIcon;
