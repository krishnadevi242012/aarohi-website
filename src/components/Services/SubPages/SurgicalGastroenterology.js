import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Surgical Gastroenterology</title>
            </Helmet>

            <div className="about-section surgical-gastroenterology-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Surgical Gastroenterology</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we offer advanced Surgical Gastroenterology services for the treatment of diseases affecting the digestive system, liver, pancreas, gallbladder, and gastrointestinal tract. Our skilled surgeons combine expertise with modern surgical techniques to provide safe, effective, and patient-centered care.</p>
                                    <p className="font-weight-normal">We specialize in the surgical management of gallbladder diseases, hernias, gastrointestinal cancers, liver and pancreatic disorders, colorectal diseases, acid reflux disorders, intestinal obstructions, and other complex digestive conditions. Our services include laparoscopic and minimally invasive procedures, advanced gastrointestinal surgeries, and comprehensive perioperative care. With state-of-the-art operation theatres and a multidisciplinary approach, we focus on precise treatment, faster recovery, reduced postoperative discomfort, and improved long-term outcomes for our patients.</p>
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
