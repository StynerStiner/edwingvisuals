import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import AboutPage from '../AboutPage/AboutPage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';
import PricingPage from '../PricingPage/PricingPage';
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="team-single/:slug" element={<AboutPage />} />
          <Route path="project-single/:slug" element={<PortfolioPage />} />
          <Route path="404" element={<ErrorPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
