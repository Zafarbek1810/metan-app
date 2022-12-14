import React from 'react';

const CarNumberSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sort-descending-numbers" width="64"
         height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round"
         strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 15l3 3l3 -3"/>
      <path d="M7 6v12"/>
      <path d="M17 14a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z"/>
      <circle cx="17" cy="5" r="2"/>
      <path d="M19 5v3a2 2 0 0 1 -2 2h-1.5"/>
    </svg>
  );
};

export default CarNumberSvg;