import React from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

const BlogDetails = () => {
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Blog</title>
                <meta name="description" content="Read our blogs on the latest news and thoughts surrounding verification"/>
                <meta name="keywords" content="Employee verification, background verification, vendor verification, interview fraud, interview impersonation, secure workplace, return to work, hybrid work model, remote hiring, ATS, HRIS, hire with confidence " />
                <meta property="og:title" content="Hiring employees is hard: How to get it right. | Evaluationz" />
                <meta property="og:description" content="Read our blogs on the latest news and thoughts surrounding verification"/>
                <meta property="og:url" content="https://www.evaluationz.com/Hiring-employees-is-hard" />
                <meta property="og:image" content="https://www.evaluationz.com/images/blogs/blog-16/blog-16.png" />
                <meta property="og:image:secure_url" content="https://www.evaluationz.com/images/blogs/blog-16/blog-16.png" />
                <meta name="twitter:image" content="https://www.evaluationz.com/images/blogs/blog-16/blog-16.png" />
            </Helmet>

            <div className="about-section bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left mb-0 text-start">
                                    <h1 className="text-black font-weight-bolder">Hiring employees is hard:
                                        How to get it right.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section col-md-10 p-0 m-0">
                <img src="images/blogs/blog-16/blog-16.png" alt="shape" className="blog-details-image" />
            </div>

            <div className="about-section bg-white py-5 blue-image-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="about-content">
                                    <p className="text-black font-weight-normal">The hiring market is a bundle of contradictions right now. One the one hand there are massive job cuts and layoffs, which should logically increase the available pool quite significantly. On the other hand, companies are finding it more difficult to find the right fit for positions across experience levels. The consequences of hiring the wrong person go far beyond just the job functions of the wrong hire.
                                        So how can an organisation become smarter and more efficient at getting it right?</p>

                                    <p className="text-black font-weight-normal">The first step to improving the chances of hiring the best performers starts with putting in the time and work into finding the right people.
                                        While ‘gut instincts’ may have a part to play in finding the right candidate, the successful recruitment depends more on a solid, rational, objective factors. </p>

                                    <p className="text-black font-weight-normal">Here are some factors that are affected by hiring the wrong person, and how to de-risk the process to minimise these situations.  </p>

                                    <p className="text-black font-weight-bold mb-0">Productivity </p>

                                    <p className="text-black font-weight-normal">The productivity loss incurred by hiring the wrong candidate if not limited to the individual. The productivity of the entire group that he/she interacts with takes a hit.
                                        Inefficiencies and lack of knowledge can lead to delays, increased follow-ups, supervision or corrections that are not expected at that level, retraining, or even process and disciplinary deviations.  </p>

                                    <p className="text-black font-weight-normal">Ensuring that the candidate has the qualifications, experience, and the right attitude to the job is an important part of getting it right. While the right fit can be a judgement call that has to be taken by the interviewer, the qualifications and experience has to be verified using a robust, accurate verification system.
                                        The use of digital verification can help this happen in seconds. </p>


                                    <p className="text-black font-weight-bold mb-0">Culture fit</p>

                                    <p className="text-black font-weight-normal">Culture makes the company. The difference between organisations can often be distilled down to their culture.And culture is made by people. ‘The right fit’ in many cases is the culture fit. Stories abound of managers who have been brought in laterally who have disrupted the company culture and demoralised teams, if not led to bigger consequences.
                                        The candidate’s approach to work, and an alignment to the values and vision is crucial to ensure that the success of the organisation.  </p>


                                    <p className="text-black font-weight-bold mb-0">The job description</p>

                                    <p className="text-black font-weight-normal">This aspect of getting hiring right takes place long before the interviews or any other interaction. In fact, it has nothing to do with any specific candidate. It is about getting the job description right. If you are not able to define clearly what the employee is supposed to be doing, you will have a hard time hiring the right person.
                                        Clear JDs, reflecting the responsibilities, level of skills and experience required, aid in making sure that the right candidates are identified.</p>

                                    <p className="text-black font-weight-bold mb-0">Conversation, not questions</p>
                                    <p className="text-black font-weight-normal">Standard interviews are like a question-and-answer session, with the interviewer asking the lion’s share of questions. The interviewee is usually given an opportunity towards the end (do you have any questions for us?) to ask their own questions back to the panel. And while this is an opportunity to gauge whether the interviewee has thoughtful questions and has prepared well,
                                        the interaction itself should go beyond that. Approaching the interview less as a question-answer session and more as a dialogue, where the panel and the potential candidate ask each other questions to determine alignment can go a long way in finding the right fit. </p>

                                    <p className="text-black font-weight-bold mb-0">Trust, but verify</p>
                                    <p className="text-black font-weight-normal">The final outcome of any hire is completely unpredictable. A person who seems to be a perfect candidate may turn out to be a complete misfit – in terms of culture, ability, personality, integrity, and so on.  However, there are a few elements that are non-negotiable and absolutely cannot be left ambiguous. Forgery and frauds regarding identity, address, educational qualifications, work experience, references, criminal records, etc. are rampant.
                                        Add to that the increasing incidents of interview impersonation and you have another set of factors to watch out for. </p>
                                    <p className="text-black font-weight-normal">Using a comprehensive, AI-powered verification solution that can detect frauds, fake documents and interview impersonation in real-time can be the difference between letting unethical candidates into the hiring pool.
                                        By filtering out these wrong candidates, you are a step closer to hiring the right one. </p>

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
