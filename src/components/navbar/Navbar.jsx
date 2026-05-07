import React from 'react';
import './Navbar.css'

const Navbar = () => {
    
    return(

        <nav className='navbar'>
            <div className='navName'>Matthew van Schoor</div>

            <ul className='pageLinks'>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills & Education</a></li>
                <li><a href="#projects">Projects & Contact</a></li>
            </ul>

        </nav>
    )
}

export default Navbar;