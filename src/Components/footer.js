import React from "react";
import './footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} The Elegant Edge. All rights reserved.</p>
            <ul className="footer-links">
                <li><Link to="#privacy">Privacy Policy</Link></li>
                <li><Link to="#terms">Terms of Service</Link></li>
                <li><Link to="#contact">Contact</Link></li>
            </ul>
        </footer>
    )
}
export default Footer;



