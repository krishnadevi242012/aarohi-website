import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Urology</title>
            </Helmet>

            <div className="about-section urology-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Urology</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we provide advanced Urology care for the diagnosis and treatment of disorders affecting the urinary tract and male reproductive system. Our experienced urologists combine clinical expertise with modern technology to deliver effective, personalized care for patients of all ages.</p>
                                    <p className="font-weight-normal">We specialize in the management of kidney stones, urinary tract infections, prostate disorders, urinary incontinence, male infertility, erectile dysfunction, urological cancers, and other urinary tract conditions. Our services include minimally invasive and endoscopic procedures, laparoscopic surgeries, stone management, and comprehensive diagnostic evaluations. With advanced facilities and a patient-centered approach, we emphasize accurate diagnosis, effective treatment, faster recovery, and long-term urological health.</p>
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
