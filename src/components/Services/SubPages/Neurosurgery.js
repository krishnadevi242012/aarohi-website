import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Neurosurgery</title>
            </Helmet>

            <div className="about-section neurosurgery-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Neurosurgery</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we provide advanced Neurosurgical care for disorders affecting the brain, spine, and nervous system. Our skilled neurosurgeons combine clinical expertise with modern technology to deliver precise treatment and compassionate care for patients of all ages.</p>
                                    <p className="font-weight-normal">We specialize in the management of brain tumors, head injuries, stroke-related conditions, spinal disorders, slipped discs, spinal trauma, nerve compression syndromes, hydrocephalus, and other complex neurological conditions. Our state-of-the-art operation theatres, advanced imaging support, and multidisciplinary approach ensure accurate diagnosis and effective treatment. We emphasize patient safety, informed decision-making, and comprehensive rehabilitation to help patients achieve the best possible recovery and quality of life.</p>
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
