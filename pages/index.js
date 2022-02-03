import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Swell</title>
        <meta name="description" content="Surf App for Saving Swells" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>you are logged in </body>
    </div>
  );
}
