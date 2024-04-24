import { database } from '../firebase';
import { ref, get, set} from "firebase/database";
import { useNFTData } from '../contexts/SyncNFTContext';
import { nftContract } from '../assets/web3/nftContract';

export default function SyncNFT() {
  const {nftData, setNFTData} = useNFTData();

  const syncBlockChain = async () => {
    try {
      const totalSupply = await nftContract().totalSupply();
      console.log(`Total supply = ${totalSupply}`);
      const nftDetails = [];
      nftDetails.push({
        owner: 0,
        tokenId: 0, 
        name: 0,
        description: 0,
        image: "https://www.giantbomb.com/a/uploads/scale_small/11/115901/2118258-zero.png",
      });
      // Retrieve the total supply
      for (let i = 1; i < totalSupply ; i++) {
        
        const tokenId = i ;
        console.log(`tokenId = ${tokenId}`);
        const owner = await nftContract().ownerOf(tokenId);
        const metadataIPFS = await nftContract().tokenURI(tokenId);
        const metadataHTTP = 'https://ipfs.io/ipfs/' + metadataIPFS.substring("ipfs://".length);
        
        // // Retrieve the listing status from Firebase Realtime Database
        // const snapshot = await get(ref(database, `nfts/${tokenId}`));
        // const { listed, price } = snapshot.val() || { listed: false, price: '' };

        // Fetch and parse the metadata from the URI
        const response = await fetch(metadataHTTP);
        const metadata = await response.json();
        const imageUrl = 'https://ipfs.io/ipfs/' + metadata.image.substring("ipfs://".length);
        console
        nftDetails.push({
          owner: owner,
          tokenId: tokenId, 
          name: metadata.name,
          description: metadata.description,
          image: imageUrl,
        });
      }
      
      await set(ref(database), { nftDetails });
      setNFTData(nftDetails);
      
      console.log('Fetched NFT successfully.');
    } catch (error) {
      console.error('Error fetching tokens:', error);
    }
  };

  return (
    <div>
      {nftData ? (
        <p> Synced </p>
      ) : (
        <button onClick={syncBlockChain}> Sync Blockchain </button>
      )}    
    </div>
  );
}

