import React from 'react';
import 'animate.css';

const AboutMe = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h1 className="pageTitle">About Me</h1>

            <div className="pageContent">
                <section>
                    <h2>Education</h2>
                    <p>Graduating from McMaster University in 2025 with a Bachelors degree in Software Engineering.</p>
                </section>

                <section>
                    <h2>Work Experience</h2>
                    <p>Currently working as a Data Analyst at Continual Energy Inc.</p>
                </section>

                <section>
                <h2>Programming Languages</h2>
                    <div className="languages">
                        <div className="language-item">
                            <img src={`${process.env.PUBLIC_URL}/assets/pythonLogo.png`} alt="Python" className="language-logo" />
                            <span>Python</span>
                        </div>
                        <div className="language-item">
                            <img src={`${process.env.PUBLIC_URL}/assets/javaScriptLogo.png`} alt="JavaScript" className="language-logo" />
                            <span>JavaScript</span>
                        </div>
                        <div className="language-item">
                            <img src={`${process.env.PUBLIC_URL}/assets/sqlLogo.png`} alt="SQL" className="language-logo" />
                            <span>SQL</span>
                        </div>
                        <div className="language-item">
                            <img src={`${process.env.PUBLIC_URL}/assets/htmlCssLogo.png`} alt="HTML/CSS" className="language-logo" />
                            <span>HTML/CSS</span>
                        </div>
                    </div>
                </section>


                <section>
                    <h2>Interests & Hobbies</h2>
                    <p>Thingd I also enjoy that aren't tech-related are:</p>
                    <ul>
                    <li>Baking</li>
                    <li>Learning Languages</li>
                    <li>Bouldering</li>
                    <li>Working Out</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default AboutMe;

