import React from "react";
import './header.css';


function Header() {
    return (
        <>
            <nav className="navbar">
                <div className="logo-section">
                    <img
                        src={process.env.PUBLIC_URL + "/images/logo.jpg"}
                        height="60px"
                        width="60px"
                        alt="Logo"
                    />
                </div>
                <span className="shop-name">The Elegant Edge</span>
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="#home">Home</a></li>
                    <li className="navbar-item"><a href="#about">About</a></li>
                    <li className="navbar-item"><a href="#services">Services</a></li>
                    <li className="navbar-item"><a href="#contact">Contact</a></li>
                    <li><button type="button" className="btn btn-warning me-4">Login</button></li>
                    <li><button type="button" className="btn btn-warning">Sign Up</button></li>
                </ul>
            </nav>
        </>
    )
}

export default Header;