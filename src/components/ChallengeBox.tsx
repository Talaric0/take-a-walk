import { useContext, useEffect } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/ChallengeBox.module.css";

export default function ChallengeBox({ isDark }) {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div
      className={
        isDark ? styles.challengeBoxContainerDark : styles.challengeBoxContainer
      }
    >
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Icon" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>

            <footer>
              <button
                type="button"
                onClick={handleChallengeFailed}
                className={styles.challengeFailedButton}
              >
                Falhei
              </button>
              <button
                type="button"
                onClick={handleChallengeSucceeded}
                className={styles.challengeSucceededButton}
              >
                Completei
              </button>
            </footer>
          </main>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finish cicles to unlock challenges.</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Up your levels by completing challenges.
          </p>
          <p>Unlock dark mode at level 3.</p>
        </div>
      )}
    </div>
  );
}
