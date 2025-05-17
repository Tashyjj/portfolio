import React, { useState } from 'react';

const SkillsTabs = () => {
  const [activeTab, setActiveTab] = useState('Languages');

  const renderContent = () => {
    const skillItem = (src, label) => (
      <div className="skill-item">
        <img src={src} alt={label} className="skill-icon" />
        <span className="skillName">{label}</span>
      </div>
    );
    switch (activeTab) {
      case 'Languages':
        return (
          <div className="skills-grid">
            {skillItem('/assets/pythonLogo.png', 'Python')}
            {skillItem('/assets/javascriptLogo.png', 'JavaScript')}
            {skillItem('/assets/htmlCssLogo.png', 'HTML/CSS')}
            {skillItem('/assets/sqlLogo.png', 'SQL')}
          </div>
        );
      case 'Frameworks':
        return (
          <div className="skills-grid">
            {skillItem('/assets/reactLogo.png', 'React')}
            {skillItem('/assets/nodejsLogo.png', 'Node.js')}
            {skillItem('/assets/expressjsLogo.png', 'Express')}
            {skillItem('/assets/restapiLogo.png', 'REST API')}
          </div>
        );
      case 'Soft Skills':
        return <p>Problem-solving, Communication, Teamwork</p>;
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
