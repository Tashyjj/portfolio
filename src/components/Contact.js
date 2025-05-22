import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Contact.css';

const Contact = () => {
const form = useRef();
const [messageSent, setMessageSent] = useState(false);

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
    'service_jnkpcl4',
    'template_gydc9im',
    form.current,
    'eKKWiEWjk5K0llNRF'
    )
    .then(
    (result) => {
        console.log(result.text);
        form.current.reset();
        setMessageSent(true);
    },
    (error) => {
        console.log(error.text);
        alert("Message failed to send.");
    }
    );
};

const handleReset = () => {
    setMessageSent(false);
};

return (
    <div className="contact-section" id="contact">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
            I’m always open to discussing new projects or opportunities. Whether you have a question, a project idea, or just want to say hello — feel free to reach out!
        </p>

        <div className="contact-form-wrapper">
            <form ref={form} className={`contact-form ${messageSent ? 'hidden' : 'visible'}`} onSubmit={sendEmail}>
                <div className="identity-group">
                    <input type="text" name="user_name" placeholder="Your Name" required className="name-box" />
                    <input type="email" name="user_email" placeholder="Your Email" required className="email-box" />
                </div>
                <textarea name="message" placeholder="Your Message" rows="5" required className="message-box" />
                <button type="submit" className="submit-button">
                    <img src="/assets/sendicon.png" alt="Send" className="submit-icon" />
                </button>
            </form>
        
            <div className={`confirmation-container ${messageSent ? 'visible' : 'hidden'}`}>
                <img src="/assets/checkmark.png" alt="Sent!" className="checkmark-image" />
                <p className="confirmation-message">Your message has been sent.</p>
                <button onClick={handleReset} className="submit-button">
                    Send Another Message
                </button>
            </div>
        </div>

    </div>
);
};

export default Contact;
