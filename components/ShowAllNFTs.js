import { database } from '../firebase';
import { ref, get} from "firebase/database";
import { React, useState, useEffect } from 'react';
import { useNFTData } from '../contexts/SyncNFTContext';
import SyncNFT from './SyncNFT';

export default function ShowAllNFTs() {
  const [nfts, setNFTs] = useState(null); // State to store NFT data
  
  
  useEffect(() => {
    const syncDatabase = async () => {
      try {
        const snapshot = await get(ref(database, 'nftDetails'));
        const nftData = snapshot.val();
        setNFTs(nftData);
      } catch (error) {
        console.error('Error fetching tokens:', error);
      }
    }

    syncDatabase(); // Call the fetchData function when the component mounts
  }, []) // Empty dependency array to run the effect once

  const handleBuy = (tokenId) => {
    // Implement the logic to handle buying the NFT with the given tokenId
    console.log(`Buying NFT with tokenId: ${tokenId}`);
  }

  return (
    <div className="nftCard">
      {nfts? (
        nfts.map((nftDetails) => (
        <div key={nftDetails.tokenId}>
          <h3>Name: {nftDetails.name}</h3>
          <p>Token Id: {nftDetails.tokenId}</p>
          <p>Description: {nftDetails.description}</p>
          <p>Owner: {nftDetails.owner}</p>
          <img width='300' src={nftDetails.image} alt={nftDetails.name} />
          <p>Price: {nftDetails.price} DHD</p>
          <button onClick={() => handleBuy(nftDetails.tokenId)}> Buy </button>
        </div>
      ))) : (
        <h3> waiting for sync </h3>
      )
    };
    </div>
  );
}