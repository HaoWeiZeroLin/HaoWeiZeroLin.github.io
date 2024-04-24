import React, { useState } from 'react';
import { useAddress } from '../../contexts/AddressContext';
import { nftContract } from '../../assets/web3/nftContract'; // Import your contract function here

export default function NFTMint() {
  const {address}= useAddress();
  const [receiver, setReceiver] = useState('');
  const [url, setUrl] = useState('');
  // https://ipfs.io/ipfs/QmZkVyjqx7T7wS8BJ3PaJHMTqeBUDeRa6fyHeWe7V7hbsN/5.json
  const handleMint = async () => {
    try {
      if (address) {
        const tx = await nftContract().mint(receiver, url);
        await tx.wait();
        console.log('NFT minted successfully.');
      } else {
        console.error('Web3 or contract not initialized.');
      }
    } catch (error) {
      console.error('Error minting NFT:', error);
    }
  };

  return (
    <div>
      <h2>Mint NFT</h2>
      <input
        type="text"
        placeholder="Receiver Address"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />
      <input
        type="text"
        placeholder="URI"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleMint}>Mint NFT</button>
    </div>
  );
};