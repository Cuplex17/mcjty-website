import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../../styles/Index.module.css';
import {useRouter} from "next/router";
import Link from "next/link";

const Mods: NextPage = () => {
  // TODO: use middleware instead
  const router = useRouter();

  const query = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>McJty Redirector</title>
        <meta name="description" content="McJty Redirector"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mods - McJty Redirector
        </h1>

        <Link href={"https://www.mcjty.eu/"}>
          <p className={styles.description}>
            Redirect to the new site!
          </p>
        </Link>

        <p>
          {JSON.stringify(query, null, 2)}
        </p>
      </main>
    </div>
  );
}

export default Mods;
