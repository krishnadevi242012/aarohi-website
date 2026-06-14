import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Cardiology</title>
            </Helmet>

            <div className="about-section cardiology-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Cardiology</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we provide comprehensive Cardiology services dedicated to the prevention, diagnosis, and treatment of heart and vascular diseases. Our experienced cardiologists combine clinical expertise with advanced technology to deliver personalized care aimed at improving heart health and enhancing quality of life.</p>
                                    <p className="font-weight-normal">We specialize in the management of coronary artery disease, heart attacks, hypertension, heart failure, arrhythmias, valvular heart disease, congenital heart conditions, and other cardiovascular disorders. Our services include cardiac consultations, ECG, echocardiography, stress testing, Holter monitoring, preventive heart screenings, and advanced cardiac care. With state-of-the-art diagnostic facilities and a patient-centered approach, we focus on early detection, timely intervention, lifestyle modification, and long-term cardiovascular wellness.</p>
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
