import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <header className="contact-header">
                <div className="cover-image">
                    <div className="cover-text">
                        <h1>Contact Us</h1>
                        <p>Working together is success</p>
                    </div>
                </div>
            </header>
            <div className="contact-info">
                <div className="contact-details">
                    <h2>Office Address</h2>
                    <p>Panchatatva residency, mota varachha, </p>
                    <p>Surat - 394101 /Gujarat - INDIA</p>
                </div>
                <div className="contact-details">
                    <h2>Phone Numbers</h2>
                    <p><a href='tel:+91 95744 31485'>+91 95744 31485</a></p>
                    {/* <p>+91-0987654321</p> */}
                </div>
                <div className="contact-details">
                    <h2>Email Addresses</h2>
                    <p><a href='mailto:info@shreejiinternationals.in'>info@shreejiinternationals.in</a></p>
                    <p><a href='mailto:support@shreejiinternationals.in'>support@shreejiinternationals.in</a></p>
                </div>
            </div>
            <div className="contact-map">
                <h2>Our Location</h2>
                <iframe
                    title="office-location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.7158755102995!2d72.890239!3d21.247711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fb0f84a0b81%3A0x54d6c4d5973b0f5c!2s21%C2%B014&#39;51.8%22N%2072%C2%B053&#39;34.1%22E!5e0!3m2!1sen!2sin!4v1698239097330!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
