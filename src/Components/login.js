
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [valueInput, setValueInput] = useState({ username: '', password: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValueInput({ ...valueInput, [name]: value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(valueInput),
            });

            const data = await response.json();
            console.log('Login success:', data);
        } catch (error) {
            console.error('Login error:', error.message);
        }
    };

    return (
        <div style={styles.loginContainer}>
            <div style={styles.loginCard}>
                <h2 style={styles.loginTitle}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.formGroup}>
                        <label htmlFor="username" style={styles.formLabel}><strong>User Name</strong></label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            style={styles.formControl}
                            onChange={handleInputChange}
                            placeholder="Enter username"
                            required
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label htmlFor="password" style={styles.formLabel}><strong>Password</strong></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            style={styles.formControl}
                            onChange={handleInputChange}
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <div style={styles.dGrid}>
                        <button type="submit" style={styles.btnPrimary}>Submit</button>
                    </div>

                    <div style={styles.loginLink}>
                        <span>Don't have an account? </span>
                        <Link to="/signup" style={styles.link}>Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

const styles = {
    loginContainer: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
    },
    loginCard: {
        background: 'white',
        borderRadius: '15px',
        padding: '2rem',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    loginCardHover: {
        transform: 'translateY(-5px)',
        boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
    },
    loginTitle: {
        textAlign: 'center',
        fontWeight: 600,
        color: '#333',
        marginBottom: '1.5rem',
    },
    formGroup: {
        marginBottom: '1rem',
    },
    formLabel: {
        fontWeight: 500,
        color: '#555',
    },
    formControl: {
        width: '100%',
        padding: '10px 15px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    },
    formControlFocus: {
        borderColor: '#4e8cff',
        boxShadow: '0 0 5px rgba(78, 140, 255, 0.5)',
    },
    btnPrimary: {
        backgroundColor: '#4e8cff',
        border: 'none',
        borderRadius: '8px',
        padding: '10px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        width: '100%',
    },
    btnPrimaryHover: {
        backgroundColor: '#3c73d2',
    },
    loginLink: {
        textAlign: 'center',
        marginTop: '1rem',
    },
    link: {
        color: '#4e8cff',
        textDecoration: 'none',
        fontWeight: 500,
    },
};

export default Login;
