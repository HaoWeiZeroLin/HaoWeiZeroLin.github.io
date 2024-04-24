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


  const mintByOwner = async () => {
    try {
      if (address) {
        console.log(address);
        const decimals = 18; // Number of decimal places (usually 18 for Ether)
        const integerAmount = 9949; // Your integer value
        // Convert the integer to wei
        const weiAmount = ethers.utils.parseUnits(integerAmount.toString(), decimals);

        const tx = await tokenContract().mintByOwner("0xBaEc586B44dcc8D9141c449F41b8eE983141C081", integerAmount);
        // Wait for the transaction to be mined
        await tx.wait();

        console.log('Token mint successfully.');
      } else {
        console.error('Web3 or contract not initialized.');
      }
    } catch (error) {
      console.error('Error purchasing tokens:', error);
    }
  }

  const transfer = async () => {
    try {
      if (address) {
        console.log(`address = ${address}`);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log(`signer = ${signer}`);

        // // Get the current account from MetaMask
        // const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        // await window.ethereum.request({ method: 'eth_requestAccounts' });

        // const account = accounts[0];
        // console.log(`account = ${account}`);
        
        const receiver = '0x62655bc070af1C9F516A6F8db1B70bb642aA0823';
        
        const decimals = 18; // Number of decimal places (usually 18 for Ether)
        const integerAmount = 10000; // Your integer value
        // Convert the integer to wei
        const weiAmount = ethers.utils.parseUnits(integerAmount.toString(), decimals);

        const tx = await tokenContract().transfer(receiver, weiAmount);
        // Wait for the transaction to be mined
        await tx.wait();
        // await tokenContract.methods.approve(receiver, tokenAmount).send({ from: yourAddress });
        // await tokenContract.methods.transfer(receiver, tokenAmount).send({
        //   from: account,
        //   // gas: amount,
        // });
        console.log('Tokens transfer successfully.');
      } else {
        console.error('Web3 or contract not initialized.');
      }
    } catch (error) {
      console.error('Error transfer tokens:', error);
    }
  }

  
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
        <button onClick={transfer}> Transfer </button>

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