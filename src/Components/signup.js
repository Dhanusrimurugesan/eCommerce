
import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Form submitted:', formData);
    };

    return (
        <div style={styles.signupContainer}>
            <div style={styles.signupCard}>
                <h2 style={styles.signupTitle}>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.mb3}>
                        <label htmlFor="name" style={styles.formLabel}><strong>User Name</strong></label>
                        <input
                            type="text"
                            style={styles.formControl}
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div style={styles.mb3}>
                        <label htmlFor="email" style={styles.formLabel}><strong>Email Address</strong></label>
                        <input
                            type="email"
                            style={styles.formControl}
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div style={styles.mb3}>
                        <label htmlFor="password" style={styles.formLabel}><strong>Password</strong></label>
                        <input
                            type="password"
                            style={styles.formControl}
                            id="password"
                            name="password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div style={styles.mb3}>
                        <label htmlFor="confirmPassword" style={styles.formLabel}><strong>Confirm Password</strong></label>
                        <input
                            type="password"
                            style={styles.formControl}
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" style={styles.btnPrimary}>Create Account</button>
                </form>

                <div style={styles.textCenter}>
                    <small style={styles.textMuted}>
                        Already have an account? <a href="/login" style={styles.loginLink}>Log In</a>
                    </small>
                </div>
            </div>
        </div>
    );
};

// Inline Styles
const styles = {
    signupContainer: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
    },
    signupCard: {
        background: 'white',
        borderRadius: '15px',
        padding: '2rem',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    signupTitle: {
        textAlign: 'center',
        fontWeight: '600',
        color: '#333',
        marginBottom: '1.5rem',
    },
    formLabel: {
        fontWeight: '500',
        color: '#555',
    },
    formControl: {
        borderRadius: '8px',
        padding: '10px 15px',
        border: '1px solid #ccc',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        width: '100%',
    },
    formControlFocus: {
        borderColor: '#4e8cff',
        boxShadow: '0 0 5px rgba(78, 140, 255, 0.5)',
    },
    mb3: {
        marginBottom: '1rem',
    },
    btnPrimary: {
        backgroundColor: '#4e8cff',
        border: 'none',
        borderRadius: '8px',
        padding: '10px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        width: '100%',
        cursor: 'pointer',
    },
    btnPrimaryHover: {
        backgroundColor: '#3c73d2',
    },
    textCenter: {
        textAlign: 'center',
        marginTop: '1rem',
    },
    textMuted: {
        color: '#777',
    },
    loginLink: {
        color: '#4e8cff',
        textDecoration: 'none',
        fontWeight: '500',
    },
};

export default Signup;
