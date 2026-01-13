import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = (props) => {

    const [menuActive, setMenuState] = useState(false);
    const [rightActive, setRightState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <>
        <style>{`
            .header-area .main-menu ul > li > a:hover {
                color: #FF4A3B !important;
            }
        `}</style>
        <header className={`header-area ${props.hclass}`} style={{backgroundColor: '#1F1F1F'}}>
            <div id="header-sticky" className="menu-area">
                <div className="container-fluid">
                    <div className="second-menu">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-7 col-7">
                                <div className="logo">
                                    <Link onClick={ClickHandler} to="/home"><img src={logo} alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-1 col-1 text-right text-xl-right d-none d-lg-block">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul className="nav">
                                            <li>
                                                <Link onClick={ClickHandler} to="/home" style={{color: '#fff'}}>_home</Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to="/about" style={{color: '#fff'}}>_about</Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} to="/pricing" style={{color: '#fff'}}>_pricing</Link>
                                            </li>
                                            <li><Link onClick={ClickHandler} to="/portfolio" style={{color: '#fff'}}>_portfolio</Link></li>
                                            <li><Link onClick={ClickHandler} to="/contact" style={{color: '#fff'}}>_contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-3 text-left">
                                <div className="header-area-right">
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/" className="search-toggle-btn"><i className="ti-search" onClick={() => setMenuState(!menuActive)}></i></Link>
                                        </li>
                                        <li className="header-right-menu-wrapper">
                                            <div className="right-menu-toggle-btn">
                                                <div className="right-menu-toggle-btn-wrap" onClick={() => setRightState(!rightActive)}>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-1">
                                <MobileMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`header-search-form ${menuActive ? "active" : ""}`}>
                <button className="close-header-search" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></button>
                <form method="post" onSubmit={SubmitHandler}>
                    <div className="form-group">
                        <input type="text" name="search" value="" placeholder="Search Here" required="" />
                        <button type="submit" className="search-btn"><i className="ti-search"></i></button>
                    </div>
                </form>
            </div>
            <div className={`header-right-menu-wrap ${rightActive ? "right-menu-active" : ""}`}>
                <div className="all-close" onClick={() => setRightState(!rightActive)}></div>
                <button className="right-menu-close" onClick={() => setRightState(!rightActive)}><i className="ti-close"></i></button>
                <div className="logo"><img src="assets/images/logo.svg" alt="" /></div>
                <div className="header-right-sec">
                    <div className="project-widget widget">
                        <h3>Our Services</h3>
                        <p style={{color: '#fff'}}>Videography • Photography • Portrait Painting • Creative Design</p>
                    </div>
                    <div style={{height: '2px', background: '#FF4A3B', margin: '30px 0'}}></div>
                    <div className="widget contact-widget">
                        <div className="widget-title">
                            <h3>Contact Us</h3>
                        </div>
                        <div className="contact-ft">
                            <ul>
                                <li><i className="fi flaticon-placeholder"></i>4140 Parker Rd. Allentown,
                                    <br /> Leeds, LS9 0DE
                                    <br /> United Kingdom</li>
                                <li><i className="fi flaticon-phone-call"></i>+44 7404 369338</li>
                                <li><i className="fi flaticon-email"></i>bookings@edwinpencilvisuals.com</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{height: '2px', background: '#FF4A3B', margin: '30px 0'}}></div>
                    <div className="widget newsletter-widget">
                        <div className="widget-title">
                            <h3>Get In Touch</h3>
                        </div>
                        <p style={{color: '#fff'}}>Ready to book your session? Contact us today!</p>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;