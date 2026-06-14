import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Anaesthesiology</title>
            </Helmet>

            <div className="about-section anaesthesiology-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Anaesthesiology</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, our Anaesthesiology department is dedicated to ensuring patient safety, comfort, and pain-free care before, during, and after surgical procedures. Our experienced anaesthesiologists work closely with surgeons and critical care teams to provide personalized anaesthesia and perioperative management for patients of all ages.</p>
                                    <p className="font-weight-normal">We specialize in general, regional, and spinal anaesthesia, sedation services, labour analgesia, perioperative monitoring, pain management, and critical care support. Using advanced monitoring systems and evidence-based protocols, we ensure optimal patient safety and comfort throughout the surgical journey. We emphasize thorough preoperative assessment, individualized care plans, and continuous monitoring to deliver the highest standards of anaesthesia care and patient well-being.</p>
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
