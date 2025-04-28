import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    // Inline styles for the footer component
    const footerStyle = {
        width: '100%',
        backgroundColor: '#222',
        color: '#fff',
        padding: '2rem 0',
        textAlign: 'center',
        fontSize: '1rem',
        position: 'relative',
    };

    const footerTextStyle = {
        marginBottom: '1rem',
        fontSize: '1.2rem',
        color: '#ccc',
    };

    const footerLinksStyle = {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
    };

    const footerLinkStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1.1rem',
        transition: 'color 0.3s ease',
    };

    const footerLinkHoverStyle = {
        color: '#007bff', // Blue on hover
    };

    return (
        <footer style={footerStyle}>
            <p style={footerTextStyle}>&copy; {new Date().getFullYear()} The Elegant Edge. All rights reserved.</p>
            <ul style={footerLinksStyle}>
                <li>
                    <Link
                        to="/privacy"
                        style={footerLinkStyle}
                        onMouseEnter={(e) => (e.target.style.color = footerLinkHoverStyle.color)}
                        onMouseLeave={(e) => (e.target.style.color = footerLinkStyle.color)}
                    >
                        Privacy Policy
                    </Link>
                </li>
                <li>
                    <Link
                        to="/terms"
                        style={footerLinkStyle}
                        onMouseEnter={(e) => (e.target.style.color = footerLinkHoverStyle.color)}
                        onMouseLeave={(e) => (e.target.style.color = footerLinkStyle.color)}
                    >
                        Terms & Conditions
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        style={footerLinkStyle}
                        onMouseEnter={(e) => (e.target.style.color = footerLinkHoverStyle.color)}
                        onMouseLeave={(e) => (e.target.style.color = footerLinkStyle.color)}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;



