import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import Footer2 from '../../components/footer2/Footer2';
import Teams from '../../api/about'
import sImg1 from '../../images/team/arrow2.png'
import GetInTouchSection from '../../components/GetInTouchSection/GetInTouchSection';
import ContactForm from '../../components/ContactFrom/ContactForm';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import VideoSection from '../../components/VideoSection/VideoSection';
import SpecialtyIconSection from '../../components/SpecialtyIconSection';

const TeamSinglePage = (props) => {
    const { slug } = useParams()

    // For the about page, use a default team member or create static content
    const TeamDetails = slug ? Teams.find(item => item.slug === slug) : Teams.find(item => item.slug === 'Thomas')

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <div className="dark-page">
            <style>{`
                .contact-info-wrap h3,
                .contact-info-wrap p,
                .contact-info-text h4 {
                    color: #FDF9F6 !important;
                }
                .contact-info-text span {
                    color: #FF4A3B !important;
                }
                .contact-info-icon i {
                    color: #FF4A3B !important;
                }
            `}</style>
            <Header hclass={'header-style-3'} />
            <PageTitle pageTitle="About Edwin Pencil Visuals" pagesub={'About'} titleColor="#FDF9F6" bgColor="#FF4A3B" />
            <section className="team-single-page section-padding" style={{background: 'linear-gradient(135deg, #1F1F1F 0%, #262626 100%)', color: '#FDF9F6'}}>
                <div className="team-details-wrap" style={{color: '#FDF9F6'}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="team-details-img">
                                    <img src={TeamDetails.tImg} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="team-details-text" style={{color: '#FDF9F6'}}>
                                    <h2 style={{color: '#FDF9F6'}}>About Edwin Pencil Visuals</h2>
                                    <div className="team-text-items" style={{color: 'white !important'}}>
                                        <div className="team-text-item">
                                            <h4 style={{color: '#FDF9F6'}}>Expertise:</h4>
                                            <span style={{color: '#FDF9F6'}}>Videography, Photography, Portrait Painting & Creative Design</span>
                                        </div>
                                        <div className="team-text-item">
                                            <h4 style={{color: '#FDF9F6'}}>Specialization:</h4>
                                            <span style={{color: '#FDF9F6'}}>Creative Director & Visual Artist</span>
                                        </div>
                                        <div className="team-text-item">
                                            <h4 style={{color: '#FDF9F6'}}>Experience:</h4>
                                            <span style={{color: '#FDF9F6'}}>10+ Years</span>
                                        </div>
                                        <div className="team-text-item">
                                            <h4 style={{color: '#FDF9F6'}}>Connect:</h4>
                                            <div className="social">
                                                <Link onClick={ClickHandler} to="/" style={{color: '#FDF9F6'}}>fb</Link>
                                                <Link onClick={ClickHandler} to="/" style={{color: '#FDF9F6'}}>ig</Link>
                                                <Link onClick={ClickHandler} to="/" style={{color: '#FDF9F6'}}>tw</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <p style={{color: '#FDF9F6'}}>Edwin Pencil Visuals is a creative studio dedicated to bringing your vision to life through videography, photography, custom portrait paintings, and innovative design. With over a decade of experience in the creative industry, we specialize in crafting compelling visual narratives and creating personalized artwork that resonates with audiences and drives meaningful engagement.</p>

                                    <div className="arrow"><img src={sImg1} alt="" style={{filter: 'hue-rotate(320deg) saturate(2)'}}/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-area section-padding pb-0" style={{color: '#FDF9F6'}}>
                    <div className="container">
                        <div className="contact-area-wrapper" style={{border: '1px solid rgba(255,255,255,0.2)', padding: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)'}}>
                            <div className="row">
                                <div className="col col-xl-5 col-lg-6">
                                    <div className="contact-info-wrap">
                                        <div className="contact-info-title">
                                            <h3>Contact Info</h3>
                                            <p>Get in touch to discuss your photography or videography needs</p>
                                        </div>
                                        <div className="contact-info-item" style={{paddingBottom: '15px'}}>
                                            <div className="contact-info-icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                            <div className="contact-info-text">
                                                <span>Have Any Question?</span>
                                                <h4>Phone</h4>
                                            </div>
                                        </div>
                                        <div className="contact-info-item">
                                            <div className="contact-info-icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                            <div className="contact-info-text">
                                                <span>Send Email</span>
                                                <h4>bookings@edwinpencilvisuals.com</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-7 col-lg-6 col-md-12 col-12">
                                    <div className="contact-form-area">
                                          <ContactForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ServiceSection />
            <VideoSection />
            <SpecialtyIconSection />
            <GetInTouchSection />
            <Footer2 />
            <Scrollbar />
            </div>
        </Fragment>
    )
};
export default TeamSinglePage;
