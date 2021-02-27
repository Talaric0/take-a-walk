import React, { useContext, useEffect } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";
import Cookies from "js-cookie";

export default function Profile({ session, setIsDark, isDark }) {
  const { level } = useContext(ChallengesContext);

  useEffect(() => {
    Cookies.set("userName", session.user.name);
    Cookies.set("image_url", session.user.image);
  }, [session]);

  function handleDarkModeClick() {
    setIsDark(!isDark);
  }

  return (
    <div className={styles.profileContainer}>
      <img src={session.user.image} alt="Github profile picture" />
      <div>
        <strong>{session.user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="level picture" />
          Level {level}
        </p>
      </div>

      {level >= 3 && (
        <label className={styles.switch} onChange={handleDarkModeClick}>
          <input id="js-switch" type="checkbox" />
          <div className={styles.slider}></div>
        </label>
      )}
    </div>
  );
}
