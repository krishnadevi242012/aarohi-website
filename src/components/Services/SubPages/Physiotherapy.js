import React from "react";
import { Helmet } from "react-helmet";
import ReadMoreAndLess from "react-read-more-less";

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Physiotherapy</title>
            </Helmet>

            <div className="about-section physiotherapy-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">
                                        Physiotherapy
                                    </h1>
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
                                        At Aarohi Hospital, our Physiotherapy services focus on improving mobility, restoring physical function, reducing pain, and supporting recovery from injuries, illnesses, and surgical procedures. Our physiotherapy team provides personalized rehabilitation programs based on each patient's condition, functional needs, and recovery goals.
                                    </p>

                                    <p className="font-weight-normal">
                                        Our services support patients with musculoskeletal conditions, joint and muscle problems, sports injuries, post-operative rehabilitation, back and neck pain, neurological conditions, and mobility-related difficulties. Treatment may include therapeutic exercises, mobility training, strengthening, stretching, pain-management techniques, and functional rehabilitation as appropriate.
                                    </p>

                                    <p className="font-weight-normal">
                                        We work closely with doctors and other healthcare professionals to provide coordinated rehabilitation and monitor progress throughout the recovery process. Our patient-centred approach emphasizes safe movement, gradual improvement, functional independence, and long-term physical well-being.
                                    </p>

                                    <p className="font-weight-normal">
                                        At Aarohi Hospital, our physiotherapy team is committed to helping patients regain strength, mobility, confidence, and independence through structured and personalized rehabilitation care.
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