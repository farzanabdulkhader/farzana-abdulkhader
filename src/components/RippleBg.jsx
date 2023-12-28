import styles from "./RippleBg.module.css";

const rippleStyle =
  "flex text-3xl font-extrabold items-center justify-center text-neutral-900";

function RippleBg() {
  return (
    <div className={styles.rippleBackground}>
      <div
        className={`${rippleStyle} left-[35px] top-[60px] ${styles.circle} ${styles.small} ${styles.shade6}`}
      ></div>
      <div
        className={`${rippleStyle} left-[35px] top-[60px] ${styles.circle} ${styles.tiny} ${styles.shade3}`}
      ></div>
      <div
        className={`${rippleStyle} left-[400px] top-[-20px] ${styles.circle} ${styles.small} ${styles.shade2}`}
      ></div>
      <div
        className={`${rippleStyle} left-[350px] top-[-40px] ${styles.circle} ${styles.xsmall} ${styles.shade4}`}
      ></div>
      <div
        className={`${rippleStyle} left-[360px] top-[285px] ${styles.circle} ${styles.medium} ${styles.shade4}`}
      ></div>
      <div
        className={`${rippleStyle} left-[600px] top-[260px] ${styles.circle} ${styles.xsmall} ${styles.shade6}`}
      ></div>
      <div
        className={`${rippleStyle} left-[-100px] top-[200px] ${styles.circle} ${styles.medium} ${styles.shade2}`}
      ></div>
      <div
        className={`${rippleStyle} left-[1000px] bottom-[-250px] ${styles.circle} ${styles.large} ${styles.shade1}`}
      ></div>
      <div
        className={`${rippleStyle} left-[900px] bottom-[30px] ${styles.circle} ${styles.small} ${styles.shade6}`}
      ></div>

      <div
        className={`${rippleStyle} left-[960px] bottom-[150px] ${styles.circle} ${styles.medium} ${styles.shade2}`}
      ></div>
      <div
        className={`${rippleStyle} left-[940px] top-[10px] ${styles.circle} ${styles.medium} ${styles.shade1}`}
      ></div>
      <div
        className={`${rippleStyle} left-[870px] top-[150px] ${styles.circle} ${styles.small} ${styles.shade4}`}
      ></div>
      <div
        className={`${rippleStyle} left-[-150px] top-[650px] ${styles.circle} ${styles.large} ${styles.shade3}`}
      ></div>
    </div>
  );
}

export default RippleBg;
