import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'


const ContactArea = (props) => {
    return (
        <>
        <style>{`
            .contact-page h2,
            .contact-page h3,
            .contact-page span,
            .contact-page li,
            .office-info-text ul li {
                color: #fff !important;
            }
        `}</style>
        <div className="contact-page-wrap">
            <section className="contact-page section-padding" style={{color: '#fff'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="section-title-s3">
                                <span>Let's Create Together</span>
                                <h2>Book Your Photography or Videography Session</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div style={{border: '1px solid rgba(255,255,255,0.2)', padding: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)'}}>
                                <div className="row">
                        <div className="col col-lg-6">
                            <div className="office-info">
                                <h3>Edwing Visual Studios</h3>
                                <div className="row">
                                    <div className="col col-xl-6 col-lg-6 col-md-6 col-12">
                                        <div className="office-info-item">
                                            <div className="office-info-text">
                                                <ul>
                                                    <li><i className="fi flaticon-phone-call"></i> +44 (0) 7XXX XXX XXX
                                                    </li>
                                                    <li><i className="fi flaticon-email"></i> hello@edwingvisuals.com
                                                    </li>
                                                    <li><i className="fi flaticon-placeholder"></i> Leeds, UK, LS9 0DE</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-xl-6 col-lg-6 col-md-6 col-12">
                                        <div className="office-info-item">
                                            <div className="office-info-text">
                                                <ul>
                                                    <li><i className="fi flaticon-phone-call"></i> Studio Hours: Mon-Sat 9AM-7PM</li>
                                                    <li><i className="fi flaticon-email"></i> bookings@edwingvisuals.com
                                                    </li>
                                                    <li><i className="fi flaticon-placeholder"></i> Available for on-location shoots across the UK</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form-area">
                                <ContactForm />
                            </div>
                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default ContactArea;