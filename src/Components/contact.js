import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section id="contact" style={styles.contactSection}>
            <div style={styles.contactContent}>
                <h2 style={styles.contactTitle}>Get in Touch</h2>

                <p style={styles.contactDescription}>
                    We’d love to hear from you! Whether you have a question, an idea, or just want to say hello, feel free to reach out to us.
                </p>

                <form style={styles.contactForm} onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="name" style={styles.label}>Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label htmlFor="email" style={styles.label}>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label htmlFor="message" style={styles.label}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="6"
                            required
                            style={styles.textarea}
                        ></textarea>
                    </div>

                    <button type="submit" style={styles.contactBtn}>Send Message</button>
                </form>
            </div>
        </section>
    );
};

const styles = {
    contactSection: {
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #f9f9f9, #ffffff)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5rem 2rem',
        boxSizing: 'border-box',
    },
    contactContent: {
        width: '100%',
        maxWidth: '1000px',
        textAlign: 'center',
        animation: 'fadeIn 1.5s ease-in-out',
    },
    contactTitle: {
        fontSize: '3rem',
        marginBottom: '1.5rem',
        color: '#222',
        fontWeight: 700,
    },
    contactDescription: {
        fontSize: '1.25rem',
        color: '#555',
        marginBottom: '3rem',
    },
    contactForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    inputGroup: {
        width: '100%',
        marginBottom: '2rem',
        textAlign: 'left',
    },
    label: {
        fontSize: '1.1rem',
        color: '#333',
        marginBottom: '0.5rem',
        display: 'block',
    },
    input: {
        width: '100%',
        padding: '1rem',
        fontSize: '1rem',
        borderRadius: '0.5rem',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s',
    },
    textarea: {
        width: '100%',
        padding: '1rem',
        fontSize: '1rem',
        borderRadius: '0.5rem',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s',
    },
    contactBtn: {
        backgroundColor: '#007bff',
        color: '#fff',
        fontSize: '1.25rem',
        padding: '1rem 2rem',
        border: 'none',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};


export default ContactPage;

