import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Plastic & Reconstructive Surgery</title>
            </Helmet>

            <div className="about-section plastic-surgery-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Plastic & Reconstructive Surgery</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we provide advanced Plastic & Reconstructive Surgery services focused on restoring form, function, and confidence. Our experienced plastic surgeons utilize modern surgical techniques and personalized treatment plans to address a wide range of congenital, traumatic, and acquired conditions.</p>
                                    <p className="font-weight-normal">We specialize in reconstructive procedures following trauma, burns, cancer surgery, and congenital deformities, as well as scar revision, hand surgery, wound reconstruction, and soft tissue repair. Our services also include selected cosmetic and aesthetic procedures designed to enhance appearance while maintaining natural results. With state-of-the-art surgical facilities and a multidisciplinary approach, we emphasize patient safety, functional restoration, aesthetic outcomes, and compassionate care throughout the treatment journey.</p>
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
