import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Neonatology & Newborn Care</title>
            </Helmet>

            <div className="about-section neonatology-newborn-care-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Neonatology & Newborn Care</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we are committed to providing specialized Neonatology & Newborn Care to ensure the healthiest start for every baby. Our dedicated team offers comprehensive care for newborns, from routine post-delivery monitoring to the management of premature and critically ill infants.</p>
                                    <p className="font-weight-normal">We specialize in newborn resuscitation, care of premature and low-birth-weight babies, neonatal jaundice management, respiratory support, infection treatment, feeding guidance, growth monitoring, and developmental follow-up. Our well-equipped Neonatal Intensive Care Unit (NICU), advanced monitoring systems, and experienced neonatologists provide round-the-clock care in a safe and nurturing environment. We emphasize family-centered care, parental education, and compassionate support to help every newborn thrive during their earliest and most crucial days.</p>
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
