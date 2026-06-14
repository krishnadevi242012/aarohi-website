import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: OMFS (Oral & Maxillofacial Surgery)</title>
            </Helmet>

            <div className="about-section omfs-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">OMFS (Oral & Maxillofacial Surgery)</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we provide specialized Oral & Maxillofacial Surgery (OMFS) services for the diagnosis and treatment of conditions affecting the mouth, jaws, face, and facial structures. Our skilled oral and maxillofacial surgeons combine surgical expertise with advanced technology to deliver precise, safe, and patient-centered care.</p>
                                    <p className="font-weight-normal">We specialize in the management of impacted teeth, facial trauma and fractures, jaw deformities, oral cysts and tumors, temporomandibular joint (TMJ) disorders, oral infections, and reconstructive facial surgeries. Our services also include wisdom tooth removal, dental implant surgery, corrective jaw surgery, and treatment of congenital facial anomalies. With state-of-the-art surgical facilities and a multidisciplinary approach, we focus on restoring function, improving aesthetics, relieving discomfort, and enhancing overall oral and facial health.</p>
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
