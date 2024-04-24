import { createContext, useContext, useState } from 'react';

const NFTDataContext = createContext();

export function NFTDataProvider({ children }) {
  const [nftData, setNFTData] = useState(); 

  return (
  <NFTDataContext.Provider value={{ nftData, setNFTData }}>
    {children}
  </NFTDataContext.Provider>
  );
}

export function useNFTData(){
  return useContext(NFTDataContext);
};