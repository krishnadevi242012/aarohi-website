import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Vascular Surgery</title>
            </Helmet>

            <div className="about-section vascular-surgery-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Cardiothoracic , Cardiovascular Surgery (CTVS) and Endovascular surgery</h1>
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
                                        At Aarohi Hospital, we provide specialized Cardiothoracic, Cardiovascular Surgery (CTVS), and Endovascular Surgery services for the diagnosis and treatment of conditions affecting the heart, blood vessels, and circulatory system. Our experienced surgical team combines advanced technology, surgical expertise, and evidence-based care to provide safe and effective treatment for complex cardiovascular conditions.
                                    </p>

                                    <p className="font-weight-normal">
                                        Our services include surgical treatment for coronary artery disease, heart valve disorders, aortic and vascular conditions, and other complex cardiovascular problems. We also provide minimally invasive and endovascular procedures whenever appropriate, with a focus on precise diagnosis, personalized treatment, patient safety, and faster recovery. Through a multidisciplinary approach and comprehensive perioperative care, we aim to improve cardiovascular health, restore function, and support long-term well-being.
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
