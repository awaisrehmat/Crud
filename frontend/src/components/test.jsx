// ExcelSheet.js
import React, { useState } from 'react';
import Tab from './tabs';
import Sheet1Content from './tabsdata';
import './ExcelSheet.css'; // Import your stylesheet

const ExcelSheet = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = ['Sheet 1', 'Sheet 2', 'Sheet 3']; // Add more tab labels if needed

  return (
    <div className="excel-sheet">
      <div className="tab-container">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab}
            active={activeTab === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      <div className="content">
        {/* Render content based on activeTab */}
        {activeTab === 0 && <Sheet1Content />}
        {activeTab === 1 && <Sheet1Content />}
        {activeTab === 2 && <Sheet1Content />}
        {/* Add more content components for other tabs */}
      </div>
    </div>
  );
};

export default ExcelSheet;
