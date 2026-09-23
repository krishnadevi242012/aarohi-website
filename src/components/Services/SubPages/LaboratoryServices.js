import React from "react";
import { Helmet } from "react-helmet";
import ReadMoreAndLess from "react-read-more-less";

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: 24×7 Laboratory Services</title>
            </Helmet>

            <div className="about-section laboratory-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">
                                        24×7 Laboratory Services
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
                                        At Aarohi Hospital, our 24×7 Laboratory Services provide reliable and timely diagnostic support for accurate diagnosis, effective treatment, and continuous patient care. Our laboratory is supported by modern diagnostic technology and trained laboratory professionals to ensure high-quality and dependable test results.
                                    </p>

                                    <p className="font-weight-normal">
                                        We offer a wide range of laboratory investigations to support routine health assessments, emergency care, diagnosis, treatment monitoring, and preventive healthcare. With round-the-clock availability, efficient sample processing, and a focus on accuracy and quality, our laboratory services help doctors make informed clinical decisions and provide timely care to patients.
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