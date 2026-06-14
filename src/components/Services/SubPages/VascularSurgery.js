import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Landing = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Vascular Surgery</title>
            </Helmet>

            <div className="about-section vascular-surgery-background bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Vascular Surgery</h1>
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
                                    <p className="font-weight-normal">At Aarohi Hospital, we provide specialized Vascular Surgery services for the diagnosis and treatment of disorders affecting the arteries, veins, and lymphatic system. Our experienced vascular surgeons combine advanced technology with evidence-based care to deliver effective treatment and improve circulatory health.</p>
                                    <p className="font-weight-normal">We specialize in the management of varicose veins, peripheral arterial disease, diabetic foot complications, vascular trauma, deep vein thrombosis (DVT), aneurysms, carotid artery disease, and other complex vascular conditions. Our services include minimally invasive endovascular procedures, vascular bypass surgeries, dialysis access creation, and comprehensive wound care. With state-of-the-art facilities and a multidisciplinary approach, we focus on accurate diagnosis, limb preservation, faster recovery, and long-term vascular health for every patient.</p>
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
