import React from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

const BlogDetails = () => {
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Blog</title>
                {(window.location.pathname === '/preventing-insurance-pension-fraud') &&
                <script src="//evaluationz.mykampaign.com/focus/14.js" type="text/javascript" charset="utf-8"
                        async="async"></script>
                }
                <meta name="description" content="Read our blogs on the latest news and thoughts surrounding verification"/>
                <meta name="keywords" content="pension fraud, life insurance fraud, ekyc, liveliness check, identity verification, fraud prevention" />
                <meta property="og:title" content="Preventing insurance and pension fraud | Evaluationz" />
                <meta property="og:description" content="Read our blogs on the latest news and thoughts surrounding verification"/>
                <meta property="og:url" content="https://www.evaluationz.com/preventing-insurance-pension-fraud" />
                <meta property="og:image" content="https://www.evaluationz.com/images/blogs/blog-10/blog-10.png" />
                <meta property="og:image:secure_url" content="https://www.evaluationz.com/images/blogs/blog-10/blog-10.png" />
                <meta name="twitter:image" content="https://www.evaluationz.com/images/blogs/blog-10/blog-10.png" />
            </Helmet>

            <div className="about-section bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left mb-0 text-start">
                                    <h1 className="text-black font-weight-bolder">Preventing insurance and pension fraud.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section col-md-10 p-0 m-0">
                <img src="images/blogs/blog-10/image-1.png" alt="shape" className="blog-details-image" />
            </div>

            <div className="about-section bg-white py-5 blue-image-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="about-content">
                                    <p className="text-black font-weight-normal">Just search for ‘life insurance fraud’ or ‘pension fraud’ and the numbers will surprise you. Life insurance fraud can involve people taking policies in the name of strangers and raising claims, faking deaths and claiming the insured amount, or even claims from fake beneficiaries. </p>
                                    <p className="text-black font-weight-normal">Pension frauds can involve enrolling in schemes with fake credentials, claims from fraudulent beneficiaries, and more.  Why would someone enroll in a scheme with fake credentials?  Many pension schemes have eligibility criteria for preferential incentives; for example, senior citizens, or women may receive higher returns in some schemes. Therefore applying for a scheme in their name may be attractive to fraudsters.  </p>
                                    <p className="text-black font-weight-normal">In fact, a news item in The Indian Express brought two of these frauds together. Probe finds fraud in widow pension scheme in Panchkula.  (<a href="https://indianexpress.com/article/cities/chandigarh/probe-finds-fraud-in-widow-pension-scheme-in-panchkula-7929796/" target="_blank">https://indianexpress.com/article/cities/chandigarh/probe-finds-fraud-in-widow-pension-scheme-in-panchkula-7929796/</a> ) (TL;DR - A group of women beneficiaries of Haryana’s widow pension scheme had  been withdrawing money fraudulently every month on the basis of fake death certificates of their husbands.)</p>
                                    <p className="text-black font-weight-normal">How do companies protect themselves?</p>
                                    <p className="text-black font-weight-bold mb-0">At the application stage</p>
                                    <p className="text-black font-weight-bold mb-0">Identity verification  </p>
                                    <p className="text-black font-weight-normal">The first protection against fraud is identity verification. Insurance, retirement schemes, pensions, and so on are sold by millions of individual agents in India, many of them on a door-to-door level. The ability of these agents to instantly verify the identity or other credentials is severely limited in a paper-based system.</p>
                                    <p className="text-black font-weight-normal">eKYC tools can help in instant real-time verification if the insurance or pension/investment company enables it for their agents. (With API-enabled verification solutions, most companies will be able to integrate it easily into their existing apps).  </p>
                                    <p className="text-black font-weight-bold mb-0">Other credentials  </p>
                                    <p className="text-black font-weight-normal">It is not just identity. Address verification, financial red flags or even criminal records can be verified at the application level to ensure that the person is eligible for the financial product.  </p>
                                    <p className="text-black font-weight-normal">The quick turnaround helps to increase sales as well as eliminate the hassles that would crop up in case of discrepancies in credentials. </p>
                                    <p className="text-black font-weight-bold mb-0">Claims and payouts</p>
                                    <p className="text-black font-weight-normal">The largest number of frauds are perpetrated at the payout stage. These may be fake identities, fake details, or even fake deaths.  </p>
                                    <p className="text-black font-weight-bold mb-0">Identity verification </p>
                                    <p className="text-black font-weight-normal">The ability to carry out instant digital identity verification becomes the first line of defense here as well.  IS the claimant or beneficiary whom they claim they are? And is the claimant or beneficiary the intended one – the one who was nominated by the purchaser? Digital identity verification and comparisons to the identity on file can eliminate fraudulent claimants.  </p>
                                    <p className="text-black font-weight-bold mb-0">Liveliness check </p>
                                    <p className="text-black font-weight-normal">In the article above, the pension fraud was carried out with fake deaths.  However, the reverse could be true as well.  Fraudsters could be claiming benefits from governments and companies in the name of people who are no longer alive.  For example, this news item – “Pune: The Chatusrhrungi police are probing a complaint against the wife of a retired officer of a public sector bank of cheating the financial institution of Rs. 8,46 lakhs by showing the husband alive and taking full pension benefits.” (<a href="https://timesofindia.indiatimes.com/city/pune/pune-woman-accused-of-rs-8-lakh-pension-fraud/articleshow/93976505.cms" target="_blank">https://timesofindia.indiatimes.com/city/pune/pune-woman-accused-of-rs-8-lakh-pension-fraud/articleshow/93976505.cms</a> )</p>
                                    <p className="text-black font-weight-normal">Liveliness checks are an important bastion against fraud, especially in the insurance and pension industries. Digital verification solutions can offer liveliness checks that can be conducted on a regular basis by companies that need this capability. </p>
                                    <p className="text-black font-weight-normal">In conclusion, insurance companies, especially those in life and health insurance, as well as organizations that offer pension schemes could benefit greatly from digital verification services. Imagine the impact when every agent, anywhere in the country, is an agent of fraud prevention with just a mobile phone. All it needs is the right verification solution. </p>
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
