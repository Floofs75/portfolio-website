import './Projects.css';
import React, { useState } from 'react';
import project1 from './ᴢᴇɴʙᴜɪʟᴅᴇʀ.png';
import project2 from './ValoMeta.jpg';
import project3 from './RIADP.jpg';

function Projects() {
    const projectList = [
        { title: "Zenbuilder", image: project1, desc: "A Zenless Zone Zero companion application designed to help players optimize their accounts." },
        { title: "ValoMeta", image: project2, desc: "A website dedicated to providing meta-game data for Valorant players." },
        { title: "RIADP", image: project3, desc: "An application used to identify risk zones with an overlay for predicted drought models." }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectList.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projectList.length) % projectList.length);
    };

    return (
        <section className="projectSection" id="projects">
            <h1 className="projectHeading">Project <br/>Showcase</h1>

            <div className="carouselContainer">

                <button className="carouselBtn prevBtn" onClick={prevSlide} aria-label="Previous Project">
                    &#10094;
                </button>

                <div className="carouselTrack">
                    {projectList.map((item, index) => {
                        const isActive = index === currentIndex;
                        return (
                            <div 
                                className={`projectCard ${isActive ? 'activeCard' : 'inactiveCard'}`} 
                                key={index}
                            >
                                <h2 className="projectName">{item.title}</h2>
                                <p className="projectDesc">{item.desc}</p>
                                <div className="projectImgWrap">
                                    <img src={item.image} className="projectImg" alt={item.title}/>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button className="carouselBtn nextBtn" onClick={nextSlide} aria-label="Next Project">
                    &#10095;
                </button>
            </div>

            <div className="carouselDots">
                {projectList.map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${index === currentIndex ? 'activeDot' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;