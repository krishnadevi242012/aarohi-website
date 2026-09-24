import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const OutpatientDepartment = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Outpatient Department</title>
            </Helmet>

            {/* OPD HERO SECTION */}
            <div className="about-section outpatient-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">
                                        Outpatient Department
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* OPD CONTENT */}
            <div className="about-section bg-off-white pt-4 pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">

                                <div className="about-content">

                                    <p className="font-weight-normal">
                                        At Aarohi Hospital, our Outpatient Department
                                        (OPD) provides convenient access to consultations
                                        and medical care across multiple specialities.
                                        Patients can consult experienced doctors for
                                        diagnosis, treatment planning, follow-up care,
                                        and ongoing medical management.
                                    </p>

                                    <p className="font-weight-normal">
                                        Our OPD services are designed to provide
                                        comprehensive and patient-focused care in a
                                        comfortable environment. From initial
                                        consultation and evaluation to investigations,
                                        specialist referrals, and follow-up visits,
                                        our team works together to ensure that every
                                        patient receives appropriate and timely care.
                                    </p>

                                    <p className="font-weight-normal">
                                        Patients can access consultations across our
                                        various medical specialities, making Aarohi
                                        Hospital a convenient destination for
                                        comprehensive outpatient healthcare.
                                    </p>

                                    {/* BOOK APPOINTMENT */}
                                    <div className="mt-4">
                                        <Link
                                            to="/appointment"
                                            className="btn btn-primary"
                                        >
                                            Book Appointment
                                            <span className="ml-2">→</span>
                                        </Link>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OutpatientDepartment;