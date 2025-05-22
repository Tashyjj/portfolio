import React from 'react';
import '../SocialBar.css';

const SocialBar = () => {
  return (
    <div className="social-bar">
      <ul>
        <li><a href="https://github.com/Tashyjj" target="_blank" rel="noopener noreferrer">
          <img src="/assets/githubLogo.png" alt="GitHub" />
        </a></li>
        <li><a href="https://www.linkedin.com/in/mohammadtjamal" target="_blank" rel="noopener noreferrer">
          <img src="/assets/linkedinIcon.png" alt="LinkedIn" />
        </a></li>
        <li><a href="https://www.instagram.com/jamxl_09" target="_blank" rel="noopener noreferrer">
          <img src="/assets/instagramIcon.png" alt="Instagram" />
        </a></li>
      </ul>
      <div className="vertical-line"></div>
    </div>
  );
};

export default SocialBar;
