//Next
import Head from "next/head";
import { GetServerSideProps } from "next";
//Components
import CompletedChallenges from "../components/CompletedChallenges";
import CountDown from "../components/CountDown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import ChallengeBox from "../components/ChallengeBox";
//Styles
import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengeContext";
//nextauth
import { signIn, signOut, useSession } from "next-auth/client";
import { useEffect, useState } from "react";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const [session, loading] = useSession();
  const [isDark, setIsDark] = useState(false);

  function toggleDarkMode() {
    isDark ? setIsDark(false) : setIsDark(true);
  }

  useEffect(() => {
    if (isDark) {
      document.querySelector("body").style.background = "#0a0f18";
    } else {
      document.querySelector("body").style.background = "var(--background)";
    }
  }, [isDark]);

  return (
    <>
      {!session && (
        <>
          <div className={styles.background}>
            <div className={styles.leftScene}>
              <img src="images/simbol.png" alt="" />
            </div>
            <div className={styles.rightScene}>
              <div className={styles.title}>
                <h1>Take a Walk</h1>
              </div>
              <h3>Welcome</h3>
              <div className={styles.login}>
                <p>Login to continue</p>
              </div>
              <div>
                <a>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className={styles.icon}
                    onClick={(e) => {
                      e.preventDefault();
                      signIn("github");
                    }}
                  />
                </a>
                <a>
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className={styles.icon}
                    onClick={(e) => {
                      e.preventDefault();
                      signIn("google");
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
      {session && (
        <ChallengesProvider
          level={props.level}
          currentExperience={props.currentExperience}
          challengesCompleted={props.challengesCompleted}
        >
          <div className={styles.container}>
            <Head>
              <title>| Take a Walk |</title>
            </Head>

            <ExperienceBar signOut={signOut} />

            <CountdownProvider>
              <section>
                <div className={styles.leftContainer}>
                  <Profile
                    session={session}
                    setIsDark={setIsDark}
                    isDark={isDark}
                  />
                  <CompletedChallenges />
                  <CountDown isDark={isDark} />
                </div>

                <div>
                  <ChallengeBox isDark={isDark} />
                </div>
              </section>
            </CountdownProvider>
          </div>
        </ChallengesProvider>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
