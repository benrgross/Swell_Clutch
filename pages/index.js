import Head from "next/head";
import Header from "../components/Header";
import { useUser } from "@auth0/nextjs-auth0";
import GetStarted from "../components/GetStarted";
import Dashboard from "../components/Dashboard";

export default function Home() {
  const { user } = useUser();
  return (
    <div className={styles.container}>
      <Head>
        <title>Swell</title>
        <meta name="description" content="Surf App for Saving Swells" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        {user ? <Dashboard /> : <GetStarted />}
      </main>
    </div>
  );
}
