"use strict";exports.id=597,exports.ids=[597],exports.modules={3951:(e,r,t)=>{t.d(r,{S:()=>useAddress,a:()=>AddressProvider});var s=t(997),d=t(6689);let n=(0,d.createContext)();function AddressProvider({children:e}){let[r,t]=(0,d.useState)(null);return s.jsx(n.Provider,{value:{address:r,setAddress:t},children:e})}function useAddress(){return(0,d.useContext)(n)}},3213:(e,r,t)=>{t.d(r,{H:()=>NFTDataProvider,U:()=>useNFTData});var s=t(997),d=t(6689);let n=(0,d.createContext)();function NFTDataProvider({children:e}){let[r,t]=(0,d.useState)();return s.jsx(n.Provider,{value:{nftData:r,setNFTData:t},children:e})}function useNFTData(){return(0,d.useContext)(n)}},9597:(e,r,t)=>{t.r(r),t.d(r,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=t(997);t(6689);var d=t(3951),n=t(3213);let __WEBPACK_DEFAULT_EXPORT__=function({Component:e,pageProps:r}){return s.jsx(d.a,{children:s.jsx(n.H,{children:s.jsx(e,{...r})})})}}};