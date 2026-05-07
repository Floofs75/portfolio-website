import './About.css';
import React from 'react';

function About() {
    return (
        <section className="aboutSection" id="about">
            <div className="aboutHeader">
                <h1 className="aboutHeading">
                    So what makes up...<br/> 
                    <span className="highlightText">Well, me?</span>
                </h1>
            </div>
            
            <div className="aboutContainer">
                <article className="aboutContent">
                    <h2>A born and raised South African</h2>
                    <p>
                        I am the youngest in my family, and naturally the most ambitious. 
                        I have a focus on improving any field I involve myself within.
                    </p>
                </article>

                <article className="aboutContent">
                    <h2>A competitor offline and online</h2>
                    <p>
                        From competing in Valorant as an In-Game Leader for SIN E-sports,
                        to competing in the Pokemon Video Game Championships format, to
                        playing semi-professional paintball in the past, I embrace 
                        competition and the need to improve for the sake of being the best.
                    </p>
                </article>

                <article className="aboutContent">
                    <h2>A man with varied interests</h2>
                    <p>
                        Video games, all kinds of music, arts and crafts, science... I have 
                        seemingly endless inspiration to draw on and a lot of conversation 
                        starters.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default About;