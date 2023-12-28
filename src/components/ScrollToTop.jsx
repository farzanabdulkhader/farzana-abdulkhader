import { useEffect, useState } from "react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          className="fixed z-2000 bottom-10 left-10 w-10 h-10 text-2xl bg-red-500 text-neutral-900"
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
