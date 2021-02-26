import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/CompletedChallenges.module.css";

export default function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Challenges completed</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
