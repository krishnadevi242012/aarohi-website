import React from "react";
import { Helmet } from "react-helmet";
import ReadMoreAndLess from "react-read-more-less";

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: 24×7 Emergency Services</title>
            </Helmet>

            <div className="about-section emergency-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">
                                        24×7 Emergency Services
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
                                        The 24×7 Emergency Services at Aarohi Hospital provide round-the-clock medical care for patients requiring immediate attention and urgent treatment. Our emergency team is equipped to manage medical, surgical, obstetric, and trauma emergencies with speed, precision, and compassion.
                                    </p>

                                    <p className="font-weight-normal">
                                        Our emergency services are supported by advanced diagnostic facilities, including CT scan, MRI, digital X-ray, E-FAST (Extended Focused Assessment with Sonography in Trauma) scan, and emergency 2D echocardiography. These facilities enable rapid evaluation and timely intervention for trauma, internal bleeding, shock, cardiac emergencies, and other critical conditions.
                                    </p>

                                    <p className="font-weight-normal">
                                        Our trained emergency physicians and skilled nursing staff work closely with specialists, diagnostic teams, and operation theatre services to ensure coordinated and efficient emergency care. We focus on rapid assessment, stabilization, timely treatment, and continuous monitoring based on each patient's condition.
                                    </p>

                                    <p className="font-weight-normal">
                                        At Aarohi Hospital, we are committed to providing accessible and patient-centred emergency care at all times, with clear communication and compassionate support for patients and their families during urgent medical situations.
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