import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Dermatology</title>
            </Helmet>

            <div className="about-section dermatology-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Dermatology</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we offer comprehensive Dermatology care focused on maintaining healthy skin, hair, and nails at every stage of life. Our experienced dermatologists provide personalized treatment using the latest medical and cosmetic dermatology practices to help patients achieve optimal skin health and confidence.</p>
                                    <p className="font-weight-normal">We specialize in the diagnosis and treatment of acne, eczema, psoriasis, fungal infections, allergies, pigmentation disorders, hair fall, dandruff, nail disorders, and other skin conditions. Our services also include skin rejuvenation, scar management, anti-aging treatments, and preventive skin care guidance. With advanced diagnostic facilities and a patient-centered approach, we ensure effective treatment, lasting results, and compassionate care for every individual.</p>
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
