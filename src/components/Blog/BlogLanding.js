import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Blog = () => {
    const navigate = useNavigate();
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Blog</title>
                {(window.location.pathname === '/blog') &&
                    <script src="//evaluationz.mykampaign.com/focus/6.js" type="text/javascript" charset="utf-8"
                            async="async"></script>
                }
                <meta name="description" content="Read our blogs on the latest news and thoughts surrounding verification" />
                <meta name="keywords" content="address verification, criminal verification, drug panel testing, employment verification, education verification, employee verification, user verification, vendor verification, Identity check, Social Media Check, Reference check, Drug test, Digital verification, passport verification, credit check, API Integration, Reduced TAT, Real time verification, verification Specialist, NASCOM empanelled, credit score check, Evaluationz, Evaluationz India Pvt. Ltd., Verification India, AI, Artificial Intelligence, BlueG, Coporate verification, IT Verification, Ites Verification, Banking and Financial Services Industry Verification, Automative verification, eCommerce verification, healthcare verification, rental verificaion, matrimonial verification, hyperlocal verification, blue collar verification, white collar verification" />
                <meta property="og:description" content="Read our blogs on the latest news and thoughts surrounding verification" />
                <meta property="og:url" content="https://evaluationz.com/blog" />
                <meta property="og:image" content="https://evaluationz.com/images/favicon.jpg" />
                <meta property="og:image:secure_url" content="https://evaluationz.com/images/favicon.jpg" />
                <meta name="twitter:image" content="https://evaluationz.com/images/favicon.jpg" />
            </Helmet>

            <div className="hero-block pt-4 pb-5">
                <div className="container pt-5">
                    <div className="col-12 px-0">
                        <h1>Blogs</h1>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/The-business-of-impersonation-and-how-it-affects-yours`)}>
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-23/img-1.png"
                                         alt="blog" className="w-100"/>
                                </div>
                                <div className="card-body">
                                    <h4>The business of impersonation, and how it affects yours.</h4>
                                    <p className="mb-0">
                                        The scourge of impersonation spans almost every aspect of academics and employment.
                                        From college exams to company assignments and interviews, the rot runs deep.
                                        Every piece of news like the one above reiterates the fact that it is not only
                                        widespread but is also a lucrative business for unethical individuals.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/Recognizing-Employee-Fraud-Types-to-Safeguard-Your-Business`)}>
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-22/img-1.png"
                                         alt="blog" className="w-100"/>
                                </div>
                                <div className="card-body">
                                    <h4>Recognizing Employee Fraud Types to Safeguard Your Business</h4>
                                    <p className="mb-0">
                                        Did you know that more than $4.7 trillion was lost annually to occupational fraud worldwide, according to data in Occupational Fraud 2022: A Report to the Nations, released by the Association of Certified Fraud Examiners (ACFE) </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/The-Rising-Threat-of-AI-and-Deep-Fakes-in-Job-Interviews`)}>
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-21/img-1.png"
                                         alt="blog" className="w-100"/>
                                </div>
                                <div className="card-body">
                                    <h4>The Rising Threat of AI and Deep Fakes in Job Interviews</h4>
                                    <p className="mb-0">
                                        Deepfakes and the harnessing of AI for nefarious uses is on the rise. While deepfakes are usually discussed with regard to politics, the impact can be in the everyday, and is only going to become more widespread.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/Enhancing-Revenue-and-Customer-Acquisition-through-Digital-Verification-and-KYC`)}>
                            {/*onClick={() => history.push(`/Enhancing-Revenue-and-Customer-Acquisition-through-Digital-Verification-and-KYC`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-20/img-1.png"
                                         alt="blog"/>
                                </div>
                                <div className="card-body">
                                    <h4>Enhancing Revenue and Customer Acquisition through Digital Verification and KYC
                                    </h4>
                                    <p className="mb-0">
                                        In today's fast-paced digital landscape, businesses are constantly seeking ways to increase revenues, improve customer acquisition, and expedite the onboarding process. In a world where technology is ruling, AI is trending and ChatBot is becoming tools of the modern age, KYC process and customer onboarding methods </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/The-Dangers-of-Interview-Impersonation-How-to-Protect-Your-Organization`)}>
                            {/*onClick={() => history.push(`/The-Dangers-of-Interview-Impersonation-How-to-Protect-Your-Organization`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-19/img-1.png"
                                         alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>The Dangers of Interview Impersonation: How to Protect Your Organization
                                    </h4>
                                    <p className="mb-0">
                                        Hiring the right candidate is decisive for any organization's success. Remote working opportunities and virtual hiring have increased the possibility of interview fraud. Writer Shivangi Singh on LinkedIn notifies that the recruiting team estimates 15-20% of candidates appearing in the interview are dishonest in the way they present themselves. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/The-Crucial-Role-of-UAN-Verification-in-Employment-Background-Checks`)}>
                            {/*onClick={() => history.push(`/The-Crucial-Role-of-UAN-Verification-in-Employment-Background-Checks`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-18/img-1.png"  alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>The Crucial Role of UAN Verification in Employment Background Checks.</h4>
                                    <p className="mb-0">
                                        When embarking on the journey of Employment Verification as a background verification company, our primary task is to validate the information provided by candidates on their Background Verification (BGV) forms, along with corroborating supporting documentation.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/How-to-Reduce-Customer-Onboarding-Time`)}>
                            {/*onClick={() => history.push(`/How-to-Reduce-Customer-Onboarding-Time`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-17/img-1.png"
                                         alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>How to Reduce Customer Onboarding Time to Under 10 Minutes.
                                    </h4>
                                    <p className="mb-0">In today's fast-paced digital era, businesses strive to provide seamless experiences to their customers, right from the moment they decide to engage with their products or services. One critical aspect of this journey is customer onboarding, the process by which organizations bring new customers into their ecosystem.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/Hiring-employees-is-hard`)}>
                            {/*onClick={() => history.push(`/Hiring-employees-is-hard`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-16/img-16.png"
                                         alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Hiring employees is hard:
                                        How to get it right.
                                    </h4>
                                    <p className="mb-0">
                                        The hiring market is a bundle of contradictions right now. One the one hand there are massive job cuts and layoffs, which should logically increase the available pool quite significantly. On the other hand, companies are finding it more difficult to find the right fit for positions across experience levels. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/How-financial-businesses-integrate-video-KYC`)}>
                            {/*onClick={() => history.push(`/How-financial-businesses-integrate-video-KYC`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-15/blog-15.png"
                                         alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>How financial businesses can seamlessly integrate video KYC in the onboarding process</h4>
                                    <p className="mb-0">With the rapid advancement of technology and the growth of online and mobile financial transactions, there has been an increase in financial fraud. Financial institutions, especially fintechs, are constantly seeking ways to ensure that their customers are protected from fraudulent activities.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/How-to-make-your-platforms-more-holistic-by-integrating-employee-verification-solutions`)}>
                            {/*onClick={() => history.push(`/How-to-make-your-platforms-more-holistic-by-integrating-employee-verification-solutions`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-14/blog-14.png"
                                         alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>How to make your platforms more holistic by integrating employee verification solutions</h4>
                                    <p className="mb-0">In today's fast-paced and competitive job market, companies are under constant pressure to find the best talent quickly. To accomplish this, organizations often rely on human resources (HR) and Applicant Tracking System (ATS)/Human Resources Management Systems (HRMS) platforms to streamline their recruitment processes.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/your-employees-and-partners-are-your-assets`)}>
                            {/*onClick={() => history.push(`/your-employees-and-partners-are-your-assets`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-13/blog-13.png"
                                         alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Your employees and partners are your assets, but could they become your liabilities?</h4>
                                    <p className="mb-0">As a company, your business runs on trust.
                                        You deal with people and organizations – whether employees, customers, or vendors – with the belief that they are whom they claim to be, and that they will do what they are supposed to do.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
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
                                        etc. have ushered in an era of convenience
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/Shut-the-door-on-fraud-with-eKYC`)}>
                            {/*onClick={() => history.push(`/Shut-the-door-on-fraud-with-eKYC`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-11/blog-11.png" alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Shut the door on fraud with e-KYC/video KYC</h4>
                                    <p className="mb-0">Human ingenuity works in many ways. Throughout history, there have been instances of this ingenuity being used for good, or for nefarious purposes. This holds true even in this digital age. Governments and companies have to be constantly alert to stay a step ahead </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/preventing-insurance-pension-fraud`)}>
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

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/safeguard-against-interview-impersonation`)}>
                            {/*onClick={() => history.push(`/safeguard-against-interview-impersonation`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-9/blog-9.png" alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Are you hiring the same person you interviewed?</h4>
                                    <p className="mb-0">Interview impersonation is rising among candidates, especially with remote hiring and working. Use 3-point authentication to ensure that the person you interviews is the same as the person you hire. Find out more in our blog.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/dont-let-your-delivery-agents-damage-your-brand`)}>
                            {/*onClick={() => history.push(`/dont-let-your-delivery-agents-damage-your-brand`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-8/blog-8.png" alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Don't let your in-house or 3rd party delivery agents damage your brand. Safeguard your reputation with verification</h4>
                                    <p className="mb-0">A company’s most valuable asset is its reputation. As an e-commerce platform, the truth is that your reputation is dependent on multiple </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/blog7`)}>
                            {/*onClick={() => history.push(`/blog7`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-7/blog-7.jpg" alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Impersonation during interviews. How are you protecting your company?</h4>
                                    <p className="mb-0">The CEO of a Bangalore based IT firm recently spoke about the close call his company had, thanks to interview impersonation. He said, “If only</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
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

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/blog5`)}>
                            {/*onClick={() => history.push(`/blog5`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-5/blog-5.jpg" alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Why digital user verifications are vital to your ecommerce business</h4>
                                    <p className="mb-0">2020: Delivery agent scams Amazon off Rs. 27,000. 2021: Amazon duped off Rs. 20 lakhs in phone return fraud. These are just a few cases of many</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/blog4`)}>
                            {/*onClick={() => history.push(`/blog4`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-4/blog-4.jpg" alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Is it time for social media users to self-verify? The tech exists</h4>
                                    <p className="mb-0">When Elon Musk recently spoke about giving Twitter users the ability to self-verify so that every user
                                        can get an “authentication mark”, he was adding to the buzz regarding </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/blog3`)}>
                            {/*onClick={() => history.push(`/blog3`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-3/banner-1.jpg" alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Ensuring a safer drive for ride-hailing customers</h4>
                                    <p className="mb-0">It is a situation that any cab aggregator or ride-hailing company fears. Blaring headlines about driver misbehaviour or criminality.  Unfortunately, they are more common than anybody would imagine.
                                        Sample these</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/blog2`)}>
                            {/*onClick={() => history.push(`/blog2`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-2/banner-1.jpg"
                                         alt="blog" />
                                </div>
                                <div className="card-body">
                                    <h4>Hassle-free verification and fraud protection for the fintech industry</h4>
                                    <p className="mb-0">Recently, social media was abuzz with users discovering that there were loans taken out in their name - loans that they had no idea about. While some of them found out from  </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 py-2 cursor-pointer"
                             onClick={() => navigate(`/blog1`)}>
                            {/*onClick={() => history.push(`/blog1`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-1/banner-1.jpg"
                                         alt="blog" />
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
        </section>
    );
};

export default Blog;
