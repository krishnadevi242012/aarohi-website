import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital:  Neurology</title>
            </Helmet>

            <div className="about-section neurology-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Neurology</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we provide comprehensive Neurology care for the diagnosis, treatment, and management of disorders affecting the brain, spinal cord, nerves, and muscles. Our experienced neurologists combine clinical expertise with advanced diagnostic technology to deliver accurate evaluations and personalized treatment plans.</p>
                                    <p className="font-weight-normal">We specialize in the management of stroke, epilepsy, headaches and migraines, Parkinson’s disease, dementia, neuropathies, movement disorders, multiple sclerosis, vertigo, and other neurological conditions. Our advanced diagnostic facilities, including neuroimaging and neurophysiological testing, support timely and precise diagnosis. We emphasize early intervention, evidence-based treatment, patient education, and long-term care to help individuals achieve the best possible neurological health and quality of life.</p>
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
