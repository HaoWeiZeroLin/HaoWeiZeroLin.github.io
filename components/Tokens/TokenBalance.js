import {React, useState, useEffect} from 'react';
import {useAddress} from '../../contexts/AddressContext.js';
import {tokenContract} from '../../assets/web3/tokenContract.js';

export default function TokenBalance() {
  const {address} = useAddress();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    async function loadTokenBalance() {
      if (!address) return;

      // Call the balanceOf method to get the token balance
      const tokenBalance = await tokenContract().balanceOf(address);
      // Display the balance (you might need to convert it to a user-friendly format)
      const tokenBalanceInEth = Number(tokenBalance)*(10**-18);
      setBalance(tokenBalanceInEth);
    }

    loadTokenBalance();
  }, [address]);

  return (
    <div>
      {balance !== null ? (
        <p>
          Token Balance: {balance} {/* You may need to format this value */}
        </p>
      ) : (
        <p>Not connect to wallet yet.</p>
      )}
    </div>
  );
}

// export default TokenBalance;
