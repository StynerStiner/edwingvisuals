import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer2 from '../../components/footer2/Footer2';
import GetInTouchSection from '../../components/GetInTouchSection/GetInTouchSection';
import Pricing from '../../components/Pricing';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';

const PricingPage = (props) => {

    return (
        <Fragment>
            <div className="dark-page">
            <Header hclass={'header-style-3'} />
            <PageTitle pageTitle={'Pricing Plan'} pagesub={'pricing'} titleColor={'#FDF9F6'} bgColor={'#FF4A3B'} />
            <Pricing/>
            <ProjectSection />
            <Testimonial />
            <GetInTouchSection />
            <Footer2 />
            <Scrollbar />
            </div>
        </Fragment>
    )
};
export default PricingPage;
