import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [patientMenuOpen, setPatientMenuOpen] = useState(false);
    const [internationalMenuOpen, setInternationalMenuOpen] = useState(false);
    return (
        <div className="eval-nav">
            <div className="menu-container">

                {/* Top Bar: Logo + Emergency & Appointment */}
                <div className="menu bg-white d-flex align-items-center justify-content-between px-3">

                    {/* Logo */}
                    <Link
                        className="logo"
                        to="/"
                        onClick={() => { window.location.href = "/" }}
                    >
                        <div className="d-flex align-items-center">
                            <img src="images/logo.png" alt="logo" />
                        </div>
                    </Link>

                    {/* Desktop Contact Badges */}
                    <div className="nav-contact d-none d-md-flex align-items-center gap-3">

                        <a
                            href="tel:+919876543210"
                            className="contact-badge emergency-badge"
                        >
                            <i className="mdi mdi-phone"></i>

                            <div>
                                <span>EMERGENCY</span>
                                <strong>+91 98765 43210</strong>
                            </div>
                        </a>
                        <a
                            href="https://wa.me/918888777666"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-badge appointment-badge"
                        >
                            <i className="mdi mdi-calendar-check"></i>

                            <div>
                                <span>BOOK APPOINTMENT</span>
                                <strong>+91 88887 77666</strong>
                            </div>
                        </a>

                    </div>

                    {/* Mobile Buttons */}
                    <div className="mobile-header">

                        {/* Top Row */}
                        <div className="mobile-header-top">

                            <Link
                                className="logo"
                                to="/"
                                onClick={() => { window.location.href = "/" }}
                            >
                                <img src="images/logo.png" alt="logo" />
                            </Link>

                            <button
                                className="mobile-menu-btn"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                ☰
                            </button>

                        </div>

                        {/* Action Buttons */}
                        <div className="mobile-action-buttons">

                            <a href="tel:+919876543210" className="mobile-emergency-btn">
                                <i className="mdi mdi-phone"></i>

                                <div>
                                    EMERGENCY
                                    <span>+91 98765 43210</span>
                                </div>
                            </a>

                            <a href="https://wa.me/918888777666" className="mobile-book-btn">
                                <i className="mdi mdi-calendar-check"></i>

                                <div>
                                    BOOK APPOINTMENT
                                    <span>+91 88887 77666</span>
                                </div>
                            </a>

                        </div>

                        {/* Mobile Navigation Menu */}
                        <div className={`mobile-nav-menu ${mobileMenuOpen ? "show-mobile-menu" : ""}`}>
                            <div className="mobile-menu-content">

                                <ul>

                                    <li>
                                        <Link
                                            to="/about-us"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            ABOUT US
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/area-of-care"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            AREA OF CARE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/doctors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            DOCTORS
                                        </Link>
                                    </li>

                                    {/* <li className="mobile-submenu">

                                        <div
                                            className="mobile-submenu-title"
                                            onClick={() => setPatientMenuOpen(!patientMenuOpen)}
                                        >
                                            PATIENT & VISITORS
                                            <span>{patientMenuOpen ? "−" : "+"}</span>
                                        </div>

                                        {patientMenuOpen && (

                                            <ul className="mobile-submenu-list">

                                                <li>
                                                    <Link
                                                        to="/registration-admission"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setPatientMenuOpen(false);
                                                        }}
                                                    >
                                                        Registration & Admission
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/inpatient-accommodation"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setPatientMenuOpen(false);
                                                        }}
                                                    >
                                                        Inpatient Accommodation
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/billing"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setPatientMenuOpen(false);
                                                        }}
                                                    >
                                                        Billing
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/insurance"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setPatientMenuOpen(false);
                                                        }}
                                                    >
                                                        Insurance
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/patient-rights"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setPatientMenuOpen(false);
                                                        }}
                                                    >
                                                        Patient Rights & Responsibility
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/visiting-hours"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setPatientMenuOpen(false);
                                                        }}
                                                    >
                                                        Visiting Hours & Directions
                                                    </Link>
                                                </li>

                                            </ul>

                                        )}

                                    </li> */}

                                    {/* <li className="mobile-submenu">

                                        <div
                                            className="mobile-submenu-title"
                                            onClick={() => setInternationalMenuOpen(!internationalMenuOpen)}
                                        >
                                            INTERNATIONAL PATIENT
                                            <span>{internationalMenuOpen ? "−" : "+"}</span>
                                        </div>

                                        {internationalMenuOpen && (

                                            <ul className="mobile-submenu-list"> */}

                                    {/* <li>
                                                    <Link
                                                        to="/international-services"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setInternationalMenuOpen(false);
                                                        }}
                                                    >
                                                        International Services
                                                    </Link>
                                                </li> */}

                                    {/* <li>
                                                    <Link
                                                        to="/visa-assistance"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setInternationalMenuOpen(false);
                                                        }}
                                                    >
                                                        Visa Assistance
                                                    </Link>
                                                </li> */}

                                    {/* <li>
                                                    <Link
                                                        to="/travel-support"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setInternationalMenuOpen(false);
                                                        }}
                                                    >
                                                        Travel Support
                                                    </Link>
                                                </li> */}

                                    {/* </ul>

                                        )}

                                    </li> */}

                                    <li>
                                        <Link
                                            to="/appointment"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            BOOK APPOINTMENT
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/contact"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            CONTACT US
                                        </Link>
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </div>
                </div>

                {/* Main Navigation */}
                <div className={`menu bg-logo-blue ${mobileMenuOpen ? "mobile-open" : ""}`}>
                    <ul className="clearfix">

                        <li>
                            <Link to="/about-us" className="nav-link">
                                ABOUT US
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/area-of-care"
                                className="nav-link"
                            >
                                AREA OF CARE
                            </Link>
                        </li>
                        <li><Link to="/doctors">DOCTORS</Link></li>


                        {/* <li>
                            <a className="nav-link dropdown-toggle">
                                PATIENT & VISITERS
                            </a>
                            <ul>
                                <li><Link to="/blog">Registation & Addimission</Link></li>
                                <li><Link to="/thought-paper">Inpatient Accomadation</Link></li>
                                <li><Link to="/case-studies">Billing</Link></li>
                                <li><Link to="/case-studies">Insurance</Link></li>
                                <li><Link to="/case-studies">Patient Rights & Responsibility</Link></li>
                                <li><Link to="/case-studies">Visiting Hours & Directions</Link></li>
                            </ul>
                        </li>

                        <li>
                            <a className="nav-link dropdown-toggle">
                                INTERNATIONAL PATIENT
                            </a>
                            <ul>
                                <li><Link to="/blog">BLOG</Link></li>
                                <li><Link to="/thought-paper">THOUGHT PAPER</Link></li>
                                <li><Link to="/case-studies">CASE STUDIES</Link></li>
                            </ul>
                        </li> */}
                        <li><Link to="/appointment">BOOK APPOINTMENT</Link></li>
                        <li><Link to="/contact">CONTACT US</Link></li>
                    </ul>
                </div>

            </div>
        </div >
    );
};

export default Navbar;
