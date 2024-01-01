import styles from "./RippleBg.module.css";

function RippleBg() {
  return (
    <div className={`${styles.rippleBackground}`}>
      <div
        className={`left-[815px] top-[115px] ${styles.circle} ${styles.small} ${styles.shade9}`}
      ></div>
      <div
        className={`left-[945px] top-[105px] ${styles.circle} ${styles.xsmall} ${styles.shade8}`}
      ></div>
    </div>
  );
}

export default RippleBg;
