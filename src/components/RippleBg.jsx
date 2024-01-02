import styles from "./RippleBg.module.css";

function RippleBg() {
  return (
    <div className={`${styles.rippleBackground}`}>
      <div
        className={`left-[0px] top-[0px] ${styles.circle} ${styles.small} ${styles.shade9}`}
      ></div>
      <div
        className={`left-[0px] top-[0px] ${styles.circle} ${styles.xsmall} ${styles.shade8}`}
      ></div>
    </div>
  );
}

export default RippleBg;
