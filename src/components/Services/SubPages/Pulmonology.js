import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Pulmonology (Chest Medicine)</title>
            </Helmet>

            <div className="about-section pulmonology-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Pulmonology (Chest Medicine)</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we provide comprehensive Pulmonology (Chest Medicine) services for the prevention, diagnosis, and treatment of respiratory and lung-related disorders. Our experienced pulmonologists are dedicated to delivering personalized care using advanced diagnostic techniques and evidence-based treatment approaches.</p>
                                    <p className="font-weight-normal">We specialize in the management of asthma, chronic obstructive pulmonary disease (COPD), pneumonia, tuberculosis, interstitial lung diseases, sleep-related breathing disorders, allergies, and other respiratory conditions. Our services include pulmonary function testing, bronchoscopy, sleep studies, respiratory rehabilitation, and critical respiratory care. With modern facilities and a patient-centered approach, we focus on early diagnosis, effective treatment, symptom control, and improving long-term lung health and quality of life.</p>
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
