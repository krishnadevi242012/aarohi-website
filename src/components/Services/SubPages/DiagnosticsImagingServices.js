import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Diagnostics & Imaging Services</title>
            </Helmet>

            <div className="about-section imaging-section-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Diagnostics & Imaging Services</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, our Diagnostics & Imaging Services play a vital role in accurate diagnosis, timely treatment, and effective clinical decision-making. We are equipped with advanced imaging technology supported by experienced technicians and clinicians to ensure reliable and high-quality diagnostic care.</p>
                                    
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
                             <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Advanced Imaging & Cardiac Diagnostics</h1>
                                </div>
                                <div className="about-content">
                                    <p className="font-weight-bold">CT Scan </p>
                                    <p className="font-weight-normal">Fast and precise imaging for trauma, stroke, chest, abdomen, and emergency evaluation </p>
                                <p className="font-weight-bold">MRI Scan </p>
                                    <p className="font-weight-normal">High-resolution imaging for brain, spine, joints, soft tissues, and complex medical conditions understanding. </p>
                               <p className="font-weight-bold">Digital X-ray </p>
                                    <p className="font-weight-normal">Quick imaging for bones, chest, and emergency assessments. </p>
                               <p className="font-weight-bold">Ultrasound (USG) </p>
                                    <p className="font-weight-normal">Abdominal, pelvic, obstetric, and soft-tissue imaging. </p>
                               <p className="font-weight-bold">Portable Bedside Ultrasound (USG) </p>
                                    <p className="font-weight-normal">Immediate imaging support for critically ill and emergency patients. </p>
                               <p className="font-weight-bold">2D Echocardiography </p>
                                    <p className="font-weight-normal">Evaluation of heart structure, function, and cardiac conditions </p>
                               <p className="font-weight-bold">TMT (Treadmill Test) </p>
                                    <p className="font-weight-normal">Assessment of cardiac fitness and detection of coronary artery disease </p>
                               
                                
                                
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
