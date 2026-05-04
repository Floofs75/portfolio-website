import './Skills.css';
import React from 'react';
import skillsImg from './me2.jpg'
import quali1 from './nhhs.jpg'
import quali2 from './bc.png'
import quali3 from './googleskills.png'

function Skills() {

    const skillsList = [
        { title: "Familiarity with computers", desc: "Being on a computer most of my life has given me experience in the Microsoft Office Suite, Google collection and various software tools."},
        { title: "Sociable", desc: "I get along with anyone, from any background or demographic. I love interacting with others and I am great at it too."},
        { title: "Thorough", desc: "'If I must do something, be the best' - Chamber, Valorant"},
        { title: "Flexible", desc: "My speciality lies in adaptibility. Life is not a linear path, so I know multiple."}
    ];

    const qualiList = [
        {name: "Norman Henshillwood Highschool", image: quali1, qualifications: "Bachlors Pass"},
        {name: "Belgium Campus iTversity", image: quali2, qualifications: "3rd Year Diploma of Information Technology Student"},
        {name: "Google Skills", image: quali3, qualifications: "Google Workspace Certificate"}
    ];

        

    return(

        <section className='skillsSection' id='skills'>

            <div className="skillsHeadings">
                <h1 className='skillsHead'><strong>My Skills</strong></h1>
                <h2 className='skillsSub'>What do I bring to the table?</h2>
            </div>
            

            <div className='skillsCon'>
                        
                <div className='skillsImgWrap'>
                    <img src={skillsImg} alt='placeholder1' className='skillsImg'/>
                </div>

                <div className="skillsContent">
                    {skillsList.map((skill, index) => (
                        <div key={index} className='skillsItem'>
                            <hr/>
                            <h3 className='skillsTitle'>{skill.title}</h3>
                            <p className='skillsDesc'>{skill.desc}</p>
                            <hr/>
                        </div>
                    ))}
                </div>

            </div>


            <section className='qualiSection'>

            <h2 className='qualiHeading'>My Qualifications</h2>
            <div className='qualiGrid'>
                {qualiList.map((item, index) => (
                    <div className='qualiCard' key={index} >
                        <h3 className='qualiName'>{item.name}</h3>
                        <img className='qualiImg' src={item.image} alt={item.name}/>
                        <p className='qualiTitle'>{item.qualifications}</p>
                    </div>
                ))}
            </div>

            </section>
        
        </section>
        
        
        
    )
    
};

export default Skills;