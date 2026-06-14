import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Landing = () => {
    const navigate = useNavigate();
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Banking and Fintech</title>
                {(window.location.pathname === '/bfsi') &&
                    <script src="//evaluationz.mykampaign.com/focus/9.js" type="text/javascript" charset="utf-8"
                            async="async"></script>
                }
                <meta name="description" content="See how Evaluationz brings security to banking and fintech through verification" />
                <meta name="keywords" content="address verification, criminal verification, drug panel testing, employment verification, education verification, employee verification, user verification, vendor verification, Identity check, Social Media Check, Reference check, Drug test, Digital verification, passport verification, credit check, API Integration, Reduced TAT, Real time verification, verification Specialist, NASCOM empanelled, credit score check, Evaluationz, Evaluationz India Pvt. Ltd., Verification India, AI, Artificial Intelligence, BlueG, Coporate verification, IT Verification, Ites Verification, Banking and Financial Services Industry Verification, Automative verification, eCommerce verification, healthcare verification, rental verificaion, matrimonial verification, hyperlocal verification, blue collar verification, white collar verification"/>
                <meta property="og:description" content="See how Evaluationz brings security to banking and fintech through verification" />
                <meta property="og:url" content="https://www.evaluationz.com/bfsi" />
                <meta property="og:image" content="https://www.evaluationz.com/images/favicon.jpg" />
                <meta property="og:image:secure_url" content="https://www.evaluationz.com/images/favicon.jpg" />
                <meta name="twitter:image" content="https://www.evaluationz.com/images/favicon.jpg" />
            </Helmet>

            <div className="about-section bg-black py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-md-left text-center">
                                <img src="images/industries/banking/image-1.jpg"
                                     alt="shape"
                                     className="red-image-left shadow-2xl"/>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-red font-weight-bolder">e-KYC/video KYC<br></br>Instant financial solutions and user onboarding require instant checks</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h3 className="c-blue font-weight-bold">
                                        Banking, Fintech, Chit Funds, Gold Loans and Microloans
                                    </h3>
                                    <p className="text-black">
                                        Banking and fintech platforms including microloans, gold loans and chit funds nowadays offer instant signups, loans,
                                        and account opening. This requires instant and hassle-free user e-KYC/video KYC.
                                        The verifications will also need to be conducted at regular intervals to ensure user
                                        data is up to date. API integration with the organization’s software can ensure that e-KYC/video KYC
                                        verification checks are triggered instantly and results gathered in real-time. e-KYC/video KYC processes can also be used by microlenders,
                                        chit funds and gold loan providers for instant verification.</p>
                                    <h3 className="c-blue font-weight-bold">Life Insurance/Pension</h3>
                                    <h3 className="c-blue font-weight-bold">The assurance against fraud</h3>
                                    <p className="text-black">
                                        Life insurance and pension schemes are preferred investment destinations for many people.
                                        These are also areas with a very high potential for fraud. Many schemes have preferential
                                        incentives for certain segments – e.g., senior citizens.</p>
                                    <p className="text-black">Instant e-KYC/video KYC helps faster turnaround times with life insurance and reduces the chance of fraud by
                                        providing instantaneous liveliness checks. Identity and address verifications ensure that investments
                                        are made by genuine customers and pay outs go to genuine beneficiaries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="c-blue font-weight-bold">
                        Recommended Verifications
                    </h3>
                    <div className="row align-items-center mt-4">
                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/banking/icon-1.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Digital Identity Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/banking/icon-2.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Digital Address Verification
                            </span>
                        </div>

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/banking/icon-3.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                               Employment Verification
                            </span>
                        </div>

                        {/* <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/banking/icon-4.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Education Verification
                            </span>
                        </div> */}

                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/banking/icon-5.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                               Criminal Record Check
                            </span>
                        </div>
                        <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/banking/icon-7.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Court Record Verification
                            </span>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4">
                        {/* <div className="col-md-2 d-flex align-items-center justify-content-start">
                            <img src="images/industries/banking/icon-6.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Reference Check
                            </span>
                        </div> */}

                    </div>
                </div>
            </div>

            <div className="about-section bg-black py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2 className="c-red">The Evaluationz Edge</h2>
                                </div>
                                <div className="about-content">
                                    <p className="text-white">Our comprehensive verifications process builds on Evaluationz’ proprietary BlueG platform that uses artificial intelligence, and
                                        componentized government identity documents and databases.</p>

                                    <p className="text-white">
                                        Evaluationz verifications is made incredibly convenient and quick with seamless API integration with existing ATS and HRIS
                                        systems. The HR department gets easy interactions that feel like the native application that they are used to while the process
                                        is intuitive and transparent for the potential candidate.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4">
                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/banking/icon-8.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Seamless API Integration
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/banking/icon-9.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                               Intuitive And Hassle-free Process
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/banking/icon-10.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Multiple Payment Options
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/banking/icon-11.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Automatically Trigger Initial And Repeat Verifications
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 py-2 cursor-pointer"
                             onClick={() => navigate(`/Shut-the-door-on-fraud-with-eKYC`)}>
                            {/*onClick={() => history.push(`/Shut-the-door-on-fraud-with-eKYC`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-11/blog-11.png" alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Shut the door on fraud with e-KYC/video KYC</h4>
                                    <p className="mb-0">Human ingenuity works in many ways. Throughout history, there have been instances of this ingenuity being used for good, or for nefarious purposes. This holds true even in this digital age. Governments and companies have to be constantly alert to stay a step ahead of unscrupulous individuals who are out to defraud the system, or other individuals.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2 cursor-pointer" onClick={() => navigate(`/preventing-insurance-pension-fraud`)}>
                            {/*onClick={() => history.push(`/preventing-insurance-pension-fraud`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-10/blog-10.png" alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Preventing insurance and pension fraud</h4>
                                    <p className="mb-0">Just search for ‘life insurance fraud’ or ‘pension fraud’ and the numbers will surprise you. Life insurance fraud can involve people taking policies in the name of strangers and raising claims, faking deaths and claiming the insured amount, or even claims from fake beneficiaries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-2 cursor-pointer" onClick={() => navigate(`/blog2`)}>
                            {/*onClick={() => history.push(`/blog2`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-2/banner-1.jpg" alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Hassle-free verification and fraud protection for the fintech industry</h4>
                                    <p className="mb-0">Recently, social media was abuzz with users discovering that there were loans taken out in their name - loans that they had no idea about. While some of them found out from  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/technology"
                                  target="_blank"
                                  className="btn btn-primary btn-white shadow-lg">
                                For more details on the BlueG platform and API integration, go here
                            </Link>
                        </div>

                        <div className="col-12 mt-4">
                            <Link to="/services"
                                  target="_blank"
                                  className="btn btn-primary btn-white shadow-lg">
                                For more information on our Services, go here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
