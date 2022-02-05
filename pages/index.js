import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { user } = useUser();
  return (
    <div className={styles.container}>
      <Head>
        <title>Swell</title>
        <meta name="description" content="Surf App for Saving Swells" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {user ? <h1>you are logged in</h1> : <h1>you are not logged in</h1>}{" "}
      </body>
    </div>
  );
}
