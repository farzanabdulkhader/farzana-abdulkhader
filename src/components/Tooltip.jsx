import { useState } from "react";

function Tooltip({ text, children, position = "bottom right" }) {
  const [isVisible, setIsVisible] = useState(false);
  const coordinates = position.split(" ");
  const locateStyling = {
    left: coordinates.includes("right") ? "0" : "auto",
    top: coordinates.includes("bottom") ? "100%" : "auto",
    right: coordinates.includes("left") ? "0" : "auto",
    bottom: coordinates.includes("top") ? "100%" : "auto",
  };

  const opacity = isVisible ? "opacity-1" : "opacity-0";
  return (
    <div
      className="relative flex flex-col"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      <span
        className={`${opacity} transition-opacity duration-300 ease-in absolute whitespace-nowrap bg-neutral-900/40 rounded-xs text-neutral-100 text-[10px] p-1 leading-3`}
        style={locateStyling}
      >
        {text}
      </span>
    </div>
  );
}

export default Tooltip;
