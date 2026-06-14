import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Emergency & Critical Care</title>
            </Helmet>

            <div className="about-section emergency-section-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Emergency & Critical Care</h1>
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
                                    <p className="font-weight-normal">The Emergency & Critical Care Department at Aarohi Hospital provides 24/7 round-the-clock medical care for patients requiring immediate and life-saving treatment. Our emergency services are equipped to manage medical, surgical, obstetric, and trauma emergencies with speed, precision, and compassion.
                                    </p>
                                    <p className="font-weight-normal">To enable rapid diagnosis and timely intervention, the department is supported by advanced diagnostic facilities, including CT scan, MRI, digital X-ray, E-FAST (Extended Focused Assessment with Sonography in Trauma) scan, and emergency 2D echocardiography. These point-of-care investigations play a crucial role in the early evaluation of trauma, internal bleeding, shock, cardiac emergencies, and critically ill patients.
                                    </p>
                                    <p className="font-weight-normal">Our Critical Care Unit is equipped with advanced patient monitoring systems, ventilator support, oxygen therapy, infusion pumps, and emergency life-support equipment. A dependable ventilator and power backup system ensures uninterrupted care for critically ill patients at all times.
                                    </p>
                                    <p className="font-weight-normal">With trained emergency physicians, skilled nursing staff, and immediate access to diagnostics and operation theatres, Aarohi Hospital ensures coordinated, efficient, and patient-centred emergency care. We focus on rapid stabilization, continuous monitoring, and clear communication with families during critical situations.
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
