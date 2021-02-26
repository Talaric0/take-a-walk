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

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const [session, loading] = useSession();

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
                <p>Login with Google to continue</p>
              </div>
              <a
                href={`/api/auth/signin`}
                onClick={() => {
                  signIn();
                }}
              >
                <img
                  src="images/btn_google_signin_dark_normal_web@2x.png"
                  alt="google login button"
                />
              </a>
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

            <ExperienceBar />
            <CountdownProvider>
              <section>
                <div className={styles.leftContainer}>
                  <Profile session={session} />
                  <CompletedChallenges />
                  <CountDown />
                </div>

                <div>
                  <ChallengeBox />
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
