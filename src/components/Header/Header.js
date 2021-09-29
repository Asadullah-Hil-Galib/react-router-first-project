import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const buttonActive = {
        color: '#e83a3b'
    }
    const responsiveMenu = () => {
    }
    return (
        <div>
            <nav>
                <div className="menu">
                    <NavLink activeStyle={buttonActive} className="menu-btn" to="/home">Home</NavLink>
                    <NavLink activeStyle={buttonActive} className="menu-btn" to="/about">About</NavLink>
                    <NavLink activeStyle={buttonActive} className="menu-btn" to="/content">Content</NavLink>
                    <NavLink activeStyle={buttonActive} className="menu-btn" to="/blog">Blog</NavLink>
                    <NavLink activeStyle={buttonActive} className="menu-btn" to="/contact">Contact</NavLink>
                </div>
                <span className="responsive-menu" onClick={responsiveMenu}><i class="fas fa-bars"></i></span>
            </nav>
        </div>
    );
};

export default Header;