"use strict";exports.id=415,exports.ids=[415],exports.modules={8544:(e,t,n)=>{n.d(t,{Z:()=>NFTBalance});var l=n(997),a=n(6689),c=n(3951),s=n(3476);function NFTBalance(){let{address:e}=(0,c.S)(),[t,n]=(0,a.useState)(null);return(0,a.useEffect)(()=>{(async function(){if(!e)return;let t=await (0,s.F)().balanceOf(e);n(Number(t))})()},[e]),l.jsx("div",{children:null!==t?(0,l.jsxs)("p",{children:["NFT Balance: ",t," "]}):l.jsx("p",{children:"Not connect to wallet yet."})})}}};