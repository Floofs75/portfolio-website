import './Contact.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import React, { useState } from 'react';

function Contact() {
    const initialState = {
        name: '',
        email: '',
        message: ''
    };
    
    const [formInput, setFormInput] = useState(initialState);
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({
            ...formInput,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus('Sending...');

        const formData = new FormData();
        formData.append("name", formInput.name);
        formData.append("email", formInput.email);
        formData.append("message", formInput.message);
        
        formData.append("access_key", "f818b20c-e1c5-48cf-b985-ae9448c0b1e5"); 

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmissionStatus('Message sent successfully!');
                setFormInput(initialState);
                alert("Message sent successfully.");
            } else {
                setSubmissionStatus('Failed to send message.');
                alert(data.message || "Something went wrong.");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setSubmissionStatus('Error sending message.');
            alert("Network error. Please try again later.");
        }
    };

    return (
        <div className="contact-page" id="contact">
            <div className="contact-wrapper">
                <header className="contact-intro">
                    <h1 className="contact-heading">Let's Connect</h1>
                    <p className="contact-tagline">
                        I am always eager to discuss new opportunities, and technical innovations.
                    </p>
                </header>

                <div className='formCon'>
                    <form onSubmit={handleSubmit}>
                        <div className='formGroup'>
                            <label>Name:</label>
                            <input 
                                type="text"
                                name="name"
                                value={formInput.name}
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div className='formGroup'>
                            <label>E-mail:</label>
                            <input 
                                type="email"
                                name="email"
                                value={formInput.email}
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div className='formGroup'>
                            <label>Message:</label>
                            <textarea
                                name="message"
                                value={formInput.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button className='btnSubmit' type="submit">Send Message</button>
                        
                        {submissionStatus && <p className="status-text">{submissionStatus}</p>}
                    </form>
                </div>
                
                <section className="contact-methods">
                    <div className="contact-grid">
                        <a href="https://www.linkedin.com/in/matthew-van-schoor-za75" target="_blank" rel="noreferrer" className="method-card">
                            <FaLinkedin className="icon" />
                            <h3>Professional Network</h3>
                            <p>View my career journey and endorsements.</p>
                        </a>

                        <a href="https://github.com/Floofs75" target="_blank" rel="noreferrer" className="method-card">
                            <FaGithub className="icon"/>
                            <h3>Technical Repository</h3>
                            <p>Explore my source code and latest builds.</p>
                        </a> 

                        <a href="https://www.instagram.com/spooky_valentino/" target="_blank" rel="noreferrer" className="method-card">
                            <FaInstagram className="icon"/>
                            <h3>Personal Interests</h3>
                            <p>A glimpse into my creative inspiration and hobbies.</p>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contact;