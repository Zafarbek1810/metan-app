import React from 'react';

const CashSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cash" width="64" height="64"
         viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round"
         strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <rect x="7" y="9" width="14" height="10" rx="2"/>
      <circle cx="14" cy="14" r="2"/>
      <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2"/>
    </svg>
  );
};

export default CashSvg;