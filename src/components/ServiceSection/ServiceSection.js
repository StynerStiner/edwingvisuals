import React from 'react';
import Services from '../../api/service'
import { Link } from "react-router-dom";
import shape from '../../images/service/arrow-shape.png'
import { Slide } from "react-awesome-reveal";

const ServiceSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="service-section section-padding" id="service">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="service-left-text">
                            <span>Our Creative Services</span>
                            <h2>Professional visual solutions for your brand. <i><img
                                src={shape} alt="" /></i></h2>
                            <p>Capturing your most important moments with professional photography, videography, and custom portrait paintings.</p>
                            <Link onClick={ClickHandler} to="/contact" className="read-more">Book Now</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service-wrap">
                            <div className="row">
                                {Services.slice(0, 4).map((service, srv) => (
                                    <div className="col col-lg-6 col-md-6 col-12" key={srv}>
                                        <Slide direction='up' triggerOnce={'false'}>
                                            <div className="service-item">
                                                <i><img src={service.sIcon} alt="" /></i>
                                                <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                                <p>{service.description}</p>
                                            </div>
                                        </Slide>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;