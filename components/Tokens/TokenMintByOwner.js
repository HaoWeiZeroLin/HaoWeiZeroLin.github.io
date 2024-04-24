import React, { useState } from 'react';
import {useAddress} from '../../contexts/AddressContext.js';
import {tokenContract} from '../../assets/web3/tokenContract.js';

export default function MintByOwner() {
  const {address} = useAddress();
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('');

  const mintByOwner = async () => {
    try {
      if (address) {
        const decimals = 18;
        const integerAmount = parseFloat(amount);
        // const weiAmount = ethers.utils.parseUnits(integerAmount.toString(), decimals);

        const tx = await tokenContract().mintByOwner(receiver, integerAmount);
        await tx.wait();

        console.log('Token minted successfully.');
      } else {
        console.error('Web3 or contract not initialized.');
      }
    } catch (error) {
      console.error('Error minting token:', error);
    }
  };

  return (
    <div>
      <h2>Mint Tokens By Owner</h2>
      <input
        type="text"
        placeholder="Receiver Address"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount (DHD)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={mintByOwner}>Mint By Owner</button>
    </div>
  );
};
