import React from 'react';
import Navigation from './Navigation';
import ConnectWallet from './ConnectWallet';
import SyncNFT from './SyncNFT';
import styles from '../styles/Home.module.css';
import { Web3Auth } from '@web3auth/modal';

export default function Header() {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to <a href="https://synthetical.io/">Decrypt Hell!!</a>
      </h1>
      <div className={styles.description}>
        <Navigation />
        <ConnectWallet />
        <SyncNFT />
      </div>
    </>
  )
}