import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Nephrology & Dialysis</title>
            </Helmet>

            <div className="about-section nephrology-dialysis-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Nephrology & Dialysis</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we provide comprehensive Nephrology & Dialysis services focused on the prevention, diagnosis, and treatment of kidney-related disorders. Our experienced nephrologists and dedicated dialysis team are committed to delivering high-quality care that supports kidney health and enhances patients quality of life.</p>
                                    <p className="font-weight-normal">We specialize in the management of chronic kidney disease, acute kidney injury, kidney stones, hypertension-related kidney disorders, diabetic kidney disease, electrolyte imbalances, and other renal conditions. Our state-of-the-art dialysis unit offers safe and efficient hemodialysis services with continuous monitoring and personalized care. We emphasize early detection, patient education, preventive strategies, and long-term management to help patients achieve the best possible outcomes and maintain their overall well-being.</p>
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
