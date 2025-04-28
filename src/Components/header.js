

import React from "react";
import { Link } from "react-router-dom";

function Header() {
    const navbarStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: 'white'
    };

    const logoSectionStyle = {
        display: 'flex',
        alignItems: 'center'
    };

    const shopNameStyle = {
        marginLeft: '10px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'wheat',
        cursor: 'pointer',
        position: 'relative',
        transition: 'color 0.3s ease, transform 0.3s ease'
    };

    const shopNameHoverStyle = {
        color: '#ff8800',
        transform: 'scale(1.05)',
        textShadow: '0 0 8px rgba(255, 136, 0, 0.6)'
    };

    const navbarListStyle = {
        display: 'flex',
        listStyle: 'none',
        padding: 0
    };

    const navbarItemStyle = {
        margin: '0 15px'
    };

    const navbarLinkStyle = {
        color: 'wheat',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: '500'
    };

    const authButtonStyle = {
        backgroundColor: '#007bff',
        border: 'none',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer',
        textDecoration: 'none'
    };

    const authButtonHoverStyle = {
        backgroundColor: '#0056b3'
    };

    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <nav style={navbarStyle}>
            <div style={logoSectionStyle}>
                <img
                    src={process.env.PUBLIC_URL + "/images/logo.jpg"}
                    height="60px"
                    width="60px"
                    alt="The Elegant Edge Logo"
                />
                <span
                    style={{
                        ...shopNameStyle,
                        ...(isHovered ? shopNameHoverStyle : {})
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    The Elegant Edge
                </span>
            </div>
            <ul style={navbarListStyle}>
                <li style={navbarItemStyle}>
                    <Link to="/" style={navbarLinkStyle}>
                        Home
                    </Link>
                </li>
                <li style={navbarItemStyle}>
                    <Link to="/about" style={navbarLinkStyle}>
                        About
                    </Link>
                </li>
                <li style={navbarItemStyle}>
                    <Link to="/services" style={navbarLinkStyle}>
                        Services
                    </Link>
                </li>
                <li style={navbarItemStyle}>
                    <Link to="/login" style={{ ...authButtonStyle }}>
                        Log In
                    </Link>
                </li>
                <li style={navbarItemStyle}>
                    <Link to="/" style={{ ...authButtonStyle }} onMouseEnter={e => e.target.style.backgroundColor = authButtonHoverStyle.backgroundColor} onMouseLeave={e => e.target.style.backgroundColor = authButtonStyle.backgroundColor}>
                        Log Out
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
