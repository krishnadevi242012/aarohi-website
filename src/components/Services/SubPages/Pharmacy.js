import React from "react";
import { Helmet } from "react-helmet";
import ReadMoreAndLess from "react-read-more-less";

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: 24×7 Pharmacy</title>
            </Helmet>

            <div className="about-section pharmacy-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">
                                        24×7 Pharmacy
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
                                        At Aarohi Hospital, our 24×7 Pharmacy provides convenient access to essential medicines and pharmaceutical services for patients throughout the day and night. Our pharmacy is supported by trained pharmacy professionals who help ensure the timely availability and appropriate dispensing of prescribed medications.
                                    </p>

                                    <p className="font-weight-normal">
                                        The pharmacy supports patients receiving treatment across various departments, including emergency, inpatient, outpatient, and critical care services. Round-the-clock availability helps ensure that prescribed medicines and essential pharmaceutical requirements can be accessed promptly whenever needed.
                                    </p>

                                    <p className="font-weight-normal">
                                        Our pharmacy team follows appropriate medication-handling and dispensing practices, with attention to prescription accuracy, medication availability, and patient convenience. We work closely with doctors and clinical teams to support smooth and coordinated patient care.
                                    </p>

                                    <p className="font-weight-normal">
                                        At Aarohi Hospital, our 24×7 Pharmacy is committed to providing reliable, timely, and patient-focused pharmaceutical support as an integral part of comprehensive hospital care.
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