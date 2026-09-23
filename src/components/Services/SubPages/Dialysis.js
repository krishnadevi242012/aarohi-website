import React from "react";
import { Helmet } from "react-helmet";
import ReadMoreAndLess from "react-read-more-less";

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: 24×7 Dialysis Services</title>
            </Helmet>

            <div className="about-section dialysis-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">
                                        24×7 Dialysis Services
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
                                        At Aarohi Hospital, our 24×7 Dialysis Services provide comprehensive renal replacement therapy for patients with kidney failure and other conditions requiring dialysis. Our experienced nephrology team is committed to providing safe, reliable, and patient-centred dialysis care with continuous medical support.
                                    </p>

                                    <p className="font-weight-normal">
                                        Our dialysis services are available round the clock to support patients who require regular or emergency dialysis. We focus on appropriate dialysis management, close monitoring of patients during treatment, infection prevention, and timely medical intervention whenever required.
                                    </p>

                                    <p className="font-weight-normal">
                                        The dialysis unit works closely with our nephrologists, nursing team, laboratory, and other clinical departments to provide coordinated care. Patients are monitored throughout the dialysis process to ensure their safety, comfort, and effective treatment.
                                    </p>

                                    <p className="font-weight-normal">
                                        At Aarohi Hospital, we emphasize personalized renal care, patient education, regular monitoring, and ongoing medical support to help patients manage kidney disease and maintain their overall health and quality of life.
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