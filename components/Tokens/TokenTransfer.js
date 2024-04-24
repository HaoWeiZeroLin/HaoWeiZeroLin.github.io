import React, { useState } from 'react';
import { ethers } from 'ethers';
import {useAddress} from '../../contexts/AddressContext.js';
import {tokenContract} from '../../assets/web3/tokenContract.js';

export default function TokenTransfer() {
  const {address} = useAddress();
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('');

  const transfer = async () => {
    try {
      if (address) {
        const decimals = 18;
        const integerAmount = parseFloat(amount)
        const weiAmount = ethers.utils.parseUnits(integerAmount.toString(), decimals);

        const tx = await tokenContract().transfer(receiver, weiAmount);
        await tx.wait();

        console.log('Tokens transferred successfully.');
      } else {
        console.error('Web3 or contract not initialized.');
      }
    } catch (error) {
      console.error('Error transferring tokens:', error);
    }
  };

  return (
    <div>
      <h2>Transfer Tokens</h2>
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
      <button onClick={transfer}>Transfer</button>
    </div>
  );
};