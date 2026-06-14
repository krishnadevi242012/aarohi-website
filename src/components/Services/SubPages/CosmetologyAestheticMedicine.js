import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Cosmetology & Aesthetic Medicine</title>
            </Helmet>

            <div className="about-section cosmetology-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Cosmetology & Aesthetic Medicine</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-off-white pt-4 pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                            
                                <div className="about-content">
                                    <p className="font-weight-normal">At Aarohi Hospital, we offer advanced Cosmetology & Aesthetic Medicine services designed to enhance natural beauty, improve skin health, and boost self-confidence. Our experienced specialists provide personalized, evidence-based treatments tailored to each individual’s aesthetic goals and skin concerns.</p>
                                    <p className="font-weight-normal">We specialize in skin rejuvenation, anti-aging treatments, acne and scar management, pigmentation correction, hair restoration therapies, chemical peels, laser treatments, and non-surgical facial enhancement procedures. Using modern technology and medically supervised techniques, we ensure safe, effective, and natural-looking results. We emphasize individualized treatment plans, patient education, and holistic care to help every patient look and feel their best with confidence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    );
};

export default Landing;
