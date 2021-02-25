import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

export default function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/talaric0.png" alt="Github profile picture" />
      <div>
        <strong>Bruno Talarico</strong>
        <p>
          <img src="icons/level.svg" alt="level picture" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
