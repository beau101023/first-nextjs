import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CounterPair from '../components/CounterPair.js';
import GitRepoAndParagraph from '../components/GitRepoAndParagraph.js';
import FakeStoreSearch from '../components/FakeStoreSearch.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <h1 className={styles.title}>
      Beau Baer
    </h1>

    <CounterPair/>
    <GitRepoAndParagraph/>
    <FakeStoreSearch/>

    </div>
  );
}