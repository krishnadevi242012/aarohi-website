import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Paediatrics</title>
            </Helmet>

            <div className="about-section paediatrics-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Paediatrics</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we provide comprehensive Paediatric care focused on the health, growth, and well-being of children from infancy through adolescence. Our experienced paediatricians are dedicated to delivering compassionate, child-friendly care in a safe and supportive environment.</p>
                                    <p className="font-weight-normal">We specialize in the diagnosis and treatment of childhood illnesses, newborn and infant care, immunizations, growth and developmental assessments, nutritional guidance, respiratory infections, allergies, gastrointestinal disorders, and adolescent health concerns. Our modern facilities, child-centered approach, and 24/7 emergency support ensure timely and effective care for every child. We emphasize preventive healthcare, early intervention, and parental education to help children achieve their healthiest potential at every stage of development.</p>
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
