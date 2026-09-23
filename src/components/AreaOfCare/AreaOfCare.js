import React from "react";
import { Link } from "react-router-dom";

const AreaOfCare = () => {

    /* =====================================================
       MEDICAL SPECIALITIES
       ===================================================== */

    const medicalSpecialities = [
        {
            name: "General Medicine",
            path: "/general-medicine-cardiac-care"
        },
        {
            name: "General Surgery",
            path: "/general-laparoscopic-surgery"
        },
        {
            name: "Obstetrics & Gynaecology",
            path: "/obstetrics-gynaecology"
        },
        {
            name: "Paediatrics",
            path: "/paediatrics"
        },
        {
            name: "Orthopaedics & Trauma Care",
            path: "/orthopedics"
        },
        {
            name: "Cardiology",
            path: "/cardiology"
        },
        {
            name: "Cardiothoracic, Cardiovascular Surgery (CTVS) and Endovascular Surgery",
            path: "/vascular-surgery"
        },
        {
            name: "Neurology",
            path: "/neurology"
        },
        {
            name: "Neurosurgery",
            path: "/neurosurgery"
        },
        {
            name: "Nephrology",
            path: "/nephrology"
        },
        {
            name: "Urology",
            path: "/urology"
        },
        {
            name: "Respiratory Medicine",
            path: "/pulmonology"
        },
        {
            name: "Medical & Surgical Gastroenterology",
            path: "/medical-gastroenterology"
        },
        {
            name: "Plastic Surgery",
            path: "/plastic-surgery"
        },
        {
            name: "ENT (Ear, Nose & Throat)",
            path: "/ent"
        },
        {
            name: "Dermatology",
            path: "/dermatology"
        },
        {
            name: "Psychiatry (OPD)",
            path: "/psychiatry"
        },
        {
            name: "Oncology",
            path: "/medical-oncology"
        },
        {
            name: "Medical & Surgical Oncology",
            path: "/surgical-oncology"
        },
        {
            name: "Anaesthesia & Critical Care",
            path: "/anaesthesiology"
        }
    ];


    /* =====================================================
       DIAGNOSTIC & CLINICAL SERVICES
       ===================================================== */

    const diagnosticServices = [
        {
            icon: "mdi mdi-magnify",
            title: "24×7 MRI & CT Scan Services",
            description:
                "Advanced imaging services supporting accurate diagnosis and treatment planning.",
            path: "/diagnostics-imaging-services"
        },
        {
            icon: "mdi mdi-flask-outline",
            title: "24×7 Laboratory Services",
            description:
                "Round-the-clock laboratory support for timely and reliable diagnostic testing.",
            path: "/laboratory"
        }
    ];


    /* =====================================================
       EMERGENCY & CRITICAL CARE
       ===================================================== */

    const emergencyServices = [
        {
            icon: "mdi mdi-ambulance",
            title: "24×7 Emergency Services",
            description:
                "Round-the-clock emergency care for urgent medical needs.",
            path: "/emergency-care"
        },
        {
            icon: "mdi mdi-hospital-building",
            title: "Intensive Care Unit (ICU)",
            description:
                "Critical care support for patients requiring close monitoring and specialised treatment.",
            path: "/emergancy-critical-care"
        }
    ];


    /* =====================================================
       RENAL CARE
       ===================================================== */

    const renalServices = [
        {
            icon: "mdi mdi-water-outline",
            title: "24×7 Dialysis Services",
            description:
                "Round-the-clock dialysis support for patients requiring renal care.",
            path: "/dialysis"
        }
    ];


    /* =====================================================
       HOSPITAL FACILITIES
       ===================================================== */

    const hospitalFacilities = [
        {
            icon: "mdi mdi-hospital-building",
            title: "Modular Operation Theatre Facilities",
            path: "/modular-ot"
        },
        {
            icon: "mdi mdi-human-handsup",
            title: "Physiotherapy",
            path: "/physiotherapy"
        },
        {
            icon: "mdi mdi-pill",
            title: "24×7 Pharmacy",
            path: "/pharmacy"
        }
    ];


    return (
        <section className="area-care-page">


            {/* =================================================
                HERO
               ================================================= */}

            <div className="area-care-hero">

                <div className="area-care-hero-overlay"></div>

                <div className="container">

                    <div className="area-care-hero-content">

                        <span className="area-care-label">
                            AAROHI HOSPITAL
                        </span>

                        <h1>
                            Comprehensive Care,
                            <br />
                            <span>All Under One Roof</span>
                        </h1>

                        <p>
                            From advanced medical specialities to
                            round-the-clock emergency, diagnostic and
                            hospital services, we provide comprehensive
                            care focused on every patient's needs.
                        </p>

                        <div className="area-care-hero-line"></div>

                    </div>

                </div>

            </div>


            {/* =================================================
                INTRO
               ================================================= */}

            <div className="area-care-intro">

                <div className="container">

                    <div className="area-care-intro-inner">

                        <span className="area-section-label">
                            OUR AREAS OF CARE
                        </span>

                        <h2>
                            Expertise You Can
                            <span> Count On</span>
                        </h2>

                        <p>
                            Aarohi Hospital brings together experienced
                            medical professionals, specialised clinical
                            services and advanced hospital facilities to
                            support patients across a wide range of
                            healthcare needs.
                        </p>

                    </div>

                </div>

            </div>


            {/* =================================================
                MEDICAL SPECIALITIES
               ================================================= */}

            <section className="care-specialities-section">

                <div className="container">

                    <div className="care-section-heading">

                        <div className="care-heading-icon">
                            <i className="mdi mdi-doctor"></i>
                        </div>

                        <div>

                            <span className="area-section-label">
                                CLINICAL EXPERTISE
                            </span>

                            <h2>
                                Medical Specialities
                            </h2>

                        </div>

                    </div>


                    <div className="specialities-grid">

                        {medicalSpecialities.map((speciality, index) => {

                            const cardContent = (
                                <>
                                    <div className="speciality-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <div className="speciality-icon">
                                        <i className="mdi mdi-medical-bag"></i>
                                    </div>

                                    <h3>
                                        {speciality.name}
                                    </h3>

                                    {speciality.path && (
                                        <span className="speciality-arrow">
                                            →
                                        </span>
                                    )}
                                </>
                            );

                            return speciality.path ? (
                                <Link
                                    to={speciality.path}
                                    className="speciality-card"
                                    key={index}
                                >
                                    {cardContent}
                                </Link>
                            ) : (
                                <div
                                    className="speciality-card"
                                    key={index}
                                >
                                    {cardContent}
                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =================================================
                DIAGNOSTIC & CLINICAL SERVICES
               ================================================= */}

            <section className="care-service-section diagnostic-section">

                <div className="container">

                    <div className="care-section-heading">

                        <div className="care-heading-icon">
                            <i className="mdi mdi-microscope"></i>
                        </div>

                        <div>

                            <span className="area-section-label">
                                DIAGNOSTICS
                            </span>

                            <h2>
                                Diagnostic & Clinical Services
                            </h2>

                        </div>

                    </div>


                    <div className="service-card-grid">

                        {diagnosticServices.map((service, index) => {

                            const content = (
                                <>
                                    <div className="large-service-icon">
                                        <i className={service.icon}></i>
                                    </div>

                                    <div>
                                        <h3>
                                            {service.title}
                                        </h3>

                                        <p>
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="service-card-number">
                                        0{index + 1}
                                    </div>
                                </>
                            );

                            return service.path ? (
                                <Link
                                    to={service.path}
                                    className="large-service-card"
                                    key={index}
                                >
                                    {content}
                                </Link>
                            ) : (
                                <div
                                    className="large-service-card"
                                    key={index}
                                >
                                    {content}
                                </div>
                            );

                        })}

                    </div>

                </div>

            </section>


            {/* =================================================
                EMERGENCY & CRITICAL CARE
               ================================================= */}

            <section className="care-service-section emergency-section">

                <div className="container">

                    <div className="care-section-heading">

                        <div className="care-heading-icon emergency-icon">
                            <i className="mdi mdi-ambulance"></i>
                        </div>

                        <div>

                            <span className="area-section-label">
                                CRITICAL CARE
                            </span>

                            <h2>
                                Emergency & Critical Care
                            </h2>

                        </div>

                    </div>


                    <div className="service-card-grid">

                        {emergencyServices.map((service, index) => {

                            const content = (
                                <>
                                    <div className="large-service-icon">
                                        <i className={service.icon}></i>
                                    </div>

                                    <div>
                                        <h3>
                                            {service.title}
                                        </h3>

                                        <p>
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="service-card-number">
                                        0{index + 1}
                                    </div>
                                </>
                            );

                            return (
                                <Link
                                    to={service.path}
                                    className="large-service-card emergency-card"
                                    key={index}
                                >
                                    {content}
                                </Link>
                            );

                        })}

                    </div>

                </div>

            </section>


            {/* =================================================
                RENAL CARE
               ================================================= */}

            <section className="care-service-section renal-section">

                <div className="container">

                    <div className="care-section-heading">

                        <div className="care-heading-icon">
                            <i className="mdi mdi-water"></i>
                        </div>

                        <div>

                            <span className="area-section-label">
                                SPECIALISED CARE
                            </span>

                            <h2>
                                Renal Care Services
                            </h2>

                        </div>

                    </div>


                    <div className="service-card-grid single-service">

                        {renalServices.map((service, index) => (

                            <Link
                                to={service.path}
                                className="large-service-card"
                                key={index}
                            >

                                <div className="large-service-icon">
                                    <i className={service.icon}></i>
                                </div>

                                <div>

                                    <h3>
                                        {service.title}
                                    </h3>

                                    <p>
                                        {service.description}
                                    </p>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

            </section>


            {/* =================================================
                HOSPITAL FACILITIES
               ================================================= */}

            <section className="facilities-section">

                <div className="container">

                    <div className="care-section-heading">

                        <div className="care-heading-icon">
                            <i className="mdi mdi-hospital-building"></i>
                        </div>

                        <div>

                            <span className="area-section-label">
                                SUPPORTING YOUR CARE
                            </span>

                            <h2>
                                Hospital Facilities
                            </h2>

                        </div>

                    </div>


                    <div className="facilities-grid">

                        {hospitalFacilities.map((facility, index) => {

                            const content = (
                                <>
                                    <div className="facility-icon">
                                        <i className={facility.icon}></i>
                                    </div>

                                    <div>

                                        <span>
                                            0{index + 1}
                                        </span>

                                        <h3>
                                            {facility.title}
                                        </h3>

                                    </div>
                                </>
                            );

                            return facility.path ? (
                                <Link
                                    to={facility.path}
                                    className="facility-card"
                                    key={index}
                                >
                                    {content}
                                </Link>
                            ) : (
                                <div
                                    className="facility-card"
                                    key={index}
                                >
                                    {content}
                                </div>
                            );

                        })}

                    </div>

                </div>

            </section>


            {/* =================================================
                CTA
               ================================================= */}

            <section className="area-care-cta">

                <div className="container">

                    <div className="area-care-cta-inner">

                        <div>

                            <span>
                                YOUR HEALTH, OUR PRIORITY
                            </span>

                            <h2>
                                Need help choosing the right care?
                            </h2>

                            <p>
                                Our team is here to help you find the
                                appropriate speciality or service.
                            </p>

                        </div>

                        <Link
                            to="/appointment"
                            className="area-care-cta-button"
                        >
                            Book an Appointment
                            <span> →</span>
                        </Link>

                    </div>

                </div>

            </section>

        </section>
    );
};

export default AreaOfCare;