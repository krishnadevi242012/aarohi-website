import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Paediatric Surgery</title>
            </Helmet>

            <div className="about-section paediatric-surgery-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Paediatric Surgery</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we provide specialized Paediatric Surgery services for infants, children, and adolescents, delivering expert surgical care in a safe, child-friendly, and compassionate environment. Our experienced paediatric surgeons are dedicated to addressing both congenital and acquired conditions with precision and sensitivity to the unique needs of young patients.</p>
                                    <p className="font-weight-normal">We specialize in the surgical treatment of congenital anomalies, hernias, undescended testes, hydrocele, appendicitis, gastrointestinal disorders, urological conditions, neonatal surgical emergencies, and other childhood surgical problems. Our services include minimally invasive and laparoscopic procedures whenever appropriate, ensuring reduced pain, smaller scars, and faster recovery. With advanced surgical facilities, dedicated paediatric support services, and a family-centered approach, we focus on achieving the best possible outcomes while providing comfort and reassurance to both children and their families.</p>
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
