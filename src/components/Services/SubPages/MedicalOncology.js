import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Medical Oncology</title>
            </Helmet>

            <div className="about-section medical-oncology-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Medical Oncology</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we provide comprehensive Medical Oncology services dedicated to the diagnosis, treatment, and ongoing management of cancer. Our experienced oncologists deliver personalized, evidence-based care tailored to each patient’s condition, ensuring the highest standards of treatment and support throughout the cancer journey.</p>
                                    <p className="font-weight-normal">We specialize in the treatment of breast cancer, lung cancer, gastrointestinal cancers, gynecological cancers, blood cancers, prostate cancer, and other solid tumors. Our services include chemotherapy, targeted therapy, immunotherapy, supportive care, and cancer screening and prevention programs. Working closely with a multidisciplinary team, we emphasize accurate diagnosis, individualized treatment planning, symptom management, and emotional support to help patients achieve the best possible outcomes and quality of life.</p>
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
