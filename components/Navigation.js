// Navigation.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import ConnectWallet from './ConnectWallet';

export default function Navigation() {
  return (
    <h3 className={styles.description}>
    <nav>
      <Link href="/HomePage">Home</Link>
        //
      <Link href="/TokenPage">Token</Link>
        //
      <Link href="/NFTPage">My NFT</Link>
        //
      <Link href="/MarketplacePage">NFT details in Firebase</Link>

    </nav>
    </h3>
  );
}