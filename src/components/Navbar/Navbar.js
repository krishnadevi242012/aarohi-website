import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [areaMenuOpen, setAreaMenuOpen] = useState(false);
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

                        {/* Emergency */}
                        <a
                            href="tel:+919876543210"
                            className="contact-badge emergency-badge"
                        >
                            Emergency
                            <div className="fw-bold">+91 98765 43210</div>
                        </a>

                        {/* Book Appointment */}
                        <a
                            href="https://wa.me/918888777666"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-badge appointment-badge"
                        >
                            Book Appointment
                            <div className="fw-bold">+91 88887 77666</div>
                        </a>

                    </div>

                    {/* Mobile Buttons */}
                    <div className="mobile-header d-md-none">

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

                            <a
                                href="tel:+919876543210"
                                className="mobile-emergency-btn"
                            >
                                EMERGENCY
                                <span>+91 98765 43210</span>
                            </a>

                            <a
                                href="https://wa.me/918888777666"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mobile-book-btn"
                            >
                                BOOK APPOINTMENT
                                <span>+91 88887 77666</span>
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

                                    <li className="mobile-submenu">

                                        <div
                                            className="mobile-submenu-title"
                                            onClick={() => setAreaMenuOpen(!areaMenuOpen)}
                                        >
                                            AREA OF CARE
                                            <span>{areaMenuOpen ? "−" : "+"}</span>
                                        </div>

                                        {areaMenuOpen && (

                                            <ul className="mobile-submenu-list">

                                                <li>
                                                    <Link
                                                        to="/general-medicine-cardiac-care"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                        General Medicine & Cardiac Care
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/orthopedics"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                        Orthopedics
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/preventive-health-check-ups"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                        Preventive Health Check-ups
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/emergancy-critical-care"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                        Emergency & Critical Care
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/obstetrics-gynaecology"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                        Obstetrics & Gynaecology
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/diagnostics-imaging-services"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                        Diagnostics & Imaging Services
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/general-laparoscopic-surgery"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                        General & Laparoscopic Surgery
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/neonatology-newborn-care"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                        Neonatology & Newborn Care
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/paediatrics"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                        Paediatrics
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/neurosurgery"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                        Neurosurgery
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/dermatology"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                        Dermatology
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/anaesthesiology"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                        Anaesthesiology
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/ent"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                        ENT (Ear, Nose & Throat)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/pain"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                        Pain Management
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/neurology"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                        Neurology
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/nephrology"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                        Nephrology & Dialysis
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/urology"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                       Urology
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/medical-gastroenterology"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                       Medical Gastroenterology
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/surgical-gastroenterology"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                       Surgical Gastroenterology
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/paediatric-surgery"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                       Paediatric Surgery
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/medical-oncology"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                       Medical Oncology
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/surgical-oncology"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                       Surgical Oncology
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/vascular-surgery"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                       Vascular Surgery
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/pulmonology"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                       Pulmonology
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/omfs"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                       OMFS (Oral & Maxillofacial Surgery)
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/cosmetology"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                       Cosmetology & Aesthetic Medicine
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/cardiology"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                       Cardiology
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="/plastic-surgery"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                       Plastic & Reconstructive Surgery
                                                    </Link>
                                                </li>
                                                 <li>
                                                    <Link
                                                        to="/gynaecology"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setAreaMenuOpen(false);
                                                        }}
                                                    >
                                                       Gynaecology
                                                    </Link>
                                                </li>

                                            </ul>

                                        )}

                                    </li>
                                    <li>
                                        <Link
                                            to="/technology"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            DOCTORS
                                        </Link>
                                    </li>

                                    <li className="mobile-submenu">

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

                                    </li>

                                    <li className="mobile-submenu">

                                        <div
                                            className="mobile-submenu-title"
                                            onClick={() => setInternationalMenuOpen(!internationalMenuOpen)}
                                        >
                                            INTERNATIONAL PATIENT
                                            <span>{internationalMenuOpen ? "−" : "+"}</span>
                                        </div>

                                        {internationalMenuOpen && (

                                            <ul className="mobile-submenu-list">

                                                <li>
                                                    <Link
                                                        to="/international-services"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setInternationalMenuOpen(false);
                                                        }}
                                                    >
                                                        International Services
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/visa-assistance"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setInternationalMenuOpen(false);
                                                        }}
                                                    >
                                                        Visa Assistance
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/travel-support"
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                            setInternationalMenuOpen(false);
                                                        }}
                                                    >
                                                        Travel Support
                                                    </Link>
                                                </li>

                                            </ul>

                                        )}

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

                        <li className="area-of-care">
                            <a className="nav-link dropdown-toggle">
                                AREA OF CARE
                            </a>
                            <ul>
                                <li><Link to="/general-medicine-cardiac-care">General Medicine & Cardiac Care</Link></li>
                                <li><Link to="/orthopedics">Orthopedics</Link></li>
                                <li><Link to="/preventive-health-check-ups">Preventive Health Check-ups & Wellness Care</Link></li>
                                <li><Link to="/emergancy-critical-care">Emergency & Critical Care</Link></li>
                                <li><Link to="/obstetrics-gynaecology">Obstetrics & Gynaecology</Link></li>
                                <li><Link to="/diagnostics-imaging-services">Diagnostics & Imaging Services</Link></li>
                                <li><Link to="/general-laparoscopic-surgery">General & Laparoscopic Surgery</Link></li>
                                <li><Link to="/neonatology-newborn-care">Neonatology & Newborn Care</Link></li>
                                <li><Link to="/paediatrics">Paediatrics</Link></li>
                                <li><Link to="/neurosurgery">Neurosurgery</Link></li>
                                <li><Link to="/dermatology">Dermatology</Link></li>
                                <li><Link to="/anaesthesiology">Anaesthesiology</Link></li>
                                <li><Link to="/ent">ENT (Ear, Nose & Throat)</Link></li>
                                <li><Link to="/pain">Pain Management</Link></li>
                                <li><Link to="/neurology">Neurology</Link></li>
                                <li><Link to="/nephrology">Nephrology & Dialysis</Link></li>
                                <li><Link to="/urology">Urology</Link></li>
                                <li><Link to="/medical-gastroenterology">Medical Gastroenterology</Link></li>
                                <li><Link to="/surgical-gastroenterology">Surgical Gastroenterology</Link></li>
                                <li><Link to="/paediatric-surgery">Paediatric Surgery</Link></li>
                                <li><Link to="/medical-oncology">Medical Oncology</Link></li>
                                <li><Link to="/surgical-oncology">Surgical Oncology</Link></li>
                                <li><Link to="/vascular-surgery">Vascular Surgery</Link></li>
                                <li><Link to="/pulmonology">Pulmonology (Chest Medicine)</Link></li>
                                <li><Link to="/omfs">OMFS (Oral & Maxillofacial Surgery)</Link></li>
                                <li><Link to="/cosmetology">Cosmetology & Aesthetic Medicine</Link></li>
                                <li><Link to="/cardiology">Cardiology</Link></li>
                                <li><Link to="/plastic-surgery">Plastic & Reconstructive Surgery</Link></li>
                                <li><Link to="/gynaecology">Gynaecology</Link></li>

                            </ul>
                        </li>

                        <li><Link to="/technology">DOCTORS</Link></li>


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
                        </li> */}

                        {/* <li>
                            <a className="nav-link dropdown-toggle">
                                INTERNATIONAL PATIENT
                            </a>
                            <ul>
                                <li><Link to="/blog">BLOG</Link></li>
                                <li><Link to="/thought-paper">THOUGHT PAPER</Link></li>
                                <li><Link to="/case-studies">CASE STUDIES</Link></li>
                            </ul>
                        </li> */}
                        <li><Link to="/contact">CONTACT US</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
