import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Surgical Oncology</title>
            </Helmet>

            <div className="about-section surgical-oncology-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Surgical Oncology</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we offer advanced Surgical Oncology services focused on the comprehensive surgical management of cancer. Our experienced surgical oncologists utilize modern techniques and a multidisciplinary approach to provide precise, effective, and patient-centered cancer care.</p>
                                    <p className="font-weight-normal">We specialize in the surgical treatment of breast cancer, gastrointestinal cancers, gynecological cancers, head and neck cancers, urological cancers, soft tissue tumors, and other complex malignancies. Our services include tumor removal surgeries, organ-preserving procedures, lymph node surgeries, minimally invasive and laparoscopic oncological surgeries, and cancer reconstruction when required. Supported by advanced surgical facilities and coordinated oncology care, we emphasize early intervention, personalized treatment planning, optimal outcomes, and compassionate support throughout every stage of the cancer journey.</p>
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
