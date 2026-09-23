import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import axios from "axios";
import { Button, Form, Modal } from "react-bootstrap";



const Landing = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeButton, setactiveButton] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 2);
        }, 5000);

        return () => clearInterval(interval);
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

                                                {/* <Link
                                                    to="/technology"
                                                    target="_blank"
                                                    className="btn btn-primary btn-blue"
                                                >
                                                    View Our Services
                                                </Link> */}

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


            {/* CT / MRI Section */}
            <div className="about-section bg-white pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Content */}
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">

                                <div className="section-title section-title-left text-start">
                                    <h3 className="c-red">
                                        CT / MRI
                                    </h3>
                                </div>

                                <div className="about-content">
                                    <p className="text-black">
                                        When it comes to your health, every detail matters.
                                    </p>

                                    <p className="text-black">
                                        Advanced CT and MRI imaging provides doctors with clear, detailed insights into the body, helping them detect, evaluate, and monitor a wide range of medical conditions. From identifying abnormalities at an early stage to assessing complex conditions and monitoring treatment progress, accurate imaging plays an important role in making informed healthcare decisions.
                                    </p>

                                    <p className="text-black">
                                        At Aarohi Hospital, we combine advanced imaging technology with experienced medical expertise to deliver reliable and precise diagnostic support. Our focus is on providing high-quality imaging in a comfortable and patient-friendly environment, helping doctors plan the most appropriate treatment for every patient.
                                    </p>

                                    <p className="text-black">
                                        Because better imaging leads to better-informed decisions, and better-informed decisions lead to better care.
                                    </p>

                                </div>

                            </div>
                        </div>

                        {/* Image */}
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img
                                    src="images/landing/image-02.jpg"
                                    alt="CT / MRI"
                                    className="shadow-2xl"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="testimonial-section position-relative">
                <div className="container-fluid pt-5 pb-3 bg-off-white">
                    <div className="row">
                        <h1 className="c-red font-weight-bolder pl-80">AREAS OF CARE</h1>
                    </div>
                    <div className="client-carousel default-carousel owl-carousel owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer pt-0">
                            <div className="owl-stage">
                                <div className="owl-item" >
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <Link to="/Impersonation-is-big-business-and-it-can-ruin-yours"
                                                        className="btn">
                                                        <div className="card shadow-2xl border-0">
                                                            {/* <h4 className="color-white mt-3"></h4> */}
                                                            <img className="card-img-top px-5 pt-2"
                                                                src="images/landing/icons/1.png"
                                                                alt="" />
                                                            <div className="card-body">
                                                                <h6 className="card-title">General Medicine & Cardiac Care</h6>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <Link to="/Impersonation-is-big-business-and-it-can-ruin-yours"
                                                        className="btn">
                                                        <div className="card shadow-2xl border-0">
                                                            {/* <h4 className="color-white mt-3">Blog</h4> */}
                                                            <img className="card-img-top px-5 pt-2"
                                                                src="images/landing/icons/2.png"
                                                                alt="" />
                                                            <div className="card-body">
                                                                <h6 className="card-title">Preventive Health Check-ups & Wellness Care</h6>

                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/3.png"
                                                            alt="Blog" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Emergency & Critical Care</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/4.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Diagnostics & Imaging Services</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/5.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">General & Laparoscopic Surgery</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/6.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Neonatology & Newborn Care</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/7.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Paediatrics</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/8.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Neurosurgery</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/9.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Dermatology</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/10.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Anaesthesiology</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/11.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">ENT (Ear, Nose & Throat)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/12.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Pain Management</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/13.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Neurology</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/14.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Nephrology & Dialysis</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/15.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Urology</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/16.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Medical Gastroenterology</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/17.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Surgical Gastroenterology</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/18.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Paediatric Surgery</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/19.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Medical Oncology</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/20.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Surgical Oncology</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/21.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Vascular Surgery</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/22.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Pulmonology (Chest Medicine)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/23.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">OMFS (Oral & Maxillofacial Surgery)</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/24.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Cosmetology & Aesthetic Medicine</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/25.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Cardiology</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <img className="card-img-top px-5 pt-2"
                                                            src="images/landing/icons/26.png"
                                                            alt="" />
                                                        <div className="card-body">
                                                            <h6 className="card-title">Plastic & Reconstructive Surgery</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="about-section bg-white pt-5 pb-30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-center">
                                <img src="images/landing/image-7.jpg" className="shadow-2xl" alt="shape" />
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

            {/* <div className="testimonial-section position-relative">
                <div className="container-fluid py-5 bg-white">
                    <div className="row">
                        <h1 className="c-blue font-weight-bolder pl-80">Client list</h1>
                    </div>

                    <div className="row">
                        <div className="container p-0">
                            <div className="row m-0">
                                <div className="col-md-12 d-md-flex justify-content-md-center">
                                    <div className="col-md-2 d-flex align-items-center justify-content-center border shadow-sm m-1 mb-2 p-2">
                                        <img src="images/landing/clients/amazon.png" className="img-fluid" />
                                    </div>
                                    <div className="col-md-2 d-flex align-items-center justify-content-center border shadow-sm m-1 mb-2 p-2">
                                        <img src="images/landing/clients/conduent.png" className="img-fluid" />
                                    </div>
                                    <div className="col-md-2 d-flex align-items-center justify-content-center border shadow-sm m-1 mb-2 p-2">
                                        <img src="images/landing/clients/icici.png" className="img-fluid" />
                                    </div>
                                    <div className="col-md-2 d-flex align-items-center justify-content-center border shadow-sm m-1 mb-2 p-2">
                                        <img src="images/landing/clients/hdfclife.png" className="img-fluid" />
                                    </div>
                                    <div className="col-md-2 d-flex align-items-center justify-content-center border shadow-sm m-1 mb-2 p-2">
                                        <img src="images/landing/clients/infosys.png" className="img-fluid" />
                                    </div>
                                    <div className="col-md-2 d-flex align-items-center justify-content-center border shadow-sm m-1 mb-2 p-2">
                                        <img src="images/landing/clients/logo-without_punch_line.png" className="img-fluid" />
                                    </div>
                                </div>

                                <div className="col-md-12 d-md-flex justify-content-md-center">
                                    <div className="col-md-2 d-flex align-items-center justify-content-center border shadow-sm m-1 mb-2 p-2">
                                        <img src="images/landing/clients/outsource.jpg" className="img-fluid" />
                                    </div>
                                    <div className="col-md-2 d-flex align-items-center justify-content-center border shadow-sm m-1 mb-2 p-2">
                                        <img src="images/landing/clients/quess.png" className="img-fluid" />
                                    </div>
                                    <div className="col-md-2 d-flex align-items-center justify-content-center border shadow-sm m-1 mb-2 p-2">
                                        <img src="images/landing/clients/sbilife.png" className="img-fluid" />
                                    </div>
                                    <div className="col-md-2 d-flex align-items-center justify-content-center border shadow-sm m-1 mb-2 p-2">
                                        <img src="images/landing/clients/tatamotors.png" className="img-fluid" />
                                    </div>
                                    <div className="col-md-2 d-flex align-items-center justify-content-center border shadow-sm m-1 mb-2 p-2">
                                        <img src="images/landing/clients/xoriant.png" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="testimonial-section position-relative">
                <div className="container-fluid pt-5 pb-3 bg-off-white">
                    <div className="row">
                        <h1 className="c-blue font-weight-bolder pl-80">FEEDBACKS</h1>
                    </div>
                    <div className="blog-carousel default-carousel owl-carousel owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer pt-0">
                            <div className="owl-stage">
                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Ushashree K</h5>
                                                            <i className="card-title">Google Review</i>
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="card-title">My experience at the hospital was truly reassuring. The doctors were kind, patient, and took the time to explain everything in a calm and caring manner. The nursing and support staff were attentive and compassionate, always ready to help. The hospital was clean, comfortable, and well organised, which added to the sense of ease during the visit. I am very grateful for the care and support provided throughout.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Rishit Jain</h5>
                                                            <i className="card-title">Google Review</i>
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="card-title">My friend was admitted in aarohi hospital and the desk staff and the doctors were very friendly and the service was amazing.</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Rajesh Krishna</h5>
                                                            <i className="card-title">Google Review</i>
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="card-title">Right from the registration and casualty till the discharge treatment was amazing, right from housekeeping staff was very approachable.</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Prity Das</h5>
                                                            <i className="card-title">Google Review</i>
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="card-title">Admitted in aarohi hospital for surgery and it went well. Doctors and nurses are very professional, kind and caring. I had a very satisfactory experience at aarohi hosptal. All the supportive staffs are courteous and helpful at every stage of my admission. I truly appreciate and highly recommend to others to quality care and overall services.</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="owl-item">
                                    <div className="item">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="blog">
                                                    <div className="card shadow-2xl border-0">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Renuka Raju</h5>
                                                            <i className="card-title">Google Review</i>
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="card-title">Good hospital in the location, doctors and staff are very kind and good. Hospital is very clean and hygienic. Highly recommended</p>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default Landing;
