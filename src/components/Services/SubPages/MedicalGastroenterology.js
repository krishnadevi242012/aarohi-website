import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Medical Gastroenterology</title>
            </Helmet>

            <div className="about-section medical-gastroenterology-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Medical Gastroenterology</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we provide comprehensive Medical Gastroenterology care for the diagnosis, treatment, and prevention of disorders affecting the digestive system, liver, pancreas, and biliary tract. Our experienced gastroenterologists are dedicated to delivering personalized care using advanced diagnostic and therapeutic techniques.</p>
                                    <p className="font-weight-normal">We specialize in the management of acid reflux (GERD), gastritis, peptic ulcers, irritable bowel syndrome (IBS), inflammatory bowel disease (IBD), liver diseases, hepatitis, fatty liver, pancreatitis, gastrointestinal infections, and digestive disorders. Our services include advanced endoscopic procedures, colonoscopy, diagnostic evaluations, and preventive screenings to ensure early detection and effective treatment. We emphasize patient education, lifestyle modification, and evidence-based care to promote long-term digestive health and overall well-being.</p>
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
