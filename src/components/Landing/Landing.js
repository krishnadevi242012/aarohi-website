import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { departments as doctorDepartments } from "../Doctors/Doctors";
import axios from "axios";
import { Button, Form, Modal } from "react-bootstrap";



const Landing = () => {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [activeButton, setactiveButton] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [areaCareSlide, setAreaCareSlide] = useState(0);
    const [areaCareVisibleCount, setAreaCareVisibleCount] = useState(4);
    const [doctorSlide, setDoctorSlide] = useState(0);
    const [doctorVisibleCount, setDoctorVisibleCount] = useState(4);
    const [feedbackSlide, setFeedbackSlide] = useState(0);
    const [feedbackPosition, setFeedbackPosition] = useState(1);
    const [feedbackTransition, setFeedbackTransition] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 2);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const updateDoctorVisibleCount = () => {
            if (window.innerWidth <= 768) {
                setDoctorVisibleCount(1);
            } else if (window.innerWidth <= 991) {
                setDoctorVisibleCount(2);
            } else {
                setDoctorVisibleCount(4);
            }
        };

        updateDoctorVisibleCount();

        window.addEventListener("resize", updateDoctorVisibleCount);

        return () => {
            window.removeEventListener("resize", updateDoctorVisibleCount);
        };
    }, []);

    const allDoctors = doctorDepartments.flatMap((department) =>
        department.doctors.map((doctor) => ({
            ...doctor,
            department: department.name,
        }))
    );

    const areaCareDepartments = [
        {
            name: "General Medicine",
            path: "/general-medicine-cardiac-care",
            icon: "images/landing/icons/1.png"
        },
        {
            name: "General Surgery",
            path: "/general-laparoscopic-surgery",
            icon: "images/landing/icons/5.png"
        },
        {
            name: "Obstetrics & Gynaecology",
            path: "/obstetrics-gynaecology",
            icon: "images/landing/icons/2.png"
        },
        {
            name: "Paediatrics",
            path: "/paediatrics",
            icon: "images/landing/icons/7.png"
        },
        {
            name: "Orthopaedics & Trauma Care",
            path: "/orthopedics",
            icon: "images/landing/icons/6.png"
        },
        {
            name: "Cardiology",
            path: "/cardiology",
            icon: "images/landing/icons/25.png"
        },
        {
            name: "CTVS & Endovascular Surgery",
            path: "/vascular-surgery",
            icon: "images/landing/icons/21.png"
        },
        {
            name: "Neurology",
            path: "/neurology",
            icon: "images/landing/icons/13.png"
        },
        {
            name: "Neurosurgery",
            path: "/neurosurgery",
            icon: "images/landing/icons/8.png"
        },
        {
            name: "Nephrology",
            path: "/nephrology",
            icon: "images/landing/icons/14.png"
        },
        {
            name: "Urology",
            path: "/urology",
            icon: "images/landing/icons/15.png"
        },
        {
            name: "Respiratory Medicine",
            path: "/pulmonology",
            icon: "images/landing/icons/22.png"
        },
        {
            name: "Medical & Surgical Gastroenterology",
            path: "/medical-gastroenterology",
            icon: "images/landing/icons/16.png"
        },
        {
            name: "Plastic Surgery",
            path: "/plastic-surgery",
            icon: "images/landing/icons/26.png"
        },
        {
            name: "ENT (Ear, Nose & Throat)",
            path: "/ent",
            icon: "images/landing/icons/11.png"
        },
        {
            name: "Dermatology",
            path: "/dermatology",
            icon: "images/landing/icons/9.png"
        },
        {
            name: "Psychiatry",
            path: "/psychiatry",
            icon: "images/landing/icons/12.png"
        },
        {
            name: "Medical Oncology",
            path: "/medical-oncology",
            icon: "images/landing/icons/19.png"
        },
        {
            name: "Surgical Oncology",
            path: "/surgical-oncology",
            icon: "images/landing/icons/20.png"
        },
        {
            name: "Anaesthesia & Critical Care",
            path: "/anaesthesiology",
            icon: "images/landing/icons/10.png"
        },
        {
            name: "Outpatient Department",
            path: "/outpatient-department",
            icon: "images/landing/icons/2.png"
        }
    ];

    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth <= 768) {
                setAreaCareVisibleCount(1);
            } else if (window.innerWidth <= 991) {
                setAreaCareVisibleCount(2);
            } else {
                setAreaCareVisibleCount(4);
            }
        };

        updateVisibleCount();

        window.addEventListener("resize", updateVisibleCount);

        return () => {
            window.removeEventListener("resize", updateVisibleCount);
        };
    }, []);

    const feedbacks = [
        {
            name: "Ushashree K",
            review:
                "My experience at the hospital was truly reassuring. The doctors were kind, patient, and took the time to explain everything in a calm and caring manner. The nursing and support staff were attentive and compassionate, always ready to help. The hospital was clean, comfortable, and well organised, which added to the sense of ease during the visit. I am very grateful for the care and support provided throughout."
        },
        {
            name: "Rishit Jain",
            review:
                "My friend was admitted in Aarohi Hospital and the desk staff and the doctors were very friendly and the service was amazing."
        },
        {
            name: "Rajesh Krishna",
            review:
                "Right from the registration and casualty till the discharge treatment was amazing. The housekeeping staff was very approachable."
        },
        {
            name: "Prity Das",
            review:
                "Admitted in Aarohi Hospital for surgery and it went well. Doctors and nurses are very professional, kind and caring. I had a very satisfactory experience at Aarohi Hospital. All the supportive staff are courteous and helpful at every stage of my admission."
        },
        {
            name: "Renuka Raju",
            review:
                "Good hospital in the location, doctors and staff are very kind and good. Hospital is very clean and hygienic. Highly recommended."
        }
    ];

    const feedbackItems = [
        feedbacks[feedbacks.length - 1],
        ...feedbacks,
        feedbacks[0]
    ];

    const nextFeedback = () => {
        setFeedbackTransition(true);

        setFeedbackPosition((prev) => prev + 1);

        setFeedbackSlide(
            (prev) => (prev + 1) % feedbacks.length
        );
    };

    const prevFeedback = () => {
        setFeedbackTransition(true);

        setFeedbackPosition((prev) => prev - 1);

        setFeedbackSlide(
            (prev) =>
                (prev - 1 + feedbacks.length) %
                feedbacks.length
        );
    };

    const goToFeedback = (index) => {
        setFeedbackTransition(true);

        setFeedbackPosition(index + 1);

        setFeedbackSlide(index);
    };

    const handleFeedbackTransitionEnd = () => {

        if (feedbackPosition === feedbackItems.length - 1) {

            setFeedbackTransition(false);
            setFeedbackPosition(1);

        } else if (feedbackPosition === 0) {

            setFeedbackTransition(false);
            setFeedbackPosition(feedbacks.length);
        }
    };
    useEffect(() => {

        const feedbackInterval = setInterval(() => {

            setFeedbackTransition(true);

            setFeedbackPosition((prev) => prev + 1);

            setFeedbackSlide(
                (prev) => (prev + 1) % feedbacks.length
            );

        }, 5000);

        return () => clearInterval(feedbackInterval);

    }, []);
    const handleClose = () => {
        setShowModal(false);
    }
    const handleShow = () => setShowModal(true);

    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital | Multispacility Hospital in Bengaluru </title>
            </Helmet>

            <div className="hospital-hero">

                <div className="banner-carousel-custom">

                    <div
                        className="banner-slide-track"
                        style={{
                            transform: `translateX(-${currentSlide * 50}%)`
                        }}
                    >

                        {/* =====================================================
        SLIDE 1
       ===================================================== */}
                        <div className="banner-slide">

                            {/* HERO IMAGE */}
                            <div className="hero-image-column">
                                <picture>
                                    {/* Mobile image */}
                                    <source
                                        media="(max-width: 768px)"
                                        srcSet="/images/landing/hospital-mobile.png"
                                    />

                                    {/* Desktop image */}
                                    <img
                                        src="/images/landing/hospital.png"
                                        alt="Aarohi Hospital"
                                        className="hospital-hero-image"
                                    />
                                </picture>
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="container">
                                <div className="row align-items-center">

                                    <div className="col-lg-6">
                                        <div className="about-section-item about-item-details">

                                            <div className="section-title section-title-left text-start">

                                                <h2>
                                                    Your wellness,{" "}
                                                    <span className="highlight">
                                                        Our priority.
                                                    </span>
                                                    <br />
                                                    Your path to better health begins here.
                                                </h2>

                                            </div>

                                            <div className="about-content">

                                                <p>
                                                    Where compassionate care meets advanced
                                                    technology.
                                                </p>

                                                {/* <Link
                                                    to="/book-appointment"
                                                    className="btn btn-primary btn-blue"
                                                >
                                                    Book Appointment
                                                </Link> */}

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>


                        {/* =====================================================
        SLIDE 2
       ===================================================== */}
                        <div className="banner-slide">

                            {/* HERO IMAGE */}
                            <div className="hero-image-column">
                                <picture>
                                    <source
                                        media="(max-width: 768px)"
                                        srcSet="/images/landing/emergency-mobile.png"
                                    />

                                    <img
                                        src="/images/landing/emergency-landing.png"
                                        alt="Aarohi Hospital Emergency Care"
                                        className="hospital-hero-image"
                                    />
                                </picture>
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="container">
                                <div className="row align-items-center">

                                    <div className="col-lg-6">
                                        <div className="about-section-item about-item-details">

                                            <div className="section-title section-title-left text-start">

                                                <h2>
                                                    <span className="highlight">
                                                        24 / 7
                                                    </span>{" "}
                                                    Emergency Care
                                                    <br />
                                                    When Every Second Matters
                                                </h2>

                                            </div>

                                            <div className="about-content">

                                                <p>
                                                    Compassionate emergency care supported by
                                                    advanced medical facilities and experienced
                                                    healthcare professionals.
                                                </p>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>


                    {/* Dots */}
                    <div className="banner-dots">
                        <button
                            className={currentSlide === 0 ? "active" : ""}
                            onClick={() => setCurrentSlide(0)}
                            aria-label="Slide 1"
                        />

                        <button
                            className={currentSlide === 1 ? "active" : ""}
                            onClick={() => setCurrentSlide(1)}
                            aria-label="Slide 2"
                        />
                    </div>

                </div>
            </div>


            {/* =========================================================
    AAROHI HOSPITAL - FACILITIES
========================================================= */}

            <section className="hospital-facilities-section">

                <div className="container">

                    {/* =========================
            SECTION HEADER
        ========================= */}

                    <div className="facilities-eyebrow">
                        <span></span>
                        OUR FACILITIES
                        <span></span>
                    </div>

                    <div className="facilities-heading">

                        <h2>
                            Facilities
                        </h2>

                        <p>
                            Modern infrastructure and comprehensive healthcare facilities
                            designed to provide safe, comfortable and quality patient care.
                        </p>

                    </div>

                    <div className="facilities-divider">
                        <span></span>
                        <b></b>
                        <span></span>
                    </div>


                    {/* =========================
            FACILITY CARDS
        ========================= */}

                    <div className="facilities-cards-row">


                        {/* =========================
                CARD 1
            ========================= */}

                        <div className="facility-column">

                            <div
                                className="facility-card"
                                onClick={() => navigate("/modular-ot")}
                                style={{ cursor: "pointer" }}
                            >

                                <div className="facility-image">

                                    <span className="facility-plus plus-one">+</span>

                                    <span className="facility-dot dot-one"></span>
                                    <span className="facility-dot dot-two"></span>

                                    <span className="facility-circle-outline"></span>

                                    <div className="facility-image-circle">

                                        <img
                                            src="images\landing\facilities\modular-operation-theatre.png"
                                            alt="Modular Operation Theatre"
                                        />

                                    </div>

                                </div>


                                <h3>
                                    Modular Operation Theatre
                                </h3>

                                <div className="facility-small-divider"></div>

                                <p>
                                    Advanced operation theatre facilities designed to
                                    support safe, efficient and well-controlled surgical
                                    procedures.
                                </p>

                                <div className="facility-wave"></div>

                            </div>

                        </div>


                        {/* =========================
                CARD 2
            ========================= */}

                        <div className="facility-column">

                            <div
                                className="facility-card"
                                onClick={() => navigate("/physiotherapy")}
                                style={{ cursor: "pointer" }}
                            >

                                <div className="facility-image">

                                    <span className="facility-plus plus-one">+</span>

                                    <span className="facility-dot dot-one"></span>
                                    <span className="facility-dot dot-two"></span>

                                    <span className="facility-circle-outline"></span>

                                    <div className="facility-image-circle">

                                        <img
                                            src="\images\landing\facilities\physiotherapy.png"
                                            alt="Physiotherapy"
                                        />

                                    </div>

                                </div>


                                <h3>
                                    Physiotherapy
                                </h3>

                                <div className="facility-small-divider"></div>

                                <p>
                                    Dedicated physiotherapy and rehabilitation services
                                    supporting recovery, mobility and improved physical
                                    function.
                                </p>

                                <div className="facility-wave"></div>

                            </div>

                        </div>


                        {/* =========================
                CARD 3
            ========================= */}

                        <div className="facility-column">

                            <div
                                className="facility-card"
                                onClick={() => navigate("/pharmacy")}
                                style={{ cursor: "pointer" }}
                            >

                                <div className="facility-image">

                                    <span className="facility-plus plus-one">+</span>

                                    <span className="facility-dot dot-one"></span>
                                    <span className="facility-dot dot-two"></span>

                                    <span className="facility-circle-outline"></span>

                                    <div className="facility-image-circle">

                                        <img
                                            src="\images\landing\facilities\pharmacy.png"
                                            alt="24x7 Pharmacy"
                                        />

                                    </div>

                                </div>


                                <h3>
                                    24×7 Pharmacy
                                </h3>

                                <div className="facility-small-divider"></div>

                                <p>
                                    Convenient access to essential medicines and
                                    pharmaceutical support for patients whenever needed.
                                </p>

                                <div className="facility-wave"></div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= OUR DOCTORS ================= */}

            <section className="landing-doctors">
                <div className="container">

                    <div className="landing-doctors-header">
                        <span className="landing-doctors-label">
                            OUR DOCTORS
                        </span>

                        <h2>
                            Meet Our <span>Medical Experts</span>
                        </h2>

                        <p>
                            Experienced specialists dedicated to providing
                            personalised care across a wide range of medical
                            and surgical specialities.
                        </p>
                    </div>

                    <div className="landing-doctors-slider">

                        {/* PREVIOUS */}
                        <button
                            type="button"
                            className="doctor-arrow doctor-prev"
                            onClick={() =>
                                setDoctorSlide((prev) =>
                                    Math.max(0, prev - 1)
                                )
                            }
                            disabled={doctorSlide === 0}
                            aria-label="Previous doctor"
                        >
                            ‹
                        </button>

                        <div className="doctor-slide-window">

                            <div
                                className="doctor-slide-track"
                                style={{
                                    "--doctor-count": allDoctors.length,
                                    "--doctor-visible-count": doctorVisibleCount,
                                    transform: `translateX(-${doctorSlide *
                                        (100 / allDoctors.length)
                                        }%)`
                                }}
                            >

                                {allDoctors.map((doctor) => (
                                    <div
                                        className="doctor-slide"
                                        key={doctor.name}
                                    >

                                        <article className="landing-doctor-card">

                                            <div className="landing-doctor-content">

                                                <span className="landing-doctor-department">
                                                    {doctor.department}
                                                </span>

                                                <h3>
                                                    {doctor.name}
                                                </h3>

                                                <p className="landing-doctor-role">
                                                    {doctor.role}
                                                </p>

                                                <div className="landing-doctor-qualification">
                                                    {doctor.qualification}
                                                </div>

                                                {doctor.experience && (
                                                    <div className="landing-doctor-experience">
                                                        <i className="mdi mdi-briefcase-outline"></i>
                                                        {doctor.experience}
                                                    </div>
                                                )}

                                            </div>

                                        </article>

                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* NEXT */}
                        <button
                            type="button"
                            className="doctor-arrow doctor-next"
                            onClick={() =>
                                setDoctorSlide((prev) =>
                                    Math.min(
                                        allDoctors.length -
                                        doctorVisibleCount,
                                        prev + 1
                                    )
                                )
                            }
                            disabled={
                                doctorSlide >=
                                allDoctors.length -
                                doctorVisibleCount
                            }
                            aria-label="Next doctor"
                        >
                            ›
                        </button>

                    </div>

                    <div className="landing-doctors-button">
                        <Link
                            to="/doctors"
                            className="view-all-doctors-btn"
                        >
                            View All Doctors <span>→</span>
                        </Link>
                    </div>

                </div>
            </section>

            {/* =========================================================
    OUR SPECIALITIES
========================================================= */}

            <section className="landing-area-care">

                <div className="container">

                    {/* HEADER */}

                    <div className="landing-area-care-header">

                        <span className="landing-area-care-label">
                            OUR SPECIALITIES
                        </span>

                        <h2>
                            Expertise You Can <span>Count On</span>
                        </h2>

                        <p>
                            Experienced medical professionals and specialised
                            healthcare services supporting patients across a wide
                            range of healthcare needs.
                        </p>

                    </div>


                    {/* SLIDER */}

                    {/* =================================================
    SPECIALITIES SLIDER
================================================= */}

                    <div className="landing-area-care-slider">

                        {/* PREVIOUS */}
                        <button
                            type="button"
                            className="area-care-arrow area-care-prev"
                            onClick={() =>
                                setAreaCareSlide((prev) =>
                                    Math.max(0, prev - 1)
                                )
                            }
                            disabled={areaCareSlide === 0}
                            aria-label="Previous speciality"
                        >
                            ‹
                        </button>


                        {/* WINDOW */}
                        <div className="area-care-slide-window">

                            <div
                                className="area-care-slide-track"
                                style={{
                                    "--speciality-count": areaCareDepartments.length,
                                    "--visible-count": areaCareVisibleCount,
                                    transform: `translateX(-${areaCareSlide *
                                        (100 / areaCareDepartments.length)
                                        }%)`
                                }}
                            >

                                {areaCareDepartments.map((department) => (

                                    <div
                                        className="area-care-slide"
                                        key={department.path}
                                    >

                                        <Link
                                            to={department.path}
                                            className="landing-department-card"
                                        >

                                            <div className="landing-department-icon">

                                                <img
                                                    src={department.icon}
                                                    alt={department.name}
                                                />

                                            </div>


                                            <div className="landing-department-content">

                                                <h3>
                                                    {department.name}
                                                </h3>

                                                <span className="landing-department-arrow">
                                                    Explore Department →
                                                </span>

                                            </div>

                                        </Link>

                                    </div>

                                ))}

                            </div>

                        </div>


                        {/* NEXT */}
                        <button
                            type="button"
                            className="area-care-arrow area-care-next"
                            onClick={() =>
                                setAreaCareSlide((prev) =>
                                    Math.min(
                                        areaCareDepartments.length -
                                        areaCareVisibleCount,
                                        prev + 1
                                    )
                                )
                            }
                            disabled={
                                areaCareSlide >=
                                areaCareDepartments.length -
                                areaCareVisibleCount
                            }
                            aria-label="Next speciality"
                        >
                            ›
                        </button>

                    </div>


                    {/* VIEW ALL */}

                    <div className="landing-area-care-button">

                        <Link
                            to="/area-of-care"
                            className="view-all-departments-btn"
                        >
                            View All Departments
                            <span>→</span>
                        </Link>

                    </div>

                </div>

            </section>

            <div className="about-section bg-white pt-5 pb-30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/landing/appointment.png" className="shadow-2xl" alt="shape" />
                            </div>
                        </div>
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h3 className="c-red">Book An Appointment.</h3>
                                </div>
                                <Link to="/appointment" target="_blank" className="btn btn-primary btn-blue">Book Now</Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>



            {/* =========================================================
    FEEDBACK / TESTIMONIALS
========================================================= */}

            <section className="feedback-section">

                <div className="container">

                    {/* HEADER */}

                    <div className="feedback-header">
                        <h2>FEEDBACKS</h2>
                    </div>


                    {/* CAROUSEL */}

                    <div className="feedback-carousel">

                        {/* PREVIOUS */}

                        <button
                            type="button"
                            className="feedback-arrow feedback-prev"
                            onClick={prevFeedback}
                            aria-label="Previous feedback"
                        >
                            ‹
                        </button>


                        {/* VIEWPORT */}

                        <div className="feedback-window">

                            <div
                                className="feedback-track"
                                onTransitionEnd={handleFeedbackTransitionEnd}
                                style={{
                                    "--feedback-position": feedbackPosition,
                                    "--feedback-slide-width":
                                        `${100 / feedbackItems.length}%`,
                                    "--feedback-track-width":
                                        `${(feedbackItems.length / 3) * 100}%`,
                                    "--feedback-mobile-track-width":
                                        `${feedbackItems.length * 100}%`,
                                    transition: feedbackTransition
                                        ? "transform 0.6s ease-in-out"
                                        : "none",
                                    transform:
                                        `translateX(-${(feedbackPosition - 1) *
                                        (100 / feedbackItems.length)
                                        }%)`
                                }}
                            >

                                {feedbackItems.map((feedback, index) => (

                                    <div
                                        className={`feedback-slide ${index === feedbackPosition
                                            ? "active"
                                            : ""
                                            }`}
                                        key={`${feedback.name}-${index}`}
                                    >

                                        <div className="feedback-card">

                                            <h3>
                                                {feedback.name}
                                            </h3>

                                            <span className="feedback-source">
                                                Google Review
                                            </span>

                                            <p>
                                                {feedback.review}
                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>


                        {/* NEXT */}

                        <button
                            type="button"
                            className="feedback-arrow feedback-next"
                            onClick={nextFeedback}
                            aria-label="Next feedback"
                        >
                            ›
                        </button>

                    </div>


                    {/* DOTS */}

                    <div className="feedback-dots">

                        {feedbacks.map((feedback, index) => (

                            <button
                                key={feedback.name}
                                type="button"
                                className={
                                    feedbackSlide === index
                                        ? "active"
                                        : ""
                                }
                                onClick={() => goToFeedback(index)}
                                aria-label={`Go to feedback ${index + 1}`}
                            />

                        ))}

                    </div>

                </div>

            </section>

        </section>
    );
};

export default Landing;
