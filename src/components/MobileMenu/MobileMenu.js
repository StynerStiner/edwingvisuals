import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MobileMenu = () => {
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? 'show' : ''}`}>
                <div className="menu-close" onClick={() => setMenuState(!menuActive)}>
                    <i className="ti-close"></i>
                </div>
                <ul className="responsivemenu">
                    <li><Link onClick={ClickHandler} to="/home">Home</Link></li>
                    <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                    <li><Link onClick={ClickHandler} to="/pricing">Pricing</Link></li>
                    <li><Link onClick={ClickHandler} to="/portfolio">Portfolio</Link></li>
                    <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <i className="ti-menu"></i>
            </div>
        </div>
    );
};

export default MobileMenu;
