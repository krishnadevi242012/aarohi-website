import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Psychiatry (OPD)</title>
            </Helmet>

            <div className="about-section psychiatry-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Psychiatry (OPD)</h1>
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
                                    <p className="font-weight-normal">
                                        At Aarohi Hospital, we provide comprehensive Psychiatry (OPD) services focused on the assessment, diagnosis, and management of a wide range of mental health and emotional conditions. Our approach emphasizes personalized care, confidentiality, compassionate support, and evidence-based treatment to help individuals improve their mental well-being and quality of life.
                                    </p>

                                    <p className="font-weight-normal">
                                        Our psychiatric services include evaluation and management of anxiety, depression, stress-related conditions, sleep difficulties, mood disorders, behavioural concerns, and other mental health conditions. We focus on early identification, appropriate treatment, counselling, lifestyle guidance, and regular follow-up to support long-term mental wellness. Through a patient-centered approach, we aim to create a comfortable and supportive environment where individuals can seek care without hesitation.
                                    </p>
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