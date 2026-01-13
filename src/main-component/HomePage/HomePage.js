import React, { Fragment } from 'react';
import Hero from '../../components/hero/hero';
import Header from '../../components/header/Header';
import Testimonial from '../../components/Testimonial/Testimonial';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import MarqueeSection from '../../components/MarqueeSection/MarqueeSection';
import SpecialtyIconSection from '../../components/SpecialtyIconSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import CreativeService from '../../components/CreativeService/CreativeService';
import AboutSection from '../../components/AboutSection/AboutSection';
import VideoSection from '../../components/VideoSection/VideoSection';
import EventSection from '../../components/EventSection/EventSection';
import Footer2 from '../../components/footer2/Footer2';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage = () => {

    return (
        <Fragment>
            <div className="dark-page">
                <Header />
                <Hero />
                <ServiceSection />
                <MarqueeSection />
                <ProjectSection />
                <Testimonial />
                <SpecialtyIconSection />
                <CreativeService />
                <AboutSection />
                <VideoSection />
                <div style={{paddingBottom: '100px'}}>
                    <EventSection />
                </div>
                <Footer2 />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage;