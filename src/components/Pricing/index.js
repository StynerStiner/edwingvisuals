import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    const pricing = [
        {
            fIcon: 'fi flaticon-medal',
            li1: 'Full day coverage',
            li2: 'Professional editing',
            li3: 'High-resolution files',
            li4: 'Online gallery delivery',
            title: 'Videography',
            link: '/contact',
            price:'500',
        },
        {
            fIcon: 'fi flaticon-stats',
            li1: '4-hour session',
            li2: 'Professional retouching',
            li3: 'Digital image delivery',
            li4: 'Print-ready files',
            title: 'Photography',
            link: '/contact',
            price:'350',
        },
        {
            fIcon: 'fi flaticon-trophy',
            li1: 'Custom canvas portrait',
            li2: 'Hand-painted artwork',
            li3: 'Multiple revision rounds',
            li4: 'Framing included',
            title: 'Portrait Painting',
            link: '/contact',
            price:'800',
        },


    ]


    return (
        <section className="pricing-section section-padding" style={{color: '#fff'}}>
            <div className="container">
                <div className="pricing-items">
                    <div className="row">
                        {pricing.map((pricing, ptem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={ptem}>
                                <div className="pricing-item" style={{border: '2px solid #FF4A3B', borderRadius: '15px'}}>
                                    <h2>{pricing.title}</h2>
                                    <div className="price-price">
                                        <h3 style={{color: '#fff'}}>${pricing.price}<span style={{color: '#fff'}}>/Monthly</span></h3>
                                    </div>
                                    <ul>
                                        <li>{pricing.li1}</li>
                                        <li>{pricing.li2}</li>
                                        <li>{pricing.li3}</li>
                                        <li>{pricing.li4}</li>
                                    </ul>
                                    <Link className="btn-style-2" onClick={ClickHandler} to={pricing.link} style={{color: '#fff'}}>Choose Plan</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;