import { database } from '../firebase';
import { ref, get, set} from "firebase/database";
import { React, useState, useEffect } from 'react';
import { useAddress } from '../contexts/AddressContext';
import { nftContract } from '../assets/web3/nftContract';

export default function ShowOwnedNFT () {
  const {address}= useAddress();
  // const address = useAddress();
  const [nfts, setNFTs] = useState([]); // State to store NFT data

  useEffect(() => {
    const fetchNFTs = async () => {
      if (!address) {
        console.error('Web3 or contract not initialized.');
        return;
      } else try {
        const snapshot = await get(ref(database, 'nftDetails'));
        const nftData = snapshot.val();
        console.log (`nftData = ${nftData}`);
        const userOwnedNFTs = [];

        for (let tokenId in nftData){
          let nft = nftData[tokenId];
          // Check if the owner of the NFT matches the user's address
          if (nft.owner === address) {
            userOwnedNFTs.push(nft);
        }}
        setNFTs(userOwnedNFTs);
        // const balance = await nftContract().balanceOf(address);
        // // Retrieve the token IDs owned by the address
        // const nftDetails = [];
        // for (let i = 0; i < balance; i++) {
        //   const tokenId = await nftContract().tokenOfOwnerByIndex(address, i);
        //   const metadataIPFS = await nftContract().tokenURI(tokenId);
        //   const metadataHTTP = 'https://ipfs.io/ipfs/' + metadataIPFS.substring("ipfs://".length);

        //   // Retrieve the listing status from Firebase Realtime Database
        //   const snapshot = await get(ref(database, `nfts/${tokenId}`));
        //   const { listed, price } = snapshot.val() || { listed: false, price: '' };

        //   // Fetch and parse the metadata from the URI
        //   const response = await fetch(metadataHTTP);
        //   const metadata = await response.json();
        //   const imageUrl = 'https://ipfs.io/ipfs/' + metadata.image.substring("ipfs://".length);

        //   nftDetails.push({
        //     tokenId: tokenId.toNumber(), // Convert to a JavaScript number
        //     name: metadata.name,
        //     description: metadata.description,
        //     image: imageUrl,
        //     listed: listed,
        //     price: price,
        //   });
        // }
        // setNFTs(nftDetails);

        // console.log('Fetched NFT successfully.');
      } catch (error) {
        console.error('Error fetching tokens:', error);
      }
    };
    fetchNFTs();
  }, [address])

  const [listingData, setListingData] = useState({});
  const [isListed, setIsListed] = useState(false);
  const [listingPrice, setListingPrice] = useState(0);


  const handlePriceChange = (event) => {
    setListingPrice(event.target.value);
  };
  

  const updateListing = async (tokenId) => {
    try {
      if (isListed) {
        // Delist the NFT if it's already listed
        await remove(ref(database, `listedNFTs/${tokenId}`));
      } else {
        // List the NFT for sale with the specified price
        await set(ref(database, `listedNFTs/${tokenId}`), {
          price: listingPrice,
        });
      }
      // Toggle the listing status
      setIsListed(!isListed);
    } catch (error) {
      console.error('Error listing/delisting NFT:', error);
    }
  }

  return (
    <div className="nftCard">
      {nfts.map((nftObject) => (
        <div key={nftObject.tokenId}>
          <h3>{nftObject.name}</h3>
          <p>Token Id: {nftObject.tokenId}</p>
          <p>{nftObject.description}</p>
          <img width='300' src={nftObject.image} alt={nftObject.name} />
          <p>{isListed ? (
            <>
              <button onClick={() => updateListing(nftObject.tokenId)}>Delist</button>
            </>
          ) : (
            <>
              <input
                type="number"
                placeholder="Price (DHD)"
                value={listingPrice}
                onChange={(e) => {
                   setListingPrice(e.target.value);
                }}
              />
              <button onClick={() => updateListing(nftObject.tokenId)}>List</button>
            </>
          )}
          </p>
        </div>
      ))}
    </div>
  );
};
