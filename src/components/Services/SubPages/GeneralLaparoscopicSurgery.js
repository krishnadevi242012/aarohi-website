import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: General & Laparoscopic Surgery</title>
            </Helmet>

            <div className="about-section general-laparoscopic-surgery-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">General & Laparoscopic Surgery</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we provide advanced General & Laparoscopic Surgical care with a focus on safety, precision, and faster recovery. Our experienced surgeons offer comprehensive treatment for a wide range of surgical conditions using both conventional and minimally invasive techniques.</p>
                                    <p className="font-weight-normal">We specialize in laparoscopic (keyhole) surgeries for gallbladder stones, hernias, appendicitis, and gastrointestinal disorders, as well as procedures for piles, fissures, fistulas, breast diseases, thyroid disorders, and soft tissue swellings. Our modern operation theatres, advanced surgical equipment, and dedicated perioperative care team ensure optimal outcomes and patient comfort. We emphasize evidence-based treatment, clear communication, and personalized care to help patients return to their daily lives as quickly as possible.</p>
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
