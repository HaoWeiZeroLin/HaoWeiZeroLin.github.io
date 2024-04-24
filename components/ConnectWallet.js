import React from 'react';
import { ethers } from 'ethers';
import { useAddress } from '../contexts/AddressContext';

export default function ConnectWallet() {
  const {address, setAddress} = useAddress();
  // Function to connect to Metamask
  const connectMetaMask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request Metamask account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const [account] = await provider.listAccounts();
        setAddress(account);
        
      } catch (error) {
        console.error('Error connecting to Metamask:', error);
      }
    } else {
      console.error('Metamask is not installed');
    }
  };
  
  return (
    <div>
      {address ? (
        <p>Your Address: {address}</p>
      ) : (
        <button onClick={connectMetaMask}>Connect Metamask</button>
      )}
    </div>
  );
}