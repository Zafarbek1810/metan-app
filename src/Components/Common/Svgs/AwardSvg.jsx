import React from 'react';

const AwardSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-award" width="64" height="64"
         viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round"
         strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <circle cx="12" cy="9" r="6"/>
      <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(-30 12 9)"/>
      <polyline points="9 14.2 9 21 12 19 15 21 15 14.2" transform="rotate(30 12 9)"/>
    </svg>
  );
};

export default AwardSvg;