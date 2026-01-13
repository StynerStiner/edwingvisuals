import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer2 from '../../components/footer2/Footer2';
import ContactArea from '../../components/ContactArea';


const ContactPage = (props) => {

    return (
        <Fragment>
            <div className="dark-page">
            <Header hclass={'header-style-3'} />
            <PageTitle pageTitle={'Contact Us'} pagesub={'contact'} titleColor={'#FDF9F6'} bgColor={'#FF4A3B'} />
            <ContactArea />
            <Footer2 />
            <Scrollbar />
            </div>
        </Fragment>
    )
};
export default ContactPage;
