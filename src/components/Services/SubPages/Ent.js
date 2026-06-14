import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: ENT (Ear, Nose & Throat)</title>
            </Helmet>

            <div className="about-section ent-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">ENT (Ear, Nose & Throat)</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we provide comprehensive ENT (Ear, Nose & Throat) care for patients of all ages, combining expert diagnosis with advanced treatment options to improve quality of life and overall well-being. Our experienced ENT specialists are dedicated to delivering personalized care for a wide range of ear, nose, throat, head, and neck conditions.</p>
                                    <p className="font-weight-normal">We specialize in the treatment of ear infections, hearing loss, sinusitis, allergic rhinitis, tonsillitis, adenoid disorders, voice and swallowing problems, nasal polyps, vertigo, and other ENT-related conditions. Our services include endoscopic procedures, hearing assessments, and surgical interventions when required. With modern diagnostic facilities, advanced treatment techniques, and a patient-centered approach, we ensure effective care, faster recovery, and long-term health outcomes for every patient.</p>
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
