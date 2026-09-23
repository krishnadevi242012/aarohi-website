import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: MRI & CT Scan Services</title>
            </Helmet>

            <div className="about-section imaging-section-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">24×7 MRI & CT Scan Services</h1>
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
                                        At Aarohi Hospital, our 24×7 MRI & CT Scan Services play a vital role in accurate diagnosis, timely treatment, and effective clinical decision-making. We provide round-the-clock advanced imaging services supported by experienced radiologists and trained technicians to ensure reliable and high-quality diagnostic care.
                                    </p>

                                    <p className="font-weight-normal">
                                        Our MRI and CT imaging services support the diagnosis and evaluation of a wide range of medical conditions, including neurological, cardiac, abdominal, musculoskeletal, and emergency conditions. With advanced imaging technology and efficient reporting, we focus on accurate results, timely diagnosis, and seamless support for physicians in planning appropriate treatment.
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
