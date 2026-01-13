
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}


const Footer2 = (props) => {
    return (
        <footer className="footer-section">
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={logo} alt="logo" style={{width: '400px', height: 'auto'}} />
                                </div>

                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Address</h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-phone-call"></i>+44 7404 369338</li>
                                        <li><i className="fi flaticon-email"></i>bookings@edwinpencilvisuals.com</li>
                                        <li><i className="fi flaticon-placeholder"></i>4140 Parker Rd. Allentown,
                                            <br /> Leeds, LS9 0DE
                                            <br /> United Kingdom
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Follow Us</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">Facebook</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Instagram</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Youtube</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget subscribe">
                                <div className="widget-title">
                                    <h3>Subscribe</h3>
                                </div>
                                <form onSubmit={SubmitHandler}>
                                    <div className="form-field">
                                        <input type="email" placeholder="Your e-mail address" id="semail" required />
                                        <button type="submit"><i className="ti-arrow-right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-lg-4 col-12">
                            <ul className="lower-footer-link">
                                <li><Link onClick={ClickHandler} to="/contact">Privacy & Terms.</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col col-lg-4 col-12">
                            <div className="copy-right" style={{textAlign: 'center'}}>
                                <p className="copyright" style={{whiteSpace: 'nowrap', margin: 0}}>&copy; 2026 <Link onClick={ClickHandler} to="/index">EdwingVisualsStudios</Link>, All Rights Reserved.
                                </p>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-12">
                            <div style={{textAlign: 'right'}}>
                                <p style={{whiteSpace: 'nowrap', margin: 0}}>Developer: <a href="https://www.styner.dev/" target="_blank" rel="noopener noreferrer" style={{color: '#fff', textDecoration: 'none', transition: 'color 0.3s'}} onMouseEnter={(e) => e.target.style.color = '#FF4A3B'} onMouseLeave={(e) => e.target.style.color = '#fff'}>StynerDev</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer2;