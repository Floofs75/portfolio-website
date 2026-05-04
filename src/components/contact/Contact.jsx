import './Contact.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope} from 'react-icons/fa';


function Contact() {
    return(
        <div className="contact-page">
            <div className="contact-wrapper">
                <header className="contact-intro">
                    <h1 className="contact-heading">Let's Connect</h1>
                    <p className="contact-tagline">
                        I am always eager to discuss new opportunities, and technical innovations.
                    </p>
                </header>

                <section className="contact-methods">
                    <div className="contact-grid">
                        <a href="https://www.linkedin.com/in/didintke-mafoko-173845363" target="_blank" rel="noreferrer" className="method-card">
                            <FaLinkedin className="icon" />
                            <h3>Professional Network</h3>
                            <p>View my career journey and endorsements.</p>
                        </a>

                        <a href="https://github.com/Didi-ntle" target="_blank" rel="noreferrer" className="method-card">
                            <FaGithub className="icon"/>
                            <h3>Technical Repository</h3>
                            <p>Explore my source code and latest builds. </p>
                        </a> 

                        <a href="https://www.instagram.com/didintlemafoko" target="_blank" rel="noreferrer" className="method-card">
                            <FaInstagram className="icon"/>
                            <h3>Personal Interests</h3>
                            <p>A glimps into my creative inspiration and hobbies. </p>
                        </a>

                        <a href="mailto:didintle_mafoko@gmail.com" target="_blank" rel="noreferrer" className="method-card">
                            <FaEnvelope className="icon"/>
                            <h3>Direct Inquiry</h3>
                            <p>Send a message straight to my inbox. </p>
                        </a>   
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;