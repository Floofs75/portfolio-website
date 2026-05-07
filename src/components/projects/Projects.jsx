import './Projects.css';
import React from 'react';
import project1 from './ᴢᴇɴʙᴜɪʟᴅᴇʀ.png';
import project2 from './ValoMeta.jpg';
import project3 from './RIADP.jpg';

function Projects() {
    const projectList = [
        {title: "Zenbuilder", image: project1, desc: "A Zenless Zone Zero companion application designed to help players optimize their accounts."},
        {title: "ValoMeta", image: project2, desc: "A website dedicated to providing meta-game data for Valorant players."},
        {title: "RIADP", image: project3, desc: "An application used to identify risk zones with an overlay for predicted drought models."}
    ];

    return (
        <section className="projectSection" id="projects">
            <div className="projectHeading">
                Project <br/>Showcase
            </div>

            <div className="projectGrid">
                {projectList.map((item, index) => (
                    <div className="projectCard" key={index}>
                        <h2 className="projectName">{item.title}</h2>
                        <p className="projectDesc">{item.desc}</p>
                        <div className="projectImgContainer">
                            <img src={item.image} className="projectImg" alt={item.title}/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;