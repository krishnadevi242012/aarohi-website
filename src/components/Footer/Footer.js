import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white footer">
            <div className="footer-upper pt-4 pb-2 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 border-right">
                            <div className="footer-content-item">
                                <div className="footer-logo">
                                    <Link to="/" onClick={() => {window.location.href="/"}}>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <img src="images/logo.png" alt="logo" className="logo logo-image"/>
                                        </div>
                                    </Link>
                                </div>
                                <div className="footer-details">
                                    <p className="text-black">
                                        FOLLOW US ON
                                    </p>
                                    <ul className="social-list social-list-btn">
                                        {/*<li>
                                            <Link to={{pathname: "https://www.twitter.com/"}} target="_blank" name="facebook"><i className="mdi mdi-twitter"></i></Link>
                                        </li>*/}
                                        {/* <li>
                                            <Link to={{pathname: "https://www.linkedin.com/company/evaluationz-india-pvt-ltd", search:"?viewAsMember=true"}} target="_blank" name="linkedin"><i className="mdi mdi-linkedin"></i></Link>
                                        </li> */}
                                        <li>
                                            <Link to={{pathname: "https://www.facebook.com/Evaluationz-212093105791989"}} target="_blank" name="facebook"><i className="mdi mdi-facebook"></i></Link>
                                        </li>
                                        <li>
                                            <Link to={{pathname: "https://www.facebook.com/Evaluationz-212093105791989"}} target="_blank" name="instagram"><i className="mdi mdi-instagram"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 border-right">
                            <div className="footer-content-list footer-content-item desk-pad-left-70">
                                <div className="footer-content-title">
                                    <h3>QUICK LINKS</h3>
                                </div>
                                <ul className="footer-details footer-list">
                                    <li>
                                        <div className="row">
                                            <div className="col">
                                                <Link to="/services" className="no-wrap text-uppercase">Area of Care</Link>
                                            </div>
                                            <div className="col">
                                                <Link to="/case-studies" className="no-wrap text-uppercase">Doctors</Link>
                                            </div>
                                            <div className="col">
                                                <Link to="/technology" className="no-wrap text-uppercase">Patients & Vistiers</Link>
                                            </div>
                                            <div className="col">
                                                <Link to="/blog" className="no-wrap text-uppercase">International Patients</Link>
                                            </div>
        
                                            <div className="col">
                                                <Link to="/about-us" className="no-wrap text-uppercase">ABOUT</Link>
                                            </div>
                                           
                                            <div className="col">
                                                <Link to="/contact" className="no-wrap text-uppercase">CONTACT</Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-content-list footer-content-item desk-pad-left-70">
                                <div className="footer-content-title">
                                    <h3>ADDRESS</h3>
                                </div>
                                <div className="footer-details footer-address">
                                    <div className="footer-address-item">
                                        <div className="footer-address-text">
                                            <p>Site no, 81/2, Uttarahalli Main Rd, near Kodipalya, Kengeri, Bengaluru, Karnataka 560060</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container text-center">
                    <p className="mb-0">
                    © {new Date().getFullYear()} Aarohi Hospital. All Rights Reserved.
                    </p>
                </div>
                </div>
            </div>

            <div className="scroll-top scrolltopactive" id="scrolltop">
                <div className="scroll-top-inner">
                    <i className="mdi mdi-arrow-up"></i>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
