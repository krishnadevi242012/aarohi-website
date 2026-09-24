import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="aarohi-footer">

            {/* =================================================
                FOOTER MAIN
            ================================================= */}

            <div className="footer-main">

                <div className="container">

                    <div className="footer-grid">

                        {/* =================================================
                            LOGO / ABOUT
                        ================================================= */}

                        <div className="footer-column footer-brand">

                            <Link
                                to="/"
                                className="footer-logo-link"
                            >
                                <img
                                    src="images/logo.png"
                                    alt="Aarohi Hospital"
                                    className="footer-logo"
                                />
                            </Link>

                            <p className="footer-tagline">
                                For better health...
                            </p>

                            <p className="footer-brand-text">
                                Quality healthcare with compassionate care,
                                experienced doctors and modern medical
                                facilities.
                            </p>

                        </div>


                        {/* =================================================
                            QUICK LINKS
                        ================================================= */}

                        <div className="footer-column footer-links-column">

                            <div className="footer-heading">
                                <span></span>
                                <h3>QUICK LINKS</h3>
                            </div>

                            <div className="footer-links">

                                <Link to="/area-of-care">
                                    <i className="mdi mdi-chevron-right"></i>
                                    Area of Care
                                </Link>

                                <Link to="/doctors">
                                    <i className="mdi mdi-chevron-right"></i>
                                    Doctors
                                </Link>

                                <Link to="/about-us">
                                    <i className="mdi mdi-chevron-right"></i>
                                    About Us
                                </Link>

                                <Link to="/contact">
                                    <i className="mdi mdi-chevron-right"></i>
                                    Contact
                                </Link>

                            </div>

                        </div>


                        {/* =================================================
                            ADDRESS
                        ================================================= */}

                        <div className="footer-column footer-address-column">

                            <div className="footer-heading">
                                <span></span>
                                <h3>ADDRESS</h3>
                            </div>

                            <div className="footer-address-box">

                                <div className="footer-address-icon">
                                    <i className="mdi mdi-map-marker"></i>
                                </div>

                                <p>
                                    Site no, 81/2, Uttarahalli Main Rd,
                                    near Kodipalya, Kengeri, Bengaluru,
                                    Karnataka 560060
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* =================================================
                COPYRIGHT
            ================================================= */}

            <div className="footer-bottom">

                <div className="container">

                    <div className="footer-bottom-content">

                        <p>
                            © {new Date().getFullYear()} Aarohi Hospital.
                            All Rights Reserved.
                        </p>

                        <span>
                            Quality Care • Compassion • Excellence
                        </span>

                    </div>

                </div>

            </div>


            {/* =================================================
                SCROLL TO TOP
            ================================================= */}

            <div
                className="scroll-top scrolltopactive"
                id="scrolltop"
            >
                <div className="scroll-top-inner">
                    <i className="mdi mdi-arrow-up"></i>
                </div>
            </div>

        </footer>
    );
};

export default Footer;