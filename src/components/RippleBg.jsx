import styles from "./RippleBg.module.css";

const rippleStyle =
  "flex text-3xl font-extrabold items-center justify-center text-amber-900 z-0";

function RippleBg() {
  return (
    <div className={`${styles.rippleBackground}`}>
      <div
        className={`${rippleStyle} left-[35px] top-[60px] ${styles.circle} ${styles.small} ${styles.shade8} opacity-20`}
      ></div>
      <div
        className={`${rippleStyle} left-[35px] top-[60px] ${styles.circle} ${styles.tiny} ${styles.shade9} opacity-70`}
      ></div>
      <div
        className={`${rippleStyle} left-[400px] top-[-20px] ${styles.circle} ${styles.small} ${styles.shade8} opacity-40`}
      ></div>
      <div
        className={`${rippleStyle} left-[350px] top-[-40px] ${styles.circle} ${styles.xsmall} ${styles.shade9} opacity-90`}
      ></div>
      <div
        className={`${rippleStyle} left-[360px] top-[285px] ${styles.circle} ${styles.medium} ${styles.shade8} opacity-10`}
      ></div>

      <div
        className={`${rippleStyle} left-[-100px] top-[200px] ${styles.circle} ${styles.medium} ${styles.shade9} opacity-60`}
      ></div>
      <div
        className={`${rippleStyle} left-[1000px] bottom-[-250px] ${styles.circle} ${styles.large} ${styles.shade8} opacity-10`}
      ></div>
      <div
        className={`${rippleStyle} left-[900px] bottom-[30px] ${styles.circle} ${styles.small} ${styles.shade9} opacity-60`}
      ></div>

      {/* <div
        className={`${rippleStyle} left-[960px] bottom-[150px] ${styles.circle} ${styles.medium} ${styles.shade7} opacity-40`}
      ></div> */}
      <div
        className={`${rippleStyle} left-[870px] top-[150px] ${styles.circle} ${styles.small} ${styles.shade8} opacity-20`}
      ></div>

      <div
        className={`${rippleStyle} left-[620px] top-[390px] ${styles.circle} ${styles.xsmall} ${styles.shade8} opacity-50`}
      ></div>
      <div
        className={`${rippleStyle} left-[550px] bottom-[200px] ${styles.circle} ${styles.small} ${styles.shade9} opacity-70`}
      ></div>
      <div
        className={`${rippleStyle} left-[940px] top-[10px] ${styles.circle} ${styles.medium} ${styles.shade9} opacity-70`}
      ></div>
    </div>
  );
}

export default RippleBg;
