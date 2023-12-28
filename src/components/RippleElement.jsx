/* eslint-disable react/prop-types */
import styles from "./ui/RippleBg.module.css";

function RippleElement({
  shape = "circle",
  size = [200, 200],
  position = [200, 200],
  shade = "shade1",
}) {
  return (
    // <div
    //   className={`${styles[shape]} left-[${position.at(
    //     0
    //   )}px] top-[${position.at(1)}px] ${styles[shade]} w-[${size.at(
    //     0
    //   )}px] h-[${size.at(1)}px]`}
    // ></div>
    <div
      className={`left-[${position.at(0)}] top-[${position.at(1)}] h-[length:${
        size[0]
      }px] w-[length:${size[1]}px] ${styles[shape]}    ${styles[shade]}`}
    ></div>
  );
}

export default RippleElement;

// shade = "#ff1900",
// #00ffdd
// #365314
