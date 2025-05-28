import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/resume.pdf" className="nav-link">Resume</a>
      <a href="#skills" className="nav-link">Skills</a>
      <a href="#projects" className="nav-link">Projects</a>
      <a href="#contact" className="nav-link">Contact</a>
    </nav>
  );
};

export default Navbar;
