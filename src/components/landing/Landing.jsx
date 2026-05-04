import './Landing.css';
import React from 'react';
import { ChartPie } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { CircleArrowOutUpRight } from 'lucide-react';



function Landing() {

  const landingLinks = [
    {symbol: <ChartPie/>, title: 'About', desc: 'A person with a finger in many pies. I have many components that make up my identity.', link: 'about'},
    {symbol: <GraduationCap/>, title: 'Skills & Education', desc: 'A solid collection of skills nutured with the right education goes a long way.', link: 'skills'},
    {symbol: <CircleArrowOutUpRight/>, title: 'Projects & Contact', desc: 'HAve a look at my projects to see how I transform ideas into solutions. Feel free to get in touch with me too!', link: 'projects'}
  ]


  return (
    <section className="landingSection" id="home">
      
      <div className='landingHeader'>

        <h1>Welcome to my Portfolio Website <br/><strong>I am Matthew van Schoor</strong></h1>

      </div>

      <div className='cardLinks'>

        {landingLinks.map((card, index) => (
          <a key={index} href={`#${card.link}`} className='linkCards'>

            <span className='cardSymbol'>{card.symbol}</span>
            <h3 className='cardTitle'>{card.title}</h3>
            <p className='cardDesc'>{card.desc}</p>

          </a>
          
        ))}

      </div>

      

    </section>
  );
}


export default Landing;