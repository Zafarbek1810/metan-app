import React from 'react';

const CalendarSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width="64"
         height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round"
         strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <rect x="4" y="5" width="16" height="16" rx="2"/>
      <line x1="16" y1="3" x2="16" y2="7"/>
      <line x1="8" y1="3" x2="8" y2="7"/>
      <line x1="4" y1="11" x2="20" y2="11"/>
      <rect x="8" y="15" width="2" height="2"/>
    </svg>
  );
};

export default CalendarSvg;