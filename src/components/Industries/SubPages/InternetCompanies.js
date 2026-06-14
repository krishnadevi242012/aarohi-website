import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from "react-read-more-less";
import {Collapse} from "react-bootstrap";

const Landing = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const navigate = useNavigate();
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Internet Companies</title>
                {(window.location.pathname === '/internetcompanies') &&
                    <script src="//evaluationz.mykampaign.com/focus/11.js" type="text/javascript" charset="utf-8"
                            async="async"></script>
                }
                <meta name="description" content="See how Evaluationz brings security to eCommerce through verification" />
                <meta name="keywords" content="address verification, criminal verification, drug panel testing, employment verification, education verification, employee verification, user verification, vendor verification, Identity check, Social Media Check, Reference check, Drug test, Digital verification, passport verification, credit check, API Integration, Reduced TAT, Real time verification, verification Specialist, NASCOM empanelled, credit score check, Evaluationz, Evaluationz India Pvt. Ltd., Verification India, AI, Artificial Intelligence, BlueG, Coporate verification, IT Verification, Ites Verification, Banking and Financial Services Industry Verification, Automative verification, eCommerce verification, healthcare verification, rental verificaion, matrimonial verification, hyperlocal verification, blue collar verification, white collar verification"/>
                <meta property="og:description" content="See how Evaluationz brings security to eCommerce through verification" />
                <meta property="og:url" content="https://www.evaluationz.com/ecommerce" />
                <meta property="og:image" content="https://www.evaluationz.com/images/favicon.jpg" />
                <meta property="og:image:secure_url" content="https://www.evaluationz.com/images/favicon.jpg" />
                <meta name="twitter:image" content="https://www.evaluationz.com/images/favicon.jpg" />
            </Helmet>

            <div className="about-section bg-black py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-md-left text-center">
                                <img src="images/industries/internet/image-1.jpg"
                                     alt="shape"
                                     className="red-image-left shadow-2xl"/>
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-red font-weight-bolder">Verify to build trust and minimize risks in your digital business</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white py-5">
                <div className="container collapse-main-cover">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <p className="text-black">Internet-based businesses value verified users.
                                        Whether it is edtech, hyperlocal delivery, ride hailing services, dating,
                                        matrimonial, gaming or rental platforms, ensuring that users and partners
                                        are verified makes it a safer, more fulfilling experience for everyone. </p>
                                    <p className="text-black">However, many platforms have been reluctant to implement user
                                        verification because the signing up process gets extended, and it can discourage users. </p>
                                    <p className="text-black">Not anymore. </p>
                                    <p className="text-black">Evaluationz enables real-time digital verification that is hassle-free
                                        for users and seamless for the businesses. </p>
                                    <p className="text-black">Our comprehensive process builds on Evaluationz’ proprietary
                                        BlueG platform that uses artificial intelligence, and componentized government identity
                                        documents and databases. </p>
                                    <p className="text-black">Evaluationz’ real-time digital verification can be used across a
                                        variety of online platforms and businesses. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h4 className="text-black mt-4">
                        Ride Hailing Services & Hyperlocal Delivery
                    </h4>

                    <h6 onClick={() => setOpen(!open)}
                        aria-controls="collapse-text1"
                        aria-expanded={open} className="text-secondary cursor-pointer border-bottom pb-1">
                        Screening when every individual is a customer touchpoint
                    </h6>
                    <Collapse in={open}>
                        <div id="collapse-text1">
                            <p className="">As the gig and partnership economies become more popular, it is the third-party vendor or associate
                                who is the one interacting with end customers on a day-to-day basis. Therefore, the verification of
                                drivers, delivery partners and other staff is crucial. From background screening to employment and
                                qualification records to criminal records, all form part of the exhaustive verification process from
                                Evaluationz.</p>
                            <h5 className="text-black">
                                Recommended Verifications
                            </h5>

                            <div className="row align-items-center mt-4">
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-1.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Digital Identity Verification
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-2.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Digital or Physical Address Verification
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-13.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Driving Licence Verification
                                    </span>
                                </div>
                            </div>
                            <div className="row align-items-center mt-4 mb-4">
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-11.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Criminal Record Check
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-12.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Court Record Verification
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-14.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Drug Tests
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Collapse>

                    <h4 className="text-black mt-4">
                        Edtech
                    </h4>
                    <h6 onClick={() => setOpen1(!open1)}
                        aria-controls="collapse-text2"
                        aria-expanded={open1} className="text-secondary cursor-pointer border-bottom pb-1">
                        Ensuring that educational credentials make the grade
                    </h6>
                    <Collapse in={open1}>
                        <div id="collapse-text2">
                            <p className="">The boom in online education, and the consequent demand for tutors, has brought with it the problem of identity verification –
                                from enrolment and onboarding</p>
                            <p>The future of every student lies in the hands of the tutor. Therefore, verification of the credentitla and background
                                of the tutor is essential for a Edtech. In the current scenario, with hiring and onboarding being done on an unprecedented scale,
                                digital verification can ensure that the hurry to onboard need not compromise the accuracy of information. Digital verification for
                                teachers can include identity, educational qualifications, reference checks, among others. </p>
                            <p>Granular digital verification can also help in filtering by linguistic capabilities to meet demands native to the demography or region. </p>

                            <h5 className="text-black">
                                Recommended Verifications
                            </h5>

                            <div className="row align-items-center mt-4">
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-1.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Digital Identity Verification
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-2.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Digital or Physical Address Verification
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-15.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Employment Verification
                                    </span>
                                </div>
                            </div>
                            <div className="row align-items-center mt-4 mb-4">
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-4.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Education Verification
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-5.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Criminal Record Check
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Collapse>

                    <h4 className="text-black mt-4">
                        Gaming
                    </h4>
                    <h6 onClick={() => setOpen2(!open2)}
                        aria-controls="collapse-text3"
                        aria-expanded={open2} className="text-secondary cursor-pointer border-bottom pb-1">
                        The stakes are high when you game for money
                    </h6>
                    <Collapse in={open2}>
                        <div id="collapse-text3">
                            <p className="">The online gaming industry has moved from being a niche segment to a mainstream industry with millions of dollars at stake.
                                Therefore, it entails financial pay outs and the attendant risks. In the Indian context, this means adherence to stringent KYC norms.
                                How else can gaming sites ensure that the pay outs are being made to the right person? Also, financial transactions have tax implications,
                                and therefore, more reason for authentication and monitoring of users.</p>
                            <p>Gaming platforms are also social sites, with players (including minors) interacting with one another.
                                Identity verification helps keep the gaming space secure for users.
                            </p>

                            <h5 className="text-black">
                                Recommended Verifications
                            </h5>

                            <div className="row align-items-center mt-4 mb-4">
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-1.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Digital Identity Verification
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-2.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Digital Address Verification
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Collapse>

                    <h4 className="text-black mt-4">
                        Online Rental Platforms
                    </h4>
                    <h6 onClick={() => setOpen3(!open3)}
                        aria-controls="collapse-text4"
                        aria-expanded={open3} className="text-secondary cursor-pointer border-bottom pb-1">
                        Opening up your home to strangers with trust
                    </h6>
                    <Collapse in={open3}>
                        <div id="collapse-text4">
                            <p className="">Increasing migration for employment and rapid urbanization points to high potential for rental accommodation, mainly in cities.
                                While the demand is rising, homeowners are naturally looking to protect their precious asset by ensuring that they rent their
                                properties to trustworthy tenants. Ability to pay, potential for criminal activity within the premises, and authenticity of tenants
                                are some of the fears that can be addressed by Evaluationz’ verifications. And these verifications can be done digitally and on a
                                continuous basis to ensure records are up to date.</p>

                            <h5 className="text-black">
                                Recommended Verifications
                            </h5>

                            <div className="row align-items-center mt-4">
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-1.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Digital Identity Verification
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-2.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Digital Address Verification
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-5.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Criminal Verification
                                    </span>
                                </div>
                            </div>
                            <div className="row align-items-center mt-4 mb-4">
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-17.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Credit Verification
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Collapse>

                    <h4 className="text-black mt-4">
                        Matrimonial Sites
                    </h4>
                    <h6 onClick={() => setOpen4(!open4)}
                        aria-controls="collapse-text5"
                        aria-expanded={open4} className="text-secondary cursor-pointer border-bottom pb-1">
                        It starts with a commitment to authentic information
                    </h6>
                    <Collapse in={open4}>
                        <div id="collapse-text5">
                            <p className="">Thorough pre-matrimonial verification can prevent costly mistakes - financial, emotional, and reputational. Marriages are about deep bonds
                                and the intertwining of more people than just dating. When people are going to make a lifetime decision, a commitment to truth becomes the
                                bedrock of that step. With Evaluationz’ matrimonial verification, users can decide the depth to which they want to screen potential candidates
                                to bring the transparency that is necessary for a relationship, even though love may be blind. </p>

                            <h5 className="text-black">
                                Recommended Verifications
                            </h5>

                            <div className="row align-items-center mt-4">
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-1.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Digital Identity Verification
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-2.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Digital Address Verification
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-16.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Education Verification
                                    </span>
                                </div>
                            </div>
                            <div className="row align-items-center mt-4 mb-4">
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-11.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Criminal Verification
                                    </span>
                                </div>
                            </div>
                            <p>Evaluationz offers API integration for matrimonial apps to verify that users are who they claim to be, and that their information is
                                correct. API integration with existing systems makes it seamless, convenient, and agile. </p>
                        </div>
                    </Collapse>

                    <h4 className="text-black mt-4">
                        Dating Sites
                    </h4>
                    <h6 onClick={() => setOpen5(!open5)}
                        aria-controls="collapse-text6"
                        aria-expanded={open5} className="text-secondary cursor-pointer border-bottom pb-1">
                        Building relationships on a foundation of trust
                    </h6>
                    <Collapse in={open5}>
                        <div id="collapse-text6">
                            <p className="">Fake profiles and misrepresentations are rife in the online dating space. And in this space, fraud is not limited to relationships
                                based on false information. Online dating scams also take place when a scammer with a fake profile gains the trust of someone who
                                believes they have made a connection or match. The scammer ultimately asks for money or obtains enough personal information about
                                to steal their identity. </p>
                            <p>Evaluationz helps verify that users are who they claim to be, and that their information is correct.</p>
                            <h5 className="text-black">
                                Recommended Verifications
                            </h5>

                            <div className="row align-items-center mt-4">
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-1.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Digital Identity Verification
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-2.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Digital Address Verification
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-16.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Education Verification
                                    </span>
                                </div>
                            </div>
                            <div className="row align-items-center mt-4 mb-4">
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-11.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Criminal Record Check
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Collapse>

                    <h4 className="text-black mt-4">
                        On-Call Service Companies
                    </h4>

                    <h6 onClick={() => setOpen6(!open6)}
                        aria-controls="collapse-text7"
                        aria-expanded={open6} className="text-secondary cursor-pointer border-bottom pb-1">
                        Open the door to trust-worthy partners
                    </h6>
                    <Collapse in={open6}>
                        <div id="collapse-text7">
                            <p className="">On-call, at-home services entail the professional partner – plumbers, electricians, masseurs, etc.
                                – entering customer homes and spending long periods of time, sometimes unsupervised. The onus on the aggregator
                                companies to ensure safety is therefore paramount. Authentic verification of partners helps protect customers and
                                your company from negative incidents.</p>
                            <h5 className="text-black">
                                Recommended Verifications
                            </h5>

                            <div className="row align-items-center mt-4">
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-1.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Digital Identity Verification
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-2.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Digital or Physical Address Verification
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-13.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Driving Licence Verification
                                    </span>
                                </div>
                            </div>
                            <div className="row align-items-center mt-4 mb-4">
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-11.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Criminal Record Check
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-12.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Court Record Verification
                                    </span>
                                </div>
                                <div className="col-md-4 d-flex align-items-center justify-content-start">
                                    <img src="images/industries/internet/icon-14.png" alt="shape" width="80"/>
                                    <span className="text-black ml-2">
                                        Drug Tests
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Collapse>

                    {/*<div className="row align-items-center mt-4">
                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/ecommerce/icon-1.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Digital Identity Verification
                            </span>
                        </div>

                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/ecommerce/icon-2.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Digital Address Verification
                            </span>
                        </div>

                         <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/ecommerce/icon-3.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Education Verification
                            </span>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/ecommerce/icon-4.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                               Driving Licence Verification
                            </span>
                        </div>
                    </div>*/}

                    {/*<div className="row align-items-center mt-4">
                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/ecommerce/icon-6.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Drug Tests
                            </span>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/ecommerce/icon-5.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Legal Verification
                            </span>
                        </div>
                    </div>*/}
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
                                    <p className="text-white">Evaluationz verifications is made incredibly convenient and quick with
                                        seamless API integration with existing ATS, HRIS and vendor management systems. The HR or
                                        Operations department gets easy interactions that feel like the native application that
                                        they are used to while the process is intuitive, transparent for the potential candidate. </p>

                                    <p className="text-white">
                                        Evaluationz also offers a variety of payment options – prepaid, direct debit or post-paid –
                                        giving organizations the flexibility of choosing according to their requirement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4">
                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/ecommerce/icon-7.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Seamless API Integration
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/ecommerce/icon-8.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                               Intuitive And Hassle-free Process
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/ecommerce/icon-9.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Multiple Payment Options
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/ecommerce/icon-10.png" alt="shape" width="80"/>
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
                             onClick={() => navigate(`/add-trust-to-your-service-platform`)}>
                            {/*onClick={() => history.push(`/add-trust-to-your-service-platform`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-12/blog-12.png" alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Add trust to your service platform</h4>
                                    <p className="mb-0">Home visit-based services have made life for urban residents much more convenient. But it comes
                                        with a new set of risks. What can be done to mitigate them?
                                        Aggregators of home services like plumbers, electricians, massage services, home cleaning services,
                                        etc. have ushered in an era of convenience </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-2 cursor-pointer"
                             onClick={() => navigate(`/blog6`)}>
                            {/*onClick={() => history.push(`/blog6`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-6/blog-6.png" alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Are you hiring delivery agents or staff with criminal antecedents?</h4>
                                    <p className="mb-0">Headlines like these are a stark reminder why it is crucial that adequate verifications and background checks are conducted before onboarding </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2 cursor-pointer"
                             onClick={() => navigate(`/blog3`)}>
                            {/*onClick={() => history.push(`/blog3`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-3/banner-1.jpg" alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Ensuring a safer drive for ride-hailing customers
                                    </h4>
                                    <p className="mb-0">It is a situation that any cab aggregator or ride-hailing company fears. Blaring headlines about driver misbehaviour or criminality.  Unfortunately, they are more common than anybody would imagine.
                                        Sample these</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 py-2 cursor-pointer"
                             onClick={() => navigate(`/blog1`)}>
                            {/*onClick={() => history.push(`/blog1`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-1/banner-1.jpg" alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Why background verification
                                        services are crucial before and
                                        after listing properties</h4>
                                    <p className="mb-0">The world of rental is fraught with risk. It is a contract
                                        between two (usually) complete strangers where the
                                        asset under contract is of tremendous value. With the</p>
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
