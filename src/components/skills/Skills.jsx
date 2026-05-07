import React from 'react';
import './Skills.css';
import bcLogo from './bc.png';
import googleSkills from './googleskills.png';
import nhhsLogo from './nhhs.jpg';
import myCvFile from './Curriculum Vitae of Matthew van Schoor.pdf';

function Skills() {
    return (
        <section className="skillsSection" id="skills">
            <div className="skillsContainer">
                <h1 className="sectionHeading">Education & Certifications</h1>
                
                <div className="educationGrid">
                    <div className="educationCard">
                        <img src={bcLogo} alt="Belgium Campus" className="cardImage" />
                        <div className="cardBody">
                            <h3>Belgium Campus ITversity</h3>
                            <p className="cardSubtext">Bachelor of Computing (3rd Year)</p>
                            <p>Specializing in Software Engineering with a focus on full-stack development.</p>
                        </div>
                    </div>

                    <div className="educationCard">
                        <img src={nhhsLogo} alt="NHHS" className="cardImage" />
                        <div className="cardBody">
                            <h3>Norman Henshilwood High School</h3>
                            <p className="cardSubtext">Matriculated</p>
                            <p>Completed secondary education with a focus on technical subjects.</p>
                        </div>
                    </div>

                    <div className="educationCard">
                        <img src={googleSkills} alt="Google Skills" className="cardImage" />
                        <div className="cardBody">
                            <h3>Google Digital Garage</h3>
                            <p className="cardSubtext">Certification</p>
                            <p>Foundations of Digital Marketing and user-centric design principles.</p>
                        </div>
                    </div>
                </div>

                <h1 className="sectionHeading">Technical Expertise</h1>
                <div className="skillsGrid">
                    <div className="skillTag">React</div>
                    <div className="skillTag">JavaScript</div>
                    <div className="skillTag">Node.js</div>
                    <div className="skillTag">Python</div>
                    <div className="skillTag">C# / .NET</div>
                    <div className="skillTag">SQL</div>
                </div>

                <div className="downloadContainer">
                    <a 
                        href={myCvFile} 
                        download="Curriculum Vitae of Matthew van Schoor.pdf" 
                        className="downloadBtn"
                    >Download My CV</a>
                </div>

            </div>
        </section>
    );
}

export default Skills;