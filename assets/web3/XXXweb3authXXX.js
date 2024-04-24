import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";

const clientId = "BNAD3wvg7UZIWpQVxQIIs_C8NzJUYCPqNGPHy8UkTrKc-otn80jVNwEFwREZugJ4mvDqqyhO-MnItnsmsua51Ic"; // Replace with your client ID

export const web3auth = new Web3Auth({
  clientId,
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x5", // This is for Ethereum mainnet. Change as needed.
  },
});

export const loginWithWeb3Auth = async () => {
  try {
    await web3auth.connect();
    const provider = web3auth.provider;
    // Now you can use this provider with ethers.js
    return provider;
  } catch (error) {
    console.error(error);
  }
};