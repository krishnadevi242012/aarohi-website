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
                                    <h1 className="c-blue font-weight-bolder">Nephrology</h1>
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
                                        At Aarohi Hospital, we provide comprehensive Nephrology care focused on the prevention, diagnosis, and treatment of kidney-related disorders. Our experienced nephrologists are committed to delivering personalized, evidence-based care that supports kidney health and improves patients' quality of life.
                                    </p>

                                    <p className="font-weight-normal">
                                        We specialize in the management of chronic kidney disease, acute kidney injury, kidney stones, hypertension-related kidney disorders, diabetic kidney disease, electrolyte imbalances, and other renal conditions. Our approach emphasizes early detection, appropriate treatment, regular monitoring, patient education, and preventive strategies to slow disease progression and protect kidney function. We work closely with patients to provide comprehensive long-term care and support their overall well-being.
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
