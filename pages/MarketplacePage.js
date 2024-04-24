import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { database } from '../firebase';
import ShowAllNFTs from '../components/ShowAllNFTs';
import { marketplaceContract } from '../assets/web3/marketplaceContract';

export default function MarketplacePage() {
  // Define a function to handle selling an NFT
  const handleSellNFT = (nftDetails) => {
    // Implement your logic for selling the NFT here
    console.log(`Selling NFT with tokenId: ${nftDetails.tokenId}`);
  };

  return (
    <>
      <Head>
        <title>Marketplace Page</title>
      </Head>
      <Header />
      <main>
        <div>
          <h1>Marketplace</h1>
          <h2>My NFTs</h2>
          <ShowAllNFTs />
        </div>
      </main>
    </>
  );
}
