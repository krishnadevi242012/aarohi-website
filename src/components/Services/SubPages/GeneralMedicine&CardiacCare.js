import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: General Medicine & Cardiac Care</title>
            </Helmet>

            <div className="about-section general-medicine-section-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-red font-weight-bolder">General Medicine & Cardiac Care</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-off-white pt-4 pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                            
                                <div className="about-content">
                                    <p className="font-weight-normal">The General Medicine & Cardiac Care department at Aarohi Hospital offers comprehensive medical care for adults, with a strong emphasis on heart health, lifestyle-related disorders, and preventive medicine. Our experienced physicians provide personalized care focused on early diagnosis, effective treatment, and long-term health management.
We diagnose and manage a wide range of medical conditions including diabetes, hypertension, thyroid disorders, infections, respiratory illnesses, and gastrointestinal problems, along with early and preventive cardiac conditions. Special attention is given to patients with high blood pressure, cholesterol abnormalities, chest discomfort, palpitations, breathlessness, and cardiovascular risk factors.
Cardiac care at Aarohi Hospital is centered on early detection, risk assessment, and prevention of heart disease. Our services include ECG evaluation, cardiac risk profiling, medication management, lifestyle and dietary counseling, and regular monitoring, helping patients reduce risk and maintain heart health.
By combining clinical expertise, patient education, and preventive strategies, our General Medicine & Cardiac Care team supports patients in achieving better heart health, effective disease control, and long-term well-being.
</p>

                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {/* <div className="about-section profile-section bg-white pt-4 pb-3">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Doctors Team</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                     src="images/about-us/profile/nobby.png"
                                                     alt="Nobby"/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Nobby Nazareth</h5>
                                    <h5 className="card-title">Founder & CEO</h5>
                                    <ReadMoreAndLess className="read-more-content"
                                                     charLimit={450}
                                                     readMoreText="See more"
                                                     readLessText="See less">
                                        {"Nobby started his career as a public sector banker for a\n" +
                                            "                                        decade, after which he moved into HR with leadership\n" +
                                            "                                        firms like Personnel Search Services, Ray & Berndtson,\n" +
                                            "                                        and Hewitt Associates. Prior to starting off on his own in\n" +
                                            "                                        2001, Nobby was the Chief Recruitment Officer for\n" +
                                            "                                        Microland group based in Bangalore. With an equally\n" +
                                            "                                        balanced experience in professional services and\n" +
                                            "                                        entrepreneurship, Nobby is focused on organising\n" +
                                            "                                        disruptions in the HR space, particularly by leveraging\n" +
                                            "                                        technology and the intelligence around it. Nobby\n" +
                                            "                                        founded Evaluationz in 2006 and led it to be among the\n" +
                                            "                                        most recognised and respected employee verification\n" +
                                            "                                        firms in India with the NASSCOM NSR Gold Partner\n" +
                                            "                                        ratings. Today, under his leadership, Evaluationz has a\n" +
                                            "                                        presence across business and user segments to offer\n" +
                                            "                                        verification solutions that are cutting edge in the\n" +
                                            "                                        industry." +

                                            "                                    Nobby is an avid squash player, golfer and loves nature."}
                                    </ReadMoreAndLess>

                                   <div className="col-md-12 p-0 text-left mt-2">
                                        <a href="https://www.linkedin.com/in/nobbynazareth/"
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            <img src="./images/about-us/linkedin-icon-1.png" alt={'Linkedin'} style={{width: "32px"}}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid" src="images/about-us/profile/mani.png" alt="Manikandan"/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className="card-body">
                                    <h5 className="card-title">Manikandan Ramasamy</h5>
                                    <h5 className="card-title">Technology Advisor</h5>
                                    <ReadMoreAndLess className="read-more-content"
                                                     charLimit={380}
                                                     readMoreText="See more"
                                                     readLessText="See less">
                                        {"Manikandan is a software technologist, having created\n" +
                                            "                                        numerous products in Fintech, Healthtech, HRtech as\n" +
                                            "                                        well in supply chain for over two decades. While\n" +
                                            "                                        technology drives the professional passion, Manikandan\n" +
                                            "                                        also equally manifests passion outside work. An avid\n" +
                                            "                                        swimmer, Manikandan hopes one day to cross the\n" +
                                            "                                        English Channel. Having a great understanding of\n" +
                                            "                                        animal behavior, Manikandan takes care of numerous\n" +
                                            "                                        dogs and cats, with their food and when required\n" +
                                            "                                        medical needs, aiming one day to be able to setup an\n" +
                                            "                                        animal care centre. Manikandan relentlessly works for\n" +
                                            "                                        his spiritual upliftment being associated with\n" +
                                            "                                        MaitriBodh Parivaar, a socio-spiritual organization.Manikandan holds a Computer Engineering degree\n" +
                                            "                                        from Pace University, New York as well as a Masters in\n" +
                                            "                                        Business Administration degree."}
                                    </ReadMoreAndLess>

                                    <div className="col-md-12 p-0 text-left mt-2">
                                        <a href="https://www.linkedin.com/in/manikandanramasamy/"
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            <img src="./images/about-us/linkedin-icon-1.png" alt={'Linkedin'} style={{width: "32px"}}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid" src="images/about-us/profile/nicolai.png" alt="Nicolai"/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Nicolai Nazareth</h5>
                                    <h5 className="card-title">Executive Director</h5>
                                    <ReadMoreAndLess className="read-more-content"
                                                     charLimit={360}
                                                     readMoreText="See more"
                                                     readLessText="See less">
                                        {"Having started his career with a design background, Nicolai has experience in various creative fields including graphic,\n" +
                                            "                                        film and animation. Nicolai took his learning in the design field and has been replicating it with intent in marketing and\n" +
                                            "                                        product centric roles since 2017. He has worked in industry segments including advertising, deep tech, ecommerce and\n" +
                                            "                                        platform businesses. Nicolai a proclivity for user experience and behavioural patterns and its manipulation.\n" +
                                            "                                        As a strong believer and practitioner of the IDEO design process, design thinking and the Octalysis framework of\n" +
                                            "                                        gamification, Nicolai uses his expertise to come up with innovative, practical and meaningful solutions, not just in design\n" +
                                            "                                        and creative related fields but even extending to business strategy, product development and marketing."}
                                    </ReadMoreAndLess>

                                    <div className="col-md-12 p-0 text-left mt-2">
                                        <a href="https://www.linkedin.com/in/nicolai-nazareth-59847036/"
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            <img src="./images/about-us/linkedin-icon-1.png" alt={'Linkedin'} style={{width: "32px"}}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid" src="images/about-us/profile/ashwini.png" alt="Ashwini"/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Ashwini Kumar K</h5>
                                    <h5 className="card-title">Vice President</h5>
                                    <ReadMoreAndLess className="read-more-content"
                                                     charLimit={370}
                                                     readMoreText="See more"
                                                     readLessText="See less">
                                        {"Ashwin is an accomplished business leader with over 17 years of work experience, including 8 years of specialized\n" +
                                            "                                        expertise in BGV Business Operations. With a strong track record of driving revenue growth, profitability, vendor\n" +
                                            "                                        expansion, and ensuring high-quality service delivery within tight timelines, he has demonstrated solid leadership and analytical skills.\n" +
                                            "                                        As a seasoned people manager, Ashwin is a clear communicator and attentive listener who inspires his team to achieve\n" +
                                            "                                        their goals. He possesses a clear vision and understanding of the business landscape, enabling him to manage end-to-end\n" +
                                            "                                        business operations and customer service with ease.\n" +
                                            "                                        Additionally, he is adept at implementing cost-saving measures that maximize profitability, further contributing to the success of the business."}
                                    </ReadMoreAndLess>

                                     <div className="col-md-12 p-0 text-left mt-2">
                                        <a href="https://www.linkedin.com/in/ashwini-kumar-80497321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            <img src="./images/about-us/linkedin-icon-1.png" alt={'Linkedin'} style={{width: "32px"}}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid" src="images/about-us/profile/parvathi.png" alt="Parvathi"/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Parvathi Shankar</h5>
                                    <h5 className="card-title">Head – Human Resources</h5>
                                    <ReadMoreAndLess className="read-more-content"
                                                     charLimit={450}
                                                     readMoreText="See more"
                                                     readLessText="See less">
                                        {"Parvathi creates a fine balance between business\n" +
                                            "                                        objectives and people asset sentiment. While driving a\n" +
                                            "                                        'full of life' culture at Evaluationz, she makes sure she\n" +
                                            "                                        does not miss sight of the business goals and targets.' She is an accomplished, versatile, and result-oriented\n" +
                                            "                                        Human Resource professional with overall 15 years of\n" +
                                            "                                        progressive experience in the gamut of HR functions. Graduate degree in HRM from Bangalore University.\n" +
                                            "                                        Parvathi is also passionate about sports and cooking."}
                                    </ReadMoreAndLess>

                                    <div className="col-md-12 p-0 text-left mt-2">
                                        <a href="https://www.linkedin.com/in/parvathi-shankar-a5659b63/"
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            <img src="./images/about-us/linkedin-icon-1.png" alt={'Linkedin'} style={{width: "32px"}}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid" src="images/about-us/profile/nasreen.png" alt="Nasreen"/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Nasreen Athiya</h5>
                                    <h5 className="card-title">Head - Product Design</h5>
                                    <ReadMoreAndLess className="read-more-content"
                                                     charLimit={370}
                                                     readMoreText="See more"
                                                     readLessText="See less">
                                        {"Nasreen is a skilled product manager with over 10 years of experience in the BGV industry. Her expertise lies in\n" +
                                            "                                        developing and executing roadmaps for designing new products. She actively conducts market research to identify\n" +
                                            "                                        customer needs and pain points within the industry. Nasreen collaborates with cross-functional teams to ensure the\n" +
                                            "                                        delivery of high-quality products and continuously gathers feedback to assess product performance.\n" +
                                            "                                        Nasreen is known for her direct communication style and prompt feedback, without any sugar-coating. Her no-nonsense\n" +
                                            "                                        approach is a testament to her commitment to delivering quality results."}
                                    </ReadMoreAndLess>

                                    <div className="col-md-12 p-0 text-left mt-2">
                                        <a href="https://www.linkedin.com/in/nasreen-athiya-1080791a0"
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            <img src="./images/about-us/linkedin-icon-1.png" alt={'Linkedin'} style={{width: "32px"}}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default Landing;
