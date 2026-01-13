import React, { Fragment, useState } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer2 from '../../components/footer2/Footer2';
import { Link } from 'react-router-dom'
import Projects from '../../api/project'
import Testimonial from '../../components/Testimonial/Testimonial';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import EventSection from '../../components/EventSection/EventSection';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const PortfolioPage = (props) => {

    // const { slug } = useParams()
    const [activeTab, setActiveTab] = useState(0)

    const portfolioItems = [
        {
            title: 'Wedding Photography',
            client: 'Sarah & James',
            category: 'Wedding Photography',
            year: '2024',
            description: 'Captured the beautiful wedding day of Sarah and James with stunning photography that tells their love story.',
            image: Projects[0].psImg,
            relatedProjects: [0, 1, 4] // Index 0: Portalt photography, Index 1: Event Photography, Index 4: Wedding Photography
        },
        {
            title: 'Corporate Event Video',
            client: 'Tech Summit 2024',
            category: 'Event Videography',
            year: '2024',
            description: 'Professional videography coverage of Tech Summit 2024, showcasing keynote speakers and networking moments.',
            image: Projects[1].psImg,
            relatedProjects: [3, 3, 3] // Index 3: Videography (showing same since limited video projects)
        },
        {
            title: 'Portrait Painting Commission',
            client: 'The Anderson Family',
            category: 'Portrait Art',
            year: '2023',
            description: 'Custom hand-painted family portrait on canvas, capturing the warmth and connection of the Anderson family.',
            image: Projects[2].psImg,
            relatedProjects: [2, 0, 0] // Index 2: Digital Portrait Painting, Index 0: Portalt photography (portrait related)
        },
        {
            title: 'Cultural & Traditional Events',
            client: 'King of Ghana Official Portrait',
            category: 'Cultural Photography',
            year: '2023',
            description: 'Honored to capture official portraits and cultural ceremonies for the King of Ghana, documenting traditional Ghanaian events and royal occasions with respect and authenticity.',
            image: Projects[1].psImg,
            relatedProjects: [1, 1, 1] // Event Photography repeated to show cultural/traditional events
        }
    ]

    // For the portfolio page, use a default project or create static content
    // const PracticeDetails = slug ? Projects.find(item => item.slug === slug) : Projects.find(item => item.slug === 'Business')

    return (
        <Fragment>
            <div className="dark-page">
            <style>{`
                .portfolio-details-text h2,
                .portfolio-details-text h4,
                .portfolio-details-text span,
                .portfolio-details-text p,
                .portfolio-details-text a,
                .section-title-s3 h2,
                .section-title-s3 span,
                .project-text h2,
                .project-text h2 a,
                .project-text span {
                    color: #fff !important;
                }
                .porfolio-single-page .testimonial-section .arrow-shape {
                    display: block !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                    position: absolute !important;
                    left: 40px !important;
                    top: -150px !important;
                    z-index: 1 !important;
                }
                .porfolio-single-page .testimonial-section {
                    position: relative !important;
                }
            `}</style>
            <Header hclass={'header-style-3'} />
            <PageTitle pageTitle="Portfolio" pagesub={'Our Work'} titleColor={'#FDF9F6'} bgColor={'#FF4A3B'} />
            <div className="porfolio-single-page" style={{color: '#fff'}}>
                <div className="portfolio-details-wrap section-padding">
                    <div className="container">
                        <div className="portfolio-tabs" style={{marginBottom: '50px', textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px'}}>
                            {portfolioItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    style={{
                                        padding: '12px 30px',
                                        margin: '0',
                                        background: activeTab === index ? '#FF4A3B' : 'transparent',
                                        color: '#fff',
                                        border: '1px solid #FF4A3B',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        transition: 'all 0.3s',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="portfolio-details-img">
                                    <img src={portfolioItems[activeTab].image} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="portfolio-details-text">
                                    <h2>{portfolioItems[activeTab].title}</h2>
                                    <div className="portfolio-text-items">
                                        <div className="portfolio-text-item">
                                            <h4>Client:</h4>
                                            <span>{portfolioItems[activeTab].client}</span>
                                        </div>
                                        <div className="portfolio-text-item">
                                            <h4>Year:</h4>
                                            <span>{portfolioItems[activeTab].year}</span>
                                        </div>
                                        <div className="portfolio-text-item">
                                            <h4>Category:</h4>
                                            <span>{portfolioItems[activeTab].category}</span>
                                        </div>
                                        <div className="portfolio-text-item">
                                            <h4>Share:</h4>
                                            <div className="social">
                                                <Link onClick={ClickHandler} to="/">fb</Link>
                                                <Link onClick={ClickHandler} to="/">tw</Link>
                                                <Link onClick={ClickHandler} to="/">In</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <p>{portfolioItems[activeTab].description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recent-project-section section-padding pt-0">
                    <div className="container">
                        <div className="section-title-s3">
                            <span>Recent Portfolio</span>
                            <h2>Related {portfolioItems[activeTab].category} Work</h2>
                        </div>
                        <div className="project-active-s2">
                            <div className="row">
                                {portfolioItems[activeTab].relatedProjects.map((projectIndex, srv) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                        <div className={`project-item s-${Projects[projectIndex].Id}`}>
                                            <div className="project-img">
                                                <img src={Projects[projectIndex].pImg} alt="" />
                                            </div>
                                            <div className="project-text">
                                                <h2><Link onClick={ClickHandler} to={`/project-single/${Projects[projectIndex].slug}`}>{Projects[projectIndex].title}</Link></h2>
                                                <span>{Projects[projectIndex].sub}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectSection />
            <Testimonial />
            <div style={{paddingBottom: '100px'}}>
                <EventSection />
            </div>
            <Footer2 />
            <Scrollbar />
            </div>
        </Fragment>
    )
};
export default PortfolioPage;
