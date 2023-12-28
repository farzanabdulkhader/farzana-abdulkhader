// import { useEffect, useState } from "react";

function Logo({ imageUrl }) {
  // const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       setVisible(true);
  //     } else {
  //       setVisible(false);
  //     }
  //   });
  // }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={scrollUp}>
      <img className="w-[50px] cursor-pointer z-1000" src={imageUrl} />
    </button>
  );
}

export default Logo;
