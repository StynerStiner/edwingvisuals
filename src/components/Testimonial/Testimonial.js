import React from 'react';
import Slider from "react-slick";
import quote from '../../images/ts-arrow.png'


const testimonial = [
    {
        id: '01',
        Des: "Edwin captured our wedding day beautifully! Every moment was perfectly documented, and the photos are absolutely stunning. His professionalism and artistic eye made our special day even more memorable.",
        Title: 'Sarah & James Thompson',
        Sub: "Wedding Clients",
    },
    {
        id: '02',
        Des: "Working with Edwin on our corporate event was fantastic. The videography was top-notch and really captured the energy of our summit. Highly recommend for any professional event coverage!",
        Title: 'Michael Chen',
        Sub: "Tech Summit Organizer",
    },
    {
        id: '03',
        Des: "The custom portrait painting Edwin created for our family is a treasured masterpiece. His attention to detail and ability to capture our family's essence on canvas is truly remarkable. Worth every penny!",
        Title: 'The Anderson Family',
        Sub: "Portrait Commission Clients",
    }
]

const Testimonial = () => {

    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };


    return (
        <section className="testimonial-section section-padding">
            <h2 className="hidden">some</h2>
            <div className="container">
                <div className="testimonial-wrap testimonial-active owl-carousel">
                    <Slider {...settings}>
                        {testimonial.map((testimonial, tsm) => (
                            <div className="testimonial-item" key={tsm}>
                                <p>{testimonial.Des}</p>
                                <span>{testimonial.Title} - <small>{testimonial.Sub}</small></span>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="arrow-shape">
                <img src={quote} alt="" />
            </div>
        </section>
    );
}

export default Testimonial;