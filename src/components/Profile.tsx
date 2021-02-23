import React from "react";
import styles from "../styles/components/Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/talaric0.png" alt="Github profile picture" />
      <div>
        <strong>Bruno Talarico</strong>
        <p>
          <img src="icons/level.svg" alt="level picture" />
          Level 1
        </p>
      </div>
    </div>
  );
}
