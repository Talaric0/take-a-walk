import CompletedChallenges from "../components/CompletedChallenges";
import CountDown from "../components/CountDown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import styles from "../styles/pages/Home.module.css";

import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Take a Walk</title>
      </Head>

      <ExperienceBar />

      <section>
        <div className={styles.leftContainer}>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>

        <div></div>
      </section>
    </div>
  );
}
