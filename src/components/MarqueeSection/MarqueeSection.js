import React from 'react';
import star from '../../images/star.png'

const MarqueeSection = (props) => {

    return (
        <div className="animate-marque-sec">
            <div className="animate-marque">
                <div className="marquee">
                    <div className="track">
                        <div className="content">
                            <h1>
                                <span>Photography</span> <i><img src={star} alt="" /></i>
                                <span>Videography</span> <i><img src={star} alt="" /></i>
                                <span>Graphic Design</span> <i><img src={star} alt="" /></i>
                                <span>Video Editing</span> <i><img src={star} alt="" /></i>
                                <span>Digital Portrait Painting</span> <i><img src={star} alt="" /></i>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarqueeSection;