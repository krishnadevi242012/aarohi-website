import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Gynaecology</title>
            </Helmet>

            <div className="about-section gynaecology-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Gynaecology</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we provide comprehensive Gynaecology care focused on the health and well-being of women at every stage of life. Our experienced gynaecologists offer personalized, compassionate care for a wide range of reproductive and gynecological conditions, ensuring comfort, privacy, and clinical excellence.</p>
                                    <p className="font-weight-normal">We specialize in the diagnosis and treatment of menstrual disorders, PCOS, uterine fibroids, ovarian cysts, endometriosis, pelvic infections, infertility concerns, menopausal health issues, and other gynecological conditions. Our services include routine gynecological examinations, preventive screenings, family planning, minimally invasive procedures, and advanced surgical treatments when required. With modern facilities and a patient-centered approach, we emphasize early diagnosis, informed decision-making, preventive care, and long-term women’s health.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    );
};

export default Landing;
