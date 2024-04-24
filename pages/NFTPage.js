import Head from 'next/head';
import Header from '../components/Header';
import NFTMint from '../components/NFTs/NFTMint';
import NFTSetTokenURI from '../components/NFTs/NFTSetTokenURI'; 
import NFTBalance from '../components/NFTs/NFTBalance';
import ShowOwnedNFTs from '../components/ShowOwnedNFTs';

export default function NFTPage() {

  return(
    <>
      <Head>
        <title>NFT Page</title>
      </Head>
      <Header />
      <main>
        <h1> Decrypt Hell NFT Page </h1>
          <NFTBalance />
        <br></br>
          <NFTMint />
        <br></br>
          <NFTSetTokenURI />
        <br></br>


        
        <div className='showNFTs'>
          {/* <ShowOwnedNFTs /> */}
        </div>
        <br></br>

      </main>
    </>
  )
}
