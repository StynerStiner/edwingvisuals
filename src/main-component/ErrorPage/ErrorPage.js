import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer2 from '../../components/footer2/Footer2';
import GetInTouchSection from '../../components/GetInTouchSection/GetInTouchSection';
import Error from '../../components/404';

const ErrorPage = (props) => {

    return (
        <Fragment>
            <div className="dark-page">
            <Header hclass={'header-style-3'} />
            <PageTitle pageTitle={'Error 404'} pagesub={'404'} />
            <Error/>
            <GetInTouchSection />
            <Footer2 />
            <Scrollbar />
            </div>
        </Fragment>
    )
};
export default ErrorPage;
