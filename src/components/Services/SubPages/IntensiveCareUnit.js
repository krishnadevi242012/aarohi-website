import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: ICU</title>
            </Helmet>

            <div className="about-section emergency-section-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Intensive Care Unit (ICU)</h1>
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
                                        The Intensive Care Unit (ICU) at Aarohi Hospital provides 24/7 critical care for patients who require close monitoring, advanced medical support, and life-saving treatment. Our ICU is equipped to manage critically ill medical, surgical, trauma, and other emergency patients with a focus on rapid stabilization, continuous monitoring, and coordinated care.
                                    </p>

                                    <p className="font-weight-normal">
                                        The ICU is supported by advanced patient monitoring systems, ventilator support, oxygen therapy, infusion pumps, and emergency life-support equipment. A dependable ventilator and power backup system ensures uninterrupted care for critically ill patients at all times.
                                    </p>

                                    <p className="font-weight-normal">
                                        Our trained critical care physicians and skilled nursing staff provide continuous observation and timely intervention based on each patient's condition. The ICU also has immediate access to diagnostic facilities and operation theatres, enabling prompt investigation and treatment when required.
                                    </p>

                                    <p className="font-weight-normal">
                                        At Aarohi Hospital, we emphasize patient safety, continuous monitoring, timely medical intervention, and clear communication with families throughout the critical care journey.
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
