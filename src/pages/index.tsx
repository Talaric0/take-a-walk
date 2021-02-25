//Next
import Head from "next/head";
//Components
import CompletedChallenges from "../components/CompletedChallenges";
import CountDown from "../components/CountDown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import ChallengeBox from "../components/ChallengeBox";
//Styles
import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Take a Walk</title>
      </Head>

      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div className={styles.leftContainer}>
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>

          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
