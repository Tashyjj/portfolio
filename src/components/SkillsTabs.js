import React, { useState } from 'react';

const SkillsTabs = () => {
  const [activeTab, setActiveTab] = useState('Languages');

  const renderContent = () => {
    switch (activeTab) {
      case 'Languages':
        return( 
            <p>Python, JavaScript, SQL, HTML/CSS...</p>
        );
      case 'Frameworks':
        return <p>React, Node.js, Express, REST API</p>;
      case 'Soft Skills':
        return <p>Problem-solving, Communication, Teamwork...</p>;
      default:
        return null;
    }
  };

  return (
    <div className="skills-tabs-container">
      <div className="tabs-header">
        <button
          onClick={() => setActiveTab('Languages')}
          className={`tab-button ${activeTab === 'Languages' ? 'active-tab' : ''}`}
        >
          Languages
        </button>
        <button
          onClick={() => setActiveTab('Frameworks')}
          className={`tab-button ${activeTab === 'Frameworks' ? 'active-tab' : ''}`}
        >
          Frameworks
        </button>
        <button
          onClick={() => setActiveTab('Soft Skills')}
          className={`tab-button ${activeTab === 'Soft Skills' ? 'active-tab' : ''}`}
        >
          Soft Skills
        </button>
      </div>

      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default SkillsTabs;
