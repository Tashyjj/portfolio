import React, { useState } from 'react';

const SkillsTabs = () => {
  const [activeTab, setActiveTab] = useState('Languages');

  const renderContent = () => {
    const skillItem = (src, label, details) => (
      <div className="skill-item">
        <div className="skill-front">
          <img 
            src={src} 
            alt={label} 
            className={`skill-icon ${label === 'Node.js' ? 'nodejs-icon' : ''}`} 
          />
          <span className="skillName">{label}</span>
        </div>
        <ul className="skill-details">
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
    switch (activeTab) {
      case 'Languages':
        return (
          <div className="skills-grid">
            {skillItem('/assets/pythonLogo.png', 'Python', ['Scripts & Automation', 'APIs', 'Data Analysis'])}
            {skillItem('/assets/javascriptLogo.png', 'JavaScript', ['Data Analysis', 'DOM Manipulation', 'Asynchronous Code'])}
            {skillItem('/assets/htmlCssLogo.png', 'HTML/CSS', ['Web Development', 'Semantic Layout', 'Responsive Design'])}
            {skillItem('/assets/sqlLogo.png', 'SQL', ['Joins & Queries', 'Data Retrieval', 'Data Manipulation'])}
          </div>
        );
      case 'Frameworks':
        return (
          <div className="skills-grid">
            {skillItem('/assets/reactLogo.png', 'React', ['Component-Based UI', 'Hooks & State Management', 'JSX & Virtual DOM', 'Reusable UI Logic'])}
            {skillItem('/assets/nodejsLogo.png', 'Node.js',  ['Non-blocking I/O', 'Server-side JavaScript', 'Package Management with npm', 'File System & Path Modules'])}
            {skillItem('/assets/expressjsLogo.png', 'Express', ['RESTful Routing', 'Middleware Usage', 'Simplified HTTP Server', 'Route Handling'])}
            {skillItem('/assets/restapiLogo.png', 'REST API', ['CRUD Operations', 'HTTP Methods (GET, POST, etc.)', 'JSON Responses', 'Stateless Architecture'])}
          </div>
        );
      case 'Soft Skills':
        return (
          <div className="skills-grid">
            {skillItem('/assets/problemsolve.png', 'Problem Solving', [
              'Debugging complex technical issues',
              'Breaking down large problems into smaller tasks',
              'Applying logic to optimize code and workflows'
            ])}
            {skillItem('/assets/workmanage.png', 'Workload Management',  [
              'Prioritizing high-impact tasks',
              'Meeting deadlines across multiple projects',
              'Balancing academic and work commitments'
            ])}
            {skillItem('/assets/commLogo.png', 'Communication', [
              'Technical writing and documentation',
              'Explaining complex ideas to non-technical audiences',
              'Collaborating across cross-functional teams'
            ])}
            {skillItem('/assets/teamwork.png', 'Teamwork', [
              'Working within agile project teams',
              'Sharing responsibilities and feedback constructively',
              'Supporting teammates and resolving conflicts'
            ])}
          </div>
        );
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
