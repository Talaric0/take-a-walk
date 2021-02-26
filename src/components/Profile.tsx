import React, { useContext, useEffect } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";
import Cookies from "js-cookie";

export default function Profile({ session }) {
  const { level } = useContext(ChallengesContext);

  console.log(session);

  useEffect(() => {
    Cookies.set("userName", session.user.name);
    Cookies.set("image_url", session.user.image);
  }, [session]);

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
    </div>
  );
}
