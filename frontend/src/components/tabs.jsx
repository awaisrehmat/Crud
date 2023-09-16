// Tab.js
import React from 'react';

const Tab = ({ label, active, onClick }) => {
  return (
    <div className={`tab ${active ? 'active' : ''}`} onClick={onClick}>
      {label}
    </div>
  );
};

export default Tab;
