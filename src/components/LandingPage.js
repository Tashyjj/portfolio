import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <p className="intro-text">Hi, my name is</p>
      <h1 className="main-name">Mohammad Jamal.</h1>
      <h2 className="main-role">I'm studying software engineering.</h2>
      <p className="description-text">
        I have an interest in Artificial Intelligence, Machine Learning, Data Engineering, and App Development. 
        I currently work as a Data Analyst at{" "}
        <a
          href="https://continual.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight-link"
        >
          Continual Energy Inc.
        </a>
      </p>
      <a href="#skills" className="learn-more-button">See my skills</a>
      <div className="spacer"></div>
    </div>
  );
};

export default LandingPage;