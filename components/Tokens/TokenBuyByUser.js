import React, { useState } from 'react';
import { ethers } from 'ethers';
import {useAddress} from '../../contexts/AddressContext.js';
import {tokenContract} from '../../assets/web3/tokenContract.js';

export default function BuyByUsers() {
  const {address} = useAddress();
  const [amount, setAmount] = useState('');

  const buyByUser = async () => {
    try {
      if (address) {
        const decimals = 18;
        const integerAmount = parseFloat(amount);
        const weiAmount = ethers.utils.parseUnits(integerAmount.toString(), decimals);

        const tx = await tokenContract().buyByUser({ value: weiAmount });
        await tx.wait();

        console.log('Tokens purchased successfully.');
      } else {
        console.error('Web3 or contract not initialized.');
      }
    } catch (error) {
      console.error('Error purchasing tokens:', error);
    }
  };

  return (
    <div>
      <h2>Buy Tokens</h2>
      <input
        type="number"
        placeholder="Amount (ETH)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={buyByUser}>Buy Tokens</button>
    </div>
  );
};