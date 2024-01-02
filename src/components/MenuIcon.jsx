import { CgMenuGridO } from "react-icons/cg";
import useComponentVisible from "../hooks/useComponentVisible";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

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
          className="relative cursor-pointer text-[26px] hover:scale-105 hover:text-neutral-950 transition-all duration-100"
          onClick={openMenu}
        >
          <CgMenuGridO />
        </div>
      ) : (
        <div className="cursor-pointer text-2xl " onClick={closeMenu}>
          <IoMdArrowDropdown />
          {isComponentVisible && isVisibleDropdown && (
            <div
              ref={ref}
              className="absolute text-dark tracking-wider -left-[30%] b-0 w-20 cursor-pointer flex flex-col items-end justify-end"
            >
              <Dropdown />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default MenuIcon;
