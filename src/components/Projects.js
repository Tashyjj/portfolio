import React from 'react';
import '../Projects.css';

const Projects = () => {
  const projectData = [
    {
      image: '/assets/webLogo.png',
      title: 'Portfolio Website',
      description:
        'Built with React and Express to showcase my work and skills. Features tab-based content, responsive layout, and smooth animations.',
      tech: 'React&nbsp;&nbsp;&nbsp;Express&nbsp;&nbsp;&nbsp;CSS',
      github: 'https://github.com/Tashyjj/portfolio',
    },
    {
      image: '/assets/dataLogo.png',
      title: 'Pokemon Team Builder',
      description:
        'Web app for creating and analyzing Pokémon teams. Features type synergies, team stats, and effectiveness breakdowns.',
      tech: 'Node.js&nbsp;&nbsp;&nbsp;Express&nbsp;&nbsp;&nbsp;SQLite&nbsp;&nbsp;&nbsp;Mustache',
      github: 'https://github.com/Tashyjj/PokemonTeamBuilder',
    },
    {
      image: '/assets/graph.png',
      title: 'End-to-End Data Pipeline',
      description:
        'End-to-end workflow for processing and analyzing raw building performance data. Covers cleaning, transformation, and visualization.',
      tech: 'Python&nbsp;&nbsp;&nbsp;SQL&nbsp;&nbsp;&nbsp;Pandas&nbsp;&nbsp;&nbsp;Jupyter',
      github: 'https://github.com/Tashyjj/End-to-End-Data-Analysis',
    },
    {
      image: '/assets/appLogo.png',
      title: 'KUKA Robot App',
      description:
        'An Android application that interfaces with a KUKA robotic arm through Wi-Fi to deliver personalized coffee orders to customers.',
      tech: 'Java&nbsp;&nbsp;&nbsp;XML&nbsp;&nbsp;&nbsp;Work Visual',
      github: 'https://github.com/Tashyjj/KUKA-Coffee-App',
    },
    {
      image: '/assets/dataLogo.png',
      title: 'Drug Application',
      description:
        'A simple web interface for browsing, adding, and editing drug records. Designed to simulate basic healthcare data management in a user-friendly format.',
      tech: 'React&nbsp;&nbsp;&nbsp;Next.js&nbsp;&nbsp;&nbsp;REST API&nbsp;&nbsp;&nbsp;SQLite',
      github: 'https://github.com/Tashyjj/drug-application',
    },
    {
      image: '/assets/loginLogo.png',
      title: 'Article Management System',
      description:
        'News reader app that displays the latest headlines from CBC. Allows users to explore article summaries in a clean, minimal layout.',
      tech: 'JavaScript&nbsp;&nbsp;&nbsp;jQuery&nbsp;&nbsp;&nbsp;CBC API',
      github: 'https://github.com/Tashyjj/CBC-News-Application',
    },
    {
      image: '/assets/graph.png',
      title: 'Data Analysis - JavaScript',
      description:
        'JavaScript implementations of data analysis tests. Includes Deviation, Correlation, and Regression tests.',
      tech: 'JavaScript',
      github: 'https://github.com/Tashyjj/Data-Analysis---JavaScript',
    },

  ];

  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">What I've Worked On</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-header">
              <img src={project.image} alt={project.title} className="card-image"/>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-box">
                <img src="/assets/githubLogo.png" alt="GitHub" className="github-logo"/>
              </a>
            </div> 
            <h3 className="card-title">{project.title}</h3>
            <p className="card-desc">{project.description}</p>
            <p className="tech-used"dangerouslySetInnerHTML={{ __html: project.tech }}></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
