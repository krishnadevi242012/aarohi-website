import React from "react";
import { Helmet } from "react-helmet";
import ReadMoreAndLess from "react-read-more-less";

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Modular Operation Theatre Facilities</title>
            </Helmet>

            <div className="about-section operation-theatre-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">
                                        Modular Operation Theatre Facilities
                                    </h1>
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
                                        At Aarohi Hospital, our Modular Operation Theatre Facilities are designed to provide a safe, controlled, and efficient environment for a wide range of surgical procedures. Our operation theatres are supported by modern infrastructure, advanced surgical equipment, and strict infection-control practices to maintain high standards of patient safety.
                                    </p>

                                    <p className="font-weight-normal">
                                        The modular operation theatres support various surgical specialties and are equipped to facilitate both routine and complex procedures. Advanced monitoring and surgical equipment, along with skilled surgical, anaesthesia, and nursing teams, enable precise and coordinated perioperative care.
                                    </p>

                                    <p className="font-weight-normal">
                                        Our operation theatre team follows established sterilization, infection-prevention, and safety protocols throughout the surgical process. We focus on maintaining a clean and controlled environment, ensuring efficient surgical workflow, and providing comprehensive care before, during, and after surgery.
                                    </p>

                                    <p className="font-weight-normal">
                                        At Aarohi Hospital, our modular operation theatre facilities support safe surgical care by combining modern infrastructure, trained professionals, advanced technology, and a strong commitment to patient safety and quality outcomes.
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