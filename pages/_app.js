import React from 'react';
import { AddressProvider } from '../contexts/AddressContext';
import { NFTDataProvider } from '../contexts/SyncNFTContext';



function MyApp({ Component, pageProps }) {

  return (
    <AddressProvider>
      <NFTDataProvider>
        <Component {...pageProps} />        
      </NFTDataProvider>
    </AddressProvider>
  );
}

export default MyApp;