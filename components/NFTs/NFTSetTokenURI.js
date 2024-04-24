import React, { useState } from 'react';
import { useAddress } from '../../contexts/AddressContext';
import { nftContract } from '../../assets/web3/nftContract'; // Import your contract function here

export default function NFTSetTokenURI() {
  const {address}= useAddress();
  const [tokenId, setTokenId] = useState('');
  const [newURI, setNewURI] = useState('');

  const handleSetTokenURI = async () => {
    try {
      if (address) {
        const tx = await nftContract().setTokenURI(tokenId, newURI);
        await tx.wait();
        console.log('Token URI set successfully.');
      } else {
        console.error('Web3 or contract not initialized.');
      }
    } catch (error) {
      console.error('Error setting token URI:', error);
    }
  };

  return (
    <div>
      <h2>Set Token URI</h2>
      <input
        type="number"
        placeholder="Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />
      <input
        type="text"
        placeholder="New URI"
        value={newURI}
        onChange={(e) => setNewURI(e.target.value)}
      />
      <button onClick={handleSetTokenURI}>Set Token URI</button>
    </div>
  );
};
