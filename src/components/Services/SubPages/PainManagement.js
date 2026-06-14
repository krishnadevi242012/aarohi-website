import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Pain Management</title>
            </Helmet>

            <div className="about-section pain-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Pain Management</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we offer specialized Pain Management services aimed at improving comfort, mobility, and quality of life for patients suffering from acute and chronic pain conditions. Our multidisciplinary approach focuses on identifying the root cause of pain and providing personalized, evidence-based treatment solutions.</p>
                                    <p className="font-weight-normal">We specialize in the management of back and neck pain, joint pain, arthritis, sciatica, neuropathic pain, cancer-related pain, post-surgical pain, and other chronic pain disorders. Our services include medication management, image-guided pain interventions, nerve blocks, regenerative therapies, and rehabilitation support. Using advanced techniques and a patient-centered approach, we strive to reduce pain, restore function, and help patients return to their daily activities with confidence and comfort.</p>
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
