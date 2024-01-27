import { NavLink } from "react-router-dom";

function Logo({ imageUrl, page = null }) {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button onClick={scrollUp}>
        {page === "projects" ? (
          <NavLink to="/">
            <img
              className="w-[50px] cursor-pointer z-1000 opacity-95"
              src={imageUrl}
            />
          </NavLink>
        ) : (
          <img
            className="w-[50px] cursor-pointer z-1000 opacity-95"
            src={imageUrl}
          />
        )}
      </button>
    </>
  );
}

export default Logo;
