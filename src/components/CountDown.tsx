import { CountdownContext } from "../contexts/CountdownContext";
import { useContext } from "react";
import styles from "../styles/components/CountDown.module.css";

export default function CountDown() {
  const {
    minutes,
    seconds,
    resetCountdown,
    startCountdown,
    hasFinished,
    isActive,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Cicle finished
          <img src="icons/done.png" alt="" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              onClick={resetCountdown}
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            >
              Abandon cicle
            </button>
          ) : (
            <button
              type="button"
              onClick={startCountdown}
              className={styles.countdownButton}
            >
              Start cicle
            </button>
          )}
        </>
      )}
    </div>
  );
}
