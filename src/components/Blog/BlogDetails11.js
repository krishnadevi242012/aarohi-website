import React from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

const BlogDetails = () => {
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Blog</title>
                {(window.location.pathname === '/Shut-the-door-on-fraud-with-eKYC') &&
                <script src="//evaluationz.mykampaign.com/focus/15.js" type="text/javascript" charset="utf-8"
                        async="async"></script>
                }
                <meta name="description" content="Read our blogs on the latest news and thoughts surrounding verification"/>
                <meta name="keywords" content="ekyc, ekyc fraud, ekyc fraud prevention, identity theft, insurance fraud, video verification, digital verification, digital transformation" />
                <meta property="og:title" content="Shut the door on fraud with eKYC | Evaluationz" />
                <meta property="og:description" content="Read our blogs on the latest news and thoughts surrounding verification"/>
                <meta property="og:url" content="https://www.evaluationz.com/Shut-the-door-on-fraud-with-eKYC" />
                <meta property="og:image" content="https://www.evaluationz.com/images/blogs/blog-11/blog-11.png" />
                <meta property="og:image:secure_url" content="https://www.evaluationz.com/images/blogs/blog-11/blog-11.png" />
                <meta name="twitter:image" content="https://www.evaluationz.com/images/blogs/blog-11/blog-11.png" />
            </Helmet>

            <div className="about-section bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left mb-0 text-start">
                                    <h1 className="text-black font-weight-bolder">Shut the door on fraud with e-KYC/video KYC</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section col-md-10 p-0 m-0">
                <img src="images/blogs/blog-11/image-1.png" alt="shape" className="blog-details-image" />
            </div>

            <div className="about-section bg-white py-5 blue-image-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="about-content">
                                    <p className="text-black font-weight-bold mb-0">The rise of fraud in digitalized BFSI </p>
                                    <p className="text-black font-weight-normal">The BFSI (Banking, Financial Services, and Insurance) sector is particularly vulnerable to financial fraud. As more and more services are being offered online – through sites and apps – customers expect instant responses, even at the onboarding stage. Traditional KYC processes, with the paper trail and physical presence at the branch, are considered too inconvenient. From the company’s perspective too, delays in onboarding could lead to customer dropouts. </p>
                                    <p className="text-black font-weight-normal">The answer is e-KYC/video KYC or electronic Know Your Customer processes. A digitized version of KYC, e-KYC/video KYC leverages the power of artificial intelligence, and componentized government identity documents and databases to make authenticated results available in real-time. </p>
                                    <p className="text-black font-weight-bold mb-0">Faster, safer verification</p>
                                    <p className="text-black font-weight-normal">e-KYC/video KYC enables user authentication in minutes, rather than the usual hours or days taken with traditional paper-based KYC. Completely automated and using the power of connected data with no manual intervention the process is seamless and quick. With e-KYC/video KYC, users can complete their biometric verification, document verification, and other checks conveniently and with minimal disruption to their daily schedule. </p>
                                    <p className="text-black font-weight-normal">The ability to harness the information of government databases for identity and other checks also makes the process fool proof. Since the connections are made to secure and tamper-proof databases, the results are also more accurate so that the fintech or insurance platform is safer for the company as well as other users.</p>
                                    <p className="text-black font-weight-bold mb-0">Multi-level authentication</p>
                                    <p className="text-black font-weight-normal">As technology has progressed, e-KYC/video KYC solutions have been able to expand beyond basic user identity, address, and documentation verification. </p>
                                    <p className="text-black font-weight-normal">Call backs and video verification can bolster user identity authentication and can also become a liveliness check for insurance and investment services. Users can be required to regularly update their details and to authenticate liveliness to eliminate impersonation fraud. Advanced mapping and recognition systems optional audio recognition and matching almost fail-safe. </p>
                                    <p className="text-black font-weight-bold mb-0">The first line of RegTech  </p>
                                    <p className="text-black font-weight-normal">There has been an increased focus on RegTech or regulation technology, involved in financial regulation and compliance, especially in the detection and prevention of Identity theft, Identity impersonation, money laundering and terrorist financing. In many cases, user verification can be considered the first step in AML (Anti Money Laundering) or terrorist financing initiatives. Digital user verification adds traceability and filters out suspicious profiles. This can be further bolstered with running the user details through the International Database checks which covers, Money laundering, most wanted list, Interpol and various other global sources.</p>
                                    <p className="text-black font-weight-bold mb-0">Conclusion</p>
                                    <p className="text-black font-weight-normal">e-KYC/video KYC brings a new level of convenience and speed to user authentication while not compromising on accuracy. Fintechs, insurance companies and other BFSI organizations can use powerful e-KYC/video KYC solutions to onboard users quickly and easily while ensuring safety and compliance with legal requirements.If you want to know how Evaluationz e-KYC/video KYC can be customised for your business then click the button below.</p>
                                    <div className="row text-center">
                                        <div className="col-12">
                                            <a href="contact"
                                               className="btn btn-primary btn-blue">GET IN TOUCH</a>
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

export default BlogDetails;
