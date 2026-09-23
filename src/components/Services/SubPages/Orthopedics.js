import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Orthopedics</title>
            </Helmet>

            <div className="about-section orthopedics-section-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Orthopaedics & Trauma Care</h1>
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
                                        The Orthopaedics & Trauma Care department at Aarohi Hospital provides specialized care for conditions and injuries affecting the bones, joints, muscles, ligaments, and spine. Our experienced orthopaedic team offers comprehensive treatment for fractures, arthritis, sports injuries, ligament injuries, back and neck pain, and joint-related disorders.

                                        We focus on accurate diagnosis, timely trauma management, minimally invasive treatment whenever appropriate, and structured rehabilitation to help patients regain mobility and independence. Our approach combines advanced orthopaedic care, surgical expertise, and physiotherapy support to promote faster recovery, restore function, and maintain long-term musculoskeletal health.
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
