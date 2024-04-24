import { React, useState, useEffect } from 'react';
import { useAddress } from '../../contexts/AddressContext';
import { nftContract } from '../../assets/web3/nftContract';

export default function NFTBalance() {
  const {address} = useAddress();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    async function loadTokenBalance() {
      if (!address) return;

      // Call the balanceOf method to get the token balance
      const NFTBalance = await nftContract().balanceOf(address);
      // Display the balance (you might need to convert it to a user-friendly format)
      setBalance(Number(NFTBalance));
    }

    loadTokenBalance();
  }, [address]);

  return (
    <div>
      {balance !== null ? (
        <p>
          NFT Balance: {balance} {/* You may need to format this value */}
        </p>
      ) : (
        <p>Not connect to wallet yet.</p>
      )}
    </div>
  );
}

// export default NFTBalance;
