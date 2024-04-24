import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import NFTBalance from '../components/NFTs/NFTBalance';
import TokenBalance from '../components/TokenBalance';

export default function HomePage() {

  return (

    <div>
      <Head>
        <title> Decrypt Hell </title>
        <link rel="icon" src="images/DH.png" />
      </Head>
      <Header />

      <main>
        <div className={styles.grid}>
          <Link 
            href="/TokenPage"
            className={styles.card}>
            <h3>DHD Token Test</h3>
            <TokenBalance />
          </Link>
          <Link
            href="/NFTPage"
            className={styles.card}
          >
            <h3>DH NFT</h3>
            <NFTBalance />
          </Link>
        </div>
      </main>

      <footer>
          This is footer.
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>

  );
}
