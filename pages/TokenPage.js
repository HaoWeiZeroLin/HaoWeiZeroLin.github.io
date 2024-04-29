import {ethers} from 'ethers';
import Head from 'next/head';
import Header from '../components/Header';
import { React, useState, useEffect } from 'react';
import { useAddress } from '../contexts/AddressContext';
import { tokenContract } from '../assets/web3/tokenContract';

import TokenBalance from "../components/Tokens/TokenBalance";
import TokenBuyByUser from '../components/Tokens/TokenBuyByUser';
import TokenMintByOwner from '../components/Tokens/TokenMintByOwner';
import TokenTransfer from "../components/Tokens/TokenTransfer";


// Token Balance, Buy with Eth, Deposit, Withdraw, 

export default function TokenPage() {
 
  return(
    <>
      <Head>
        <title>Token Page</title>
      </Head>
      <Header />
      <main>
        <h1> Decrypt Hell Token Page </h1>
        <TokenBalance />
        <br></br>
        <TokenTransfer />
        <br></br>
        <TokenMintByOwner />
        <br></br>
        <TokenBuyByUser />
        <br></br>
      </main>
    </>
  )
}

        // try {
        //   const gasLimit = await tokenContract.estimateGas.transfer(receiver, tokenAmount);
        //   console.log('Estimated Gas Limit:', gasLimit);
        
        //   // Now you can use this gasLimit to send the transaction
        // } catch (error) {
        //   console.error('Error estimating gas:', error);
        // }