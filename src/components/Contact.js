import React from 'react';
import '../Contact.css';

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-description">
        I’m always open to discussing new projects or opportunities. Whether you have a question, a project idea, or just want to say hello — feel free to reach out!
      </p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="identity-group">
            <input type="text" name="name" placeholder="Your Name" required className= "name-box"/>
            <input type="email" name="email" placeholder="Your Email" required className= "email-box"/>
        </div>
        <textarea name="message" placeholder="Your Message" rows="5" required className= "message-box"/>
        <button type="submit" className="submit-button">
            <img src="/assets/sendicon.png" alt="Send" className="submit-icon" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
