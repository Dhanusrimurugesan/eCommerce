
import React, { useEffect, useState } from "react";

const styles = {
    wrapper: {
        minHeight: '100vh',
        background: 'linear-gradient(to right, #f9f9f9, #ffffff)',
        padding: '4rem 2rem',
        fontFamily: "'Poppins', sans-serif",
        color: '#333',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    container: {
        maxWidth: '900px',
        width: '100%',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        padding: '3rem',
        animation: 'fadeIn 1s ease-in-out',
    },
    heading: {
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '0.5rem',
        color: '#111',
        textAlign: 'center',
    },
    subHeading: {
        fontSize: '1rem',
        fontWeight: '400',
        color: '#777',
        textAlign: 'center',
        marginBottom: '3rem',
    },
    section: {
        marginBottom: '2.5rem',
    },
    title: {
        fontSize: '1.75rem',
        fontWeight: '600',
        marginBottom: '1rem',
        color: '#222',
    },
    paragraph: {
        fontSize: '1.125rem',
        fontWeight: '400',
        lineHeight: 1.8,
        color: '#555',
    },
    link: {
        color: '#0077cc',
        textDecoration: 'none',
        fontWeight: '500',
    },
};

const Privacy = () => {
    const [today, setToday] = useState('');

    useEffect(() => {
        const date = new Date().toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
        setToday(date);
    }, []);

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                <h1 style={styles.heading}>Privacy Policy</h1>
                <p style={styles.subHeading}>Last updated: {today}</p>

                <section style={styles.section}>
                    <h2 style={styles.title}>1. Introduction</h2>
                    <p style={styles.paragraph}>
                        At The Elegant Edge, your privacy is paramount. This Privacy Policy explains how we collect, use, and safeguard your personal information when you engage with our website and services.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.title}>2. Information We Collect</h2>
                    <p style={styles.paragraph}>
                        We may collect personal data such as your name, email address, phone number, and other details when you contact us, subscribe to our updates, or interact with our offerings.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.title}>3. How We Use Your Information</h2>
                    <p style={styles.paragraph}>
                        Your information allows us to personalize your experience, respond to your inquiries, and provide service updates. We strictly do not sell or rent your data to third parties.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.title}>4. Cookies and Tracking</h2>
                    <p style={styles.paragraph}>
                        We use cookies and similar technologies to enhance site functionality and understand usage patterns. You may control cookie preferences through your browser settings.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.title}>5. Data Security</h2>
                    <p style={styles.paragraph}>
                        We implement industry-standard security measures to protect your information. However, no digital transmission or storage can be completely guaranteed secure.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.title}>6. Your Rights</h2>
                    <p style={styles.paragraph}>
                        You have the right to access, amend, or request deletion of your personal data. For assistance, please email us at <a href="mailto:dhanusrimurugesan2003@gmail.com" style={styles.link}>info@theelegantedge.com</a>.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.title}>7. Changes to This Policy</h2>
                    <p style={styles.paragraph}>
                        We may revise this policy periodically. Updates will be reflected with a new effective date. Please review it regularly for any changes.
                    </p>
                </section>

                <section style={styles.section}>
                    <h2 style={styles.title}>8. Contact Us</h2>
                    <p style={styles.paragraph}>
                        If you have any questions about our privacy practices, reach out to us at
                        <a href="mailto:mailto:dhanusrimurugesan2003@gmail.com" style={styles.link}> info@theelegantedge.com</a>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Privacy;

