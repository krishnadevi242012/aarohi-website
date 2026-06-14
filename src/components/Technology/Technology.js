import React from "react";
import { Helmet } from 'react-helmet';
import ReadMoreAndLess from 'react-read-more-less';

const Technology = () => {
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital</title>
                {(window.location.pathname === '/technology') &&
                    <script src="//evaluationz.mykampaign.com/focus/4.js" type="text/javascript" charset="utf-8"
                        async="async"></script>
                }
                {/* <meta name="description" content="Read about the technology we use to make the verification process seamless, secure and dependable" />
                <meta name="keywords" content="address verification, criminal verification, drug panel testing, employment verification, education verification, employee verification, user verification, vendor verification, Identity check, Social Media Check, Reference check, Drug test, Digital verification, passport verification, credit check, API Integration, Reduced TAT, Real time verification, verification Specialist, NASCOM empanelled, credit score check, Evaluationz, Evaluationz India Pvt. Ltd., Verification India, AI, Artificial Intelligence, BlueG, Coporate verification, IT Verification, Ites Verification, Banking and Financial Services Industry Verification, Automative verification, eCommerce verification, healthcare verification, rental verificaion, matrimonial verification, hyperlocal verification, blue collar verification, white collar verification"/>
                <meta property="og:description" content="Read about the technology we use to make the verification process seamless, secure and dependable" />
                <meta property="og:url" content="https://www.evaluationz.com/technology" />
                <meta property="og:image" content="https://www.evaluationz.com/images/favicon.jpg" />
                <meta property="og:image:secure_url" content="https://www.evaluationz.com/images/favicon.jpg" />
                <meta name="twitter:image" content="https://www.evaluationz.com/images/favicon.jpg" /> */}
            </Helmet>


            <div className="about-section profile-section bg-white pt-4 pb-3">
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
                                                    src="images/doctors/plain_dp.png"
                                                    alt="Dr.Arun Kumar J" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Arun Kumar J</h5>
                                    <h5 className="card-title">MBBS, MD, DNB (Internal Medicine), MRCP (London), DrNB (Nephrology)
                                        Consultant – Nephrology
                                    </h5>
                                    <ReadMoreAndLess
                                        className="read-more-content"
                                        charLimit={450}
                                        readMoreText="See more"
                                        readLessText="See less"
                                    >
                                        {"Dr. Arun Kumar J is a highly qualified and dedicated Consultant Nephrologist with extensive\n" +
                                            "                                        expertise in the diagnosis and management of complex kidney-related conditions. With a strong academic background and international credentials,\n" +
                                            "                                        including the prestigious MRCP (London), Dr. Arun brings a blend of clinical excellence and compassionate care to his practice.\n" +
                                            "\n" +
                                            "                                        He completed his MBBS and MD in Internal Medicine,\n" +
                                            "                                        followed by a DNB in the same specialty, building a strong\n" +
                                            "                                        foundation in general and systemic medicine. Further\n" +
                                            "                                        pursuing his passion for kidney health, he earned the\n" +
                                            "                                        Doctorate of National Board (DrNB) in Nephrology, and his\n" +
                                            "                                        global perspective is strengthened by his MRCP\n" +
                                            "                                        certification from the UK.\n" +
                                            "\n" +
                                            "                                        Dr. Arun’s areas of interest include:\n" +
                                            "                                        • Chronic Kidney Disease (CKD) and End-Stage Renal Disease (ESRD)\n" +
                                            "                                        • Dialysis (Hemodialysis and Peritoneal Dialysis)\n" +
                                            "                                        • Acute Kidney Injury (AKI)\n" +
                                            "                                        • Glomerular Diseases\n" +
                                            "                                        • Hypertension Management\n" +
                                            "                                        • Kidney Transplantation Care\n" +
                                            "\n" +
                                            "                                        Known for his patient-centric approach and clear\n" +
                                            "                                        communication, Dr. Arun is committed to delivering\n" +
                                            "                                        evidence-based, ethical, and empathetic care. He actively\n" +
                                            "                                        engages in continuous medical education and keeps\n" +
                                            "                                        abreast of the latest advancements in nephrology."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images/doctors/plain_dp.png"
                                                    alt="Dr.Snehashree M" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className="card-body">
                                    <h5 className="card-title">Dr.Snehashree M</h5>
                                    <h5 className="card-title">General & Laparoscopic Surgeon
                                        Experience: 1 Year

                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={380}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"Dr. Snehashree M is a skilled and compassionate General and Laparoscopic Surgeon with a strong commitment\n" +
                                            "                                        to providing high-quality surgical care focused on patient\n" +
                                            "                                        safety, precision, and comfort. With a solid academic\n" +
                                            "                                        foundation in surgery, she brings a balanced approach of\n" +
                                            "                                        clinical expertise and patient-centered care to her practice.\n" +
                                            "\n" +
                                            "                                        She completed her MBBS followed by a Master of Surgery\n" +
                                            "                                        (MS) in General Surgery, equipping her with comprehensive\n" +
                                            "                                        training in managing a wide spectrum of surgical\n" +
                                            "                                        conditions. Her structured surgical training has enabled\n" +
                                            "                                        her to develop strong skills in both elective and\n" +
                                            "                                        emergency surgical procedures.\n" +
                                            "\n" +
                                            "                                        Dr. Snehashree’s areas of interest include:\n" +
                                            "                                        • Minimally Invasive (Laparoscopic) Surgeries\n" +
                                            "                                        • Appendectomy, Hernia Repair, and Gallbladder Surgeries\n" +
                                            "                                        • Management of Acute Abdominal Conditions\n" +
                                            "                                        • Breast and Thyroid Surgeries\n" +
                                            "                                        • Trauma and Emergency Surgical Care\n" +
                                            "\n" +
                                            "                                        Known for her compassionate approach and clear\n" +
                                            "                                        communication, Dr. Snehashree ensures that each patient\n" +
                                            "                                        receives ethical, personalized, and evidence-based care.\n" +
                                            "                                        She is dedicated to continuous learning and actively\n" +
                                            "                                        keeps herself updated with the latest advancements and\n" +
                                            "                                        evolving surgical guidelines."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images/doctors/vivek_anand.jpg"
                                                    alt="Dr.VivekAnand" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Vivek Anand</h5>
                                    <h5 className="card-title">MBBS, MD (Anesthesiology)
                                        Consultant Anesthesiologist
                                        Experience: 6 Years
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={360}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"Dr. Vivek Anand is an experienced and highly competent\n" +
                                            "                                        Anesthesiologist with over 6 years of clinical expertise\n" +
                                            "                                        in providing safe and effective anesthesia care across a\n" +
                                            "                                        wide range of surgical procedures. He specializes in\n" +
                                            "                                        preoperative assessment, intraoperative anesthesia\n" +
                                            "                                        management, post-operative pain control, and critical\n" +
                                            "                                        care support.\n" +
                                            "\n" +
                                            "                                        Dr. Vivek is known for his precision, calm demeanor\n" +
                                            "                                        under pressure, and unwavering commitment to patient\n" +
                                            "                                        safety. He has successfully managed anesthesia across\n" +
                                            "                                        multiple specialties including general surgery,\n" +
                                            "                                        orthopedics, gynecology, urology, and emergency\n" +
                                            "                                        procedures. His collaborative approach ensures smooth\n" +
                                            "                                        coordination with surgical and ICU teams to achieve\n" +
                                            "                                        optimal patient outcomes.\n" +
                                            "\n" +
                                            "                                        Dr. Vivek’s core areas of expertise include:\n" +
                                            "                                        • General and Regional Anesthesia\n" +
                                            "                                        • Preoperative Evaluation & Risk Assessment\n" +
                                            "                                        • Pain Management\n" +
                                            "                                        • Critical Care & Patient Monitoring\n" +
                                            "                                        • Anesthesia for High-Risk and Emergency Surgeries\n" +
                                            "\n" +
                                            "                                        With a strong focus on evidence-based practice and\n" +
                                            "                                        compassionate care, Dr. Vivek continuously updates his\n" +
                                            "                                        knowledge to remain aligned with the latest advancements\n" +
                                            "                                        in anesthesiology and perioperative medicine."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images/doctors/plain_dp.png"
                                                    alt="Dr. S. SoundharyaaMoorthi" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr. S. Soundharyaa Moorthi</h5>
                                    <h5 className="card-title">MBBS, MD (DVL)
                                        Consultant Dermatologist &  Cosmetologist
                                        Experience: 7+ Years
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"Dr. S. Soundharyaa Moorthi is a dedicated Dermatologist\n" +
                                            "                                        and Cosmetologist with over 7 years of experience in\n" +
                                            "                                        providing comprehensive skin, hair, and cosmetic care.\n" +
                                            "                                        With expertise in both clinical and aesthetic\n" +
                                            "                                        dermatology, she focuses on delivering high-quality,\n" +
                                            "                                        evidence-based, and patient-centered treatment tailored\n" +
                                            "                                        to individual needs.\n" +
                                            "\n" +
                                            "                                        Her approach combines clinical excellence with a deep\n" +
                                            "                                        understanding of cosmetic concerns, helping patients\n" +
                                            "                                        achieve healthy skin while enhancing their confidence\n" +
                                            "                                        and overall well-being.\n" +
                                            "\n" +
                                            "                                        Dr. Soundharyaa’s areas of expertise include:\n" +
                                            "                                        • Acne & Acne Scar Management\n" +
                                            "                                        • Melasma and Facial Pigmentation (Melanosis) Treatment\n" +
                                            "                                        • Hair Loss and Scalp Disorders\n" +
                                            "                                        • Psoriasis, Eczema & Other Inflammatory Skin Conditions\n" +
                                            "                                        • Allergic Skin Disorders (Urticaria, Angioedema, Contact Dermatitis)\n" +
                                            "                                        • Aesthetic Procedures (as applicable)\n" +
                                            "\n" +
                                            "                                        Known for her compassionate approach and detailed\n" +
                                            "                                        assessments, Dr. Soundharyaa remains committed to\n" +
                                            "                                        continuous learning and staying updated with the latest\n" +
                                            "                                        advancements in dermatology and cosmetology."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images/doctors/plain_dp.png"
                                                    alt="Dr.Pavan Prasad BK" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Pavan Prasad BK</h5>
                                    <h5 className="card-title">MBBS, MS, DNB (General Surgery), MCh (Surgical Oncology)
                                        Consultant – Surgical Oncology
                                        Experience: 9 Years
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={450}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"Dr. Pavan Prasad BK is a highly skilled Surgical\n" +
                                            "                                        Oncologist with over 9 years of experience in cancer\n" +
                                            "                                        surgery. Trained at some of India’s most esteemed\n" +
                                            "                                        institutions — Bangalore Medical College and Research\n" +
                                            "                                        Institute and Kidwai Memorial Institute of Oncology —\n" +
                                            "                                        he brings both academic excellence and clinical\n" +
                                            "                                        precision to his practice.\n" +
                                            "\n" +
                                            "                                        Dr. Pavan specializes in the surgical management of a\n" +
                                            "                                        wide range of cancers, delivering comprehensive and\n" +
                                            "                                        evidence-based oncological care tailored to each\n" +
                                            "                                        patient’s needs.\n" +
                                            "\n" +
                                            "                                        Dr. Pavan’s areas of focus include:\n" +
                                            "                                        • Head and Neck Malignancies – Complex resections and reconstructions\n" +
                                            "                                        • Breast and Endocrine Cancers\n" +
                                            "                                        • Gastrointestinal (GI) Cancers\n" +
                                            "                                        • Gynecological Malignancies\n" +
                                            "\n" +
                                            "                                        His expertise spans both open and minimally invasive\n" +
                                            "                                        surgical techniques, ensuring personalized treatment\n" +
                                            "                                        plans that prioritize patient safety, optimal cancer\n" +
                                            "                                        clearance, and preservation of quality of life.\n" +
                                            "\n" +
                                            "                                        Known for his focused and compassionate patient care,\n" +
                                            "                                        Dr. Pavan combines technical excellence with a strong\n" +
                                            "                                        commitment to delivering the highest standards in\n" +
                                            "                                        oncological surgery."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images/doctors/plain_dp.png"
                                                    alt="Dr.DarshanGowda P V" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Darshan Gowda P V</h5>
                                    <h5 className="card-title">MBBS, MS (ENT)
                                        Consultant – ENT Specialist
                                        Experience: 5 Years
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"Dr. Darshan Gowda P V is a skilled ENT (Ear, Nose,\n" +
                                            "                                        and Throat) specialist with 5 years of experience in\n" +
                                            "                                        diagnosing and treating a wide range of ENT disorders.\n" +
                                            "                                        He is committed to providing patient-centered care\n" +
                                            "                                        through accurate diagnosis, effective treatment, and\n" +
                                            "                                        minimally invasive procedures where applicable.\n" +
                                            "\n" +
                                            "                                        Dr. Darshan’s areas of expertise include:\n" +
                                            "                                        • Ear infections and hearing loss\n" +
                                            "                                        • Nasal obstruction, sinusitis, and allergic rhinitis\n" +
                                            "                                        • Throat infections, voice disorders, and tonsillitis\n" +
                                            "                                        • Endoscopic sinus surgery and other ENT procedures\n" +
                                            "                                        • Management of vertigo and balance disorders\n" +
                                            "\n" +
                                            "                                        Known for his attentive care and clinical precision,\n" +
                                            "                                        Dr. Darshan combines technical expertise with a\n" +
                                            "                                        compassionate approach, ensuring that patients feel\n" +
                                            "                                        heard, supported, and well cared for throughout their\n" +
                                            "                                        treatment journey."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images/doctors/plain_dp.png"
                                                    alt="Dr.Prahlad ST" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Prahlad ST</h5>
                                    <h5 className="card-title">DNB (Neurosurgery)
                                        Consultant – Neurosurgeon
                                        Experience: 10 Years
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"Dr. Prahlad ST is a highly experienced Neurosurgeon\n" +
                                            "                                        with over a decade of expertise in managing complex\n" +
                                            "                                        neurological and spinal conditions. He holds a\n" +
                                            "                                        Diplomate of National Board (DNB) in Neurosurgery and\n" +
                                            "                                        has been dedicated to delivering precise,\n" +
                                            "                                        evidence-based surgical care to patients with\n" +
                                            "                                        neurological disorders.\n" +
                                            "\n" +
                                            "                                        Dr. Prahlad’s areas of expertise include:\n" +
                                            "                                        • Brain Tumors and Traumatic Brain Injuries\n" +
                                            "                                        • Spinal Disorders and Degenerative Spine Surgery\n" +
                                            "                                        • Neurotrauma and Emergency Neurosurgery\n" +
                                            "                                        • Minimally Invasive and Microneurosurgical Procedures\n" +
                                            "                                        • Peripheral Nerve Surgeries\n" +
                                            "\n" +
                                            "                                        Known for his meticulous surgical skills and\n" +
                                            "                                        patient-focused approach, Dr. Prahlad ensures that\n" +
                                            "                                        each patient receives personalized care aimed at\n" +
                                            "                                        achieving the best possible clinical outcomes."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images\doctors\ranjitha_vivek.jpg"
                                                    alt="Dr.RanjithaVivek" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Ranjitha Vivek</h5>
                                    <h5 className="card-title">MBBS, MS (OBG), DNB (OBG), FRM
                                        Consultant Obstetrician &Gynecologist | Infertility Specialist | Laparoscopic Surgeon | Certified PCOD Specialist
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"With over 7 years of clinical experience, Dr. Ranjitha Vivek\n" +
                                            "                                        is a highly skilled and compassionate\n" +
                                            "                                        Obstetrician and Gynecologist dedicated to women’s\n" +
                                            "                                        health and holistic well-being. She specializes in\n" +
                                            "                                        infertility management, high-risk pregnancies,\n" +
                                            "                                        laparoscopic surgeries, and PCOD care, offering\n" +
                                            "                                        personalized treatment plans tailored to each\n" +
                                            "                                        patient’s unique needs.\n" +
                                            "\n" +
                                            "                                        Dr. Ranjitha holds advanced qualifications including a\n" +
                                            "                                        Fellowship in Reproductive Medicine (FRM) and is\n" +
                                            "                                        recognized for her evidence-based approach combined\n" +
                                            "                                        with empathy and patient education.\n" +
                                            "\n" +
                                            "                                        Dr. Ranjitha’s areas of expertise include:\n" +
                                            "                                        • Infertility evaluation and treatment\n" +
                                            "                                        • Laparoscopic and minimally invasive gynecologic surgeries\n" +
                                            "                                        • PCOD management and hormonal balance\n" +
                                            "                                        • Antenatal and postnatal care\n" +
                                            "                                        • Adolescent and menopausal health\n" +
                                            "\n" +
                                            "                                        Known for her approachable demeanor and meticulous\n" +
                                            "                                        care, Dr. Ranjitha believes in empowering women\n" +
                                            "                                        through awareness and comprehensive healthcare\n" +
                                            "                                        solutions. She remains committed to staying updated\n" +
                                            "                                        with the latest advancements in reproductive medicine\n" +
                                            "                                        and gynecologic surgery to ensure optimal outcomes\n" +
                                            "                                        for her patients."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images/doctors/plain_dp.png"
                                                    alt="Dr.MandlaMounika" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Mandla Mounika</h5>
                                    <h5 className="card-title">MBBS, MD (Psychiatry)
                                        Consultant Psychiatrist
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"With over 5 years of experience in the field of mental\n" +
                                            "                                        health, Dr. Mandla Mounika is a compassionate and\n" +
                                            "                                        skilled Psychiatrist dedicated to helping individuals\n" +
                                            "                                        achieve emotional well-being and balance in their\n" +
                                            "                                        lives. She specializes in the diagnosis and treatment\n" +
                                            "                                        of a wide range of psychiatric conditions.\n" +
                                            "\n" +
                                            "                                        Her clinical expertise includes managing anxiety\n" +
                                            "                                        disorders, depression, bipolar disorder,\n" +
                                            "                                        schizophrenia, stress-related issues, sleep\n" +
                                            "                                        disorders, and addiction management through a\n" +
                                            "                                        structured and evidence-based approach.\n" +
                                            "\n" +
                                            "                                        Dr. Mounika adopts a holistic and patient-centered\n" +
                                            "                                        approach, integrating psychotherapy, counseling, and\n" +
                                            "                                        medication management to provide comprehensive\n" +
                                            "                                        mental health care.\n" +
                                            "\n" +
                                            "                                        Dr. Mounika’s areas of expertise include:\n" +
                                            "                                        • Anxiety, depression, and mood disorders\n" +
                                            "                                        • Stress and lifestyle-related mental health concerns\n" +
                                            "                                        • Child and adolescent psychiatry\n" +
                                            "                                        • Women’s mental health\n" +
                                            "                                        • De-addiction and rehabilitation support\n" +
                                            "\n" +
                                            "                                        With a strong belief in creating a safe and\n" +
                                            "                                        non-judgmental space for her patients, Dr. Mounika\n" +
                                            "                                        emphasizes awareness, early intervention, and\n" +
                                            "                                        personalized treatment to promote lasting recovery\n" +
                                            "                                        and long-term mental wellness."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images/doctors/plain_dp.png"
                                                    alt="Dr.Shivaswamy B M" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Shivaswamy B M</h5>
                                    <h5 className="card-title">MBBS, MD (Psychiatry)
                                        Consultant Neuropsychiatrist
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"With over 8 years of clinical experience, Dr. Shivaswamy\n" +
                                            "                                        B M is a highly regarded Neuropsychiatrist known for\n" +
                                            "                                        his expertise in diagnosing and treating a wide\n" +
                                            "                                        spectrum of psychiatric and neurological disorders.\n" +
                                            "\n" +
                                            "                                        He specializes in the management of depression,\n" +
                                            "                                        anxiety, bipolar disorder, schizophrenia,\n" +
                                            "                                        obsessive-compulsive disorder (OCD), sleep\n" +
                                            "                                        disorders, epilepsy-related behavioural issues, and\n" +
                                            "                                        dementia care. Dr. Shivaswamy combines a deep\n" +
                                            "                                        understanding of brain function with evidence-based\n" +
                                            "                                        psychiatric care to provide accurate diagnosis and\n" +
                                            "                                        effective treatment solutions.\n" +
                                            "\n" +
                                            "                                        Dr. Shivaswamy’s key areas of expertise include:\n" +
                                            "                                        • Neuropsychiatric disorders and behavioural neurology\n" +
                                            "                                        • Mood and anxiety disorders\n" +
                                            "                                        • Psychotic and personality disorders\n" +
                                            "                                        • Stress-related and psychosomatic illnesses\n" +
                                            "                                        • Cognitive and memory disorders\n" +
                                            "\n" +
                                            "                                        Known for his empathetic and patient-focused\n" +
                                            "                                        approach, Dr. Shivaswamy ensures that every\n" +
                                            "                                        individual receives holistic and confidential care.\n" +
                                            "                                        His commitment to advancing mental health\n" +
                                            "                                        awareness and delivering comprehensive\n" +
                                            "                                        neuropsychiatric treatment makes him a trusted\n" +
                                            "                                        name in the field."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images/doctors/plain_dp.png"
                                                    alt="Dr.Priya C S" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Priya C S</h5>
                                    <h5 className="card-title">MBBS, MD (Paediatrics)
                                        Consultant Paediatrician
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"Dr. Priya C S is a dedicated and compassionate\n" +
                                            "                                        Paediatrician with over 1 year of clinical\n" +
                                            "                                        experience in child health and development. She is\n" +
                                            "                                        committed to providing comprehensive medical care\n" +
                                            "                                        for infants, children, and adolescents, ensuring\n" +
                                            "                                        healthy growth and overall well-being.\n" +
                                            "\n" +
                                            "                                        Her clinical practice focuses on preventive care,\n" +
                                            "                                        immunization, nutritional guidance, and the\n" +
                                            "                                        management of common childhood illnesses, with a\n" +
                                            "                                        strong emphasis on building trust and comfort with\n" +
                                            "                                        both children and parents.\n" +
                                            "\n" +
                                            "                                        Dr. Priya’s areas of interest include:\n" +
                                            "                                        • Newborn and infant care\n" +
                                            "                                        • Growth and developmental assessment\n" +
                                            "                                        • Childhood infections and allergy management\n" +
                                            "                                        • Immunizations and preventive health\n" +
                                            "                                        • Nutrition and wellness counseling\n" +
                                            "\n" +
                                            "                                        Known for her friendly and approachable nature,\n" +
                                            "                                        Dr. Priya strives to create a positive and\n" +
                                            "                                        reassuring experience for every child and family\n" +
                                            "                                        she serves, combining clinical expertise with\n" +
                                            "                                        genuine care and compassion."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images\doctors\prajwal_gowda.jpg"
                                                    alt="Dr.PrajwalGowda C" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr.PrajwalGowda C</h5>
                                    <h5 className="card-title">MBBS, MD, DNB, FIPM
                                        Consultant – Anaesthesia & Pain Medicine
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"With over 9 years of clinical experience, Dr. Prajwal\n" +
                                            "                                        Gowda C is a skilled and dedicated specialist in\n" +
                                            "                                        Anaesthesia and Pain Medicine, known for his\n" +
                                            "                                        expertise in providing safe, effective, and\n" +
                                            "                                        patient-centered perioperative care.\n" +
                                            "\n" +
                                            "                                        He has a special interest in Paediatric Anaesthesia\n" +
                                            "                                        and Regional Blocks, ensuring precision, safety,\n" +
                                            "                                        and comfort during surgical and interventional\n" +
                                            "                                        procedures across all age groups.\n" +
                                            "\n" +
                                            "                                        Dr. Prajwal is well-versed in advanced pain\n" +
                                            "                                        management techniques and focuses on improving\n" +
                                            "                                        patients’ quality of life through minimally\n" +
                                            "                                        invasive procedures and personalized care plans.\n" +
                                            "\n" +
                                            "                                        Dr. Prajwal’s areas of expertise include:\n" +
                                            "                                        • Paediatric and adult anaesthesia\n" +
                                            "                                        • Regional anaesthesia and nerve blocks\n" +
                                            "                                        • Acute and chronic pain management\n" +
                                            "                                        • Perioperative and critical care\n" +
                                            "                                        • Multimodal pain therapy\n" +
                                            "\n" +
                                            "                                        Known for his meticulous approach and calm\n" +
                                            "                                        demeanor, Dr. Prajwal Gowda is committed to\n" +
                                            "                                        maintaining the highest standards of safety and\n" +
                                            "                                        excellence in anaesthetic and pain management\n" +
                                            "                                        practices."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images\doctors\amruth_sr.jpg"
                                                    alt="Dr.Amruth S R" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Amruth S R</h5>
                                    <h5 className="card-title">MBBS, MS (General Surgery), FIAGES
                                        Consultant – General & Laparoscopic Surgeon
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"With over 8 years of surgical experience, Dr. Amruth\n" +
                                            "                                        S R is a skilled and experienced General and\n" +
                                            "                                        Laparoscopic Surgeon dedicated to providing\n" +
                                            "                                        high-quality surgical care with precision,\n" +
                                            "                                        safety, and compassion.\n" +
                                            "\n" +
                                            "                                        He specializes in minimally invasive\n" +
                                            "                                        (laparoscopic) surgeries, offering faster\n" +
                                            "                                        recovery, smaller incisions, and reduced\n" +
                                            "                                        post-operative discomfort for patients.\n" +
                                            "                                        Dr. Amruth’s expertise spans a wide range\n" +
                                            "                                        of general surgical procedures including\n" +
                                            "                                        abdominal, gastrointestinal, hernia, and\n" +
                                            "                                        gallbladder surgeries.\n" +
                                            "\n" +
                                            "                                        Dr. Amruth’s areas of expertise include:\n" +
                                            "                                        • Laparoscopic and minimally invasive surgery\n" +
                                            "                                        • Hernia, appendix, and gallbladder surgeries\n" +
                                            "                                        • Gastrointestinal and abdominal procedures\n" +
                                            "                                        • Trauma and emergency surgical care\n" +
                                            "                                        • Post-operative and wound management\n" +
                                            "\n" +
                                            "                                        Known for his patient-centered approach\n" +
                                            "                                        and commitment to surgical excellence,\n" +
                                            "                                        Dr. Amruth S R ensures every patient\n" +
                                            "                                        receives individualized care from diagnosis\n" +
                                            "                                        to recovery, with a strong focus on safety\n" +
                                            "                                        and comfort."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images/doctors/plain_dp.png"
                                                    alt="Dr.Chaitra Narayan" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Chaitra Narayan</h5>
                                    <h5 className="card-title">MBBS, MS (OBG), AIIMS
                                        Consultant – Obstetrics & Gynecology
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"With over 8 years of experience, Dr. Chaitra Narayan\n" +
                                            "                                        is a highly skilled Obstetrician and\n" +
                                            "                                        Gynecologist dedicated to providing\n" +
                                            "                                        comprehensive healthcare for women at\n" +
                                            "                                        every stage of life. Trained at the\n" +
                                            "                                        prestigious All India Institute of Medical\n" +
                                            "                                        Sciences (AIIMS), she brings exceptional\n" +
                                            "                                        clinical expertise combined with a\n" +
                                            "                                        compassionate approach to patient care.\n" +
                                            "\n" +
                                            "                                        Dr. Chaitra specializes in high-risk\n" +
                                            "                                        pregnancies, infertility management,\n" +
                                            "                                        laparoscopic gynecologic surgeries,\n" +
                                            "                                        menstrual disorders, and menopausal\n" +
                                            "                                        health. She is known for her\n" +
                                            "                                        patient-focused approach and emphasis\n" +
                                            "                                        on evidence-based treatment.\n" +
                                            "\n" +
                                            "                                        Dr. Chaitra’s key areas of expertise include:\n" +
                                            "                                        • Antenatal and postnatal care\n" +
                                            "                                        • High-risk pregnancy management\n" +
                                            "                                        • Infertility and reproductive health\n" +
                                            "                                        • Laparoscopic and minimally invasive surgeries\n" +
                                            "                                        • Menstrual and hormonal disorder management\n" +
                                            "                                        • Adolescent and menopausal care\n" +
                                            "\n" +
                                            "                                        With a strong belief in empowering\n" +
                                            "                                        women through awareness and preventive\n" +
                                            "                                        healthcare, Dr. Chaitra Narayan strives\n" +
                                            "                                        to provide holistic, personalized, and\n" +
                                            "                                        empathetic care for every patient."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images/doctors/plain_dp.png"
                                                    alt="Dr.Adarsh Mahadevappa Sudhirkumar" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Adarsh Mahadevappa Sudhirkumar</h5>
                                    <h5 className="card-title">MBBS, MS (General Surgery), DrNB (Vascular & Endovascular Surgery)
                                        Consultant – Vascular & Endovascular Surgeon
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"With over 7 years of clinical and surgical\n" +
                                            "                                        experience, Dr. Adarsh Mahadevappa\n" +
                                            "                                        Sudhirkumar is a highly skilled Vascular\n" +
                                            "                                        and Endovascular Surgeon specializing in\n" +
                                            "                                        the diagnosis and treatment of diseases\n" +
                                            "                                        affecting the arteries, veins, and\n" +
                                            "                                        lymphatic system.\n" +
                                            "\n" +
                                            "                                        He is proficient in performing both open\n" +
                                            "                                        and minimally invasive (endovascular)\n" +
                                            "                                        procedures, offering advanced treatment\n" +
                                            "                                        options for complex vascular conditions\n" +
                                            "                                        with a strong focus on patient safety\n" +
                                            "                                        and faster recovery.\n" +
                                            "\n" +
                                            "                                        Dr. Adarsh’s key areas of expertise include:\n" +
                                            "                                        • Peripheral arterial disease (PAD) management\n" +
                                            "                                        • Varicose veins and venous insufficiency treatment\n" +
                                            "                                        • Aneurysm repair and endovascular interventions\n" +
                                            "                                        • Diabetic foot care and limb salvage procedures\n" +
                                            "                                        • Carotid and renal artery interventions\n" +
                                            "                                        • AV fistula creation and vascular access management\n" +
                                            "\n" +
                                            "                                        Known for his meticulous surgical skills\n" +
                                            "                                        and compassionate approach, Dr. Adarsh\n" +
                                            "                                        is dedicated to delivering high-quality\n" +
                                            "                                        vascular care using the latest medical\n" +
                                            "                                        advancements and technologies. He\n" +
                                            "                                        strives to restore mobility, improve\n" +
                                            "                                        circulation, and enhance overall\n" +
                                            "                                        patient well-being through precise and\n" +
                                            "                                        personalized treatment plans."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images\doctors\madhu_kiran.jpg"
                                                    alt="Dr.MadhuKiran B T" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr.MadhuKiran B T</h5>
                                    <h5 className="card-title">MBBS, MD (Paediatrics)
                                        Consultant Paediatrician
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"With over 6 years of experience in child\n" +
                                            "                                        healthcare, Dr. MadhuKiran B T is a\n" +
                                            "                                        dedicated and compassionate\n" +
                                            "                                        Paediatrician committed to ensuring\n" +
                                            "                                        the healthy growth and development of\n" +
                                            "                                        children from infancy through\n" +
                                            "                                        adolescence.\n" +
                                            "\n" +
                                            "                                        He provides comprehensive medical\n" +
                                            "                                        care, focusing on preventive health,\n" +
                                            "                                        immunizations, nutrition, and the\n" +
                                            "                                        management of both common and\n" +
                                            "                                        complex childhood illnesses. Dr.\n" +
                                            "                                        MadhuKiran believes in building a\n" +
                                            "                                        strong bond of trust with children\n" +
                                            "                                        and parents, ensuring a comfortable\n" +
                                            "                                        and reassuring experience during\n" +
                                            "                                        every visit.\n" +
                                            "\n" +
                                            "                                        Dr. MadhuKiran’s key areas of expertise include:\n" +
                                            "                                        • Newborn and infant care\n" +
                                            "                                        • Growth and developmental monitoring\n" +
                                            "                                        • Childhood infections and allergy management\n" +
                                            "                                        • Immunization and preventive care\n" +
                                            "                                        • Nutritional and behavioral guidance\n" +
                                            "\n" +
                                            "                                        Known for his gentle approach and\n" +
                                            "                                        thorough clinical care, Dr.\n" +
                                            "                                        MadhuKiran B T strives to promote\n" +
                                            "                                        holistic child health through early\n" +
                                            "                                        diagnosis, effective treatment, and\n" +
                                            "                                        parental education."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images/doctors/plain_dp.png"
                                                    alt="Dr.Karthik Kumar S" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Karthik Kumar S</h5>
                                    <h5 className="card-title">MBBS, MD (Respiratory Medicine)
                                        Consultant – Respiratory Medicine
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"Dr. Karthik Kumar S is a skilled and\n" +
                                            "                                        dedicated Respiratory Medicine\n" +
                                            "                                        Specialist with over 3 years of\n" +
                                            "                                        experience in the diagnosis and\n" +
                                            "                                        management of respiratory and\n" +
                                            "                                        pulmonary conditions. He is\n" +
                                            "                                        committed to providing comprehensive,\n" +
                                            "                                        evidence-based care for patients\n" +
                                            "                                        with acute and chronic lung diseases.\n" +
                                            "\n" +
                                            "                                        Dr. Karthik focuses on improving\n" +
                                            "                                        respiratory health through early\n" +
                                            "                                        diagnosis, preventive care, and\n" +
                                            "                                        personalized treatment plans\n" +
                                            "                                        tailored to each patient’s needs.\n" +
                                            "\n" +
                                            "                                        Dr. Karthik’s key areas of expertise include:\n" +
                                            "                                        • Asthma and allergy management\n" +
                                            "                                        • Chronic Obstructive Pulmonary Disease (COPD)\n" +
                                            "                                        • Tuberculosis and other lung infections\n" +
                                            "                                        • Interstitial lung diseases\n" +
                                            "                                        • Sleep-related breathing disorders\n" +
                                            "                                        • Smoking cessation and preventive lung health\n" +
                                            "\n" +
                                            "                                        Known for his patient-centered\n" +
                                            "                                        approach and clinical precision,\n" +
                                            "                                        Dr. Karthik Kumar S is dedicated\n" +
                                            "                                        to helping patients achieve better\n" +
                                            "                                        lung function and an improved\n" +
                                            "                                        quality of life through compassionate\n" +
                                            "                                        and specialized care."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images/doctors/plain_dp.png"
                                                    alt="Dr.Jayanth D H" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr.Jayanth D H</h5>
                                    <h5 className="card-title">MBBS, MS (General Surgery), DNB (General Surgery), MCh (Urology)
                                        Consultant – Urologist & Andrologist
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"Dr. Jayanth D H is a highly skilled\n" +
                                            "                                        Urologist and Andrologist with\n" +
                                            "                                        extensive training in both general\n" +
                                            "                                        surgery and advanced urological\n" +
                                            "                                        procedures. He specializes in the\n" +
                                            "                                        diagnosis and treatment of disorders\n" +
                                            "                                        affecting the urinary tract and male\n" +
                                            "                                        reproductive system, offering\n" +
                                            "                                        comprehensive care with precision\n" +
                                            "                                        and compassion.\n" +
                                            "\n" +
                                            "                                        Dr. Jayanth’s areas of expertise include:\n" +
                                            "                                        • Urological surgeries (open, laparoscopic, and minimally invasive)\n" +
                                            "                                        • Management of kidney stones and urinary tract obstructions\n" +
                                            "                                        • Male infertility and andrological disorders\n" +
                                            "                                        • Prostate diseases, including BPH and prostate cancer management\n" +
                                            "                                        • Urinary incontinence and voiding dysfunction\n" +
                                            "                                        • Pediatric urology\n" +
                                            "\n" +
                                            "                                        Known for his patient-focused\n" +
                                            "                                        approach and surgical expertise,\n" +
                                            "                                        Dr. Jayanth D H ensures personalized\n" +
                                            "                                        treatment plans tailored to each\n" +
                                            "                                        patient’s needs, combining advanced\n" +
                                            "                                        medical knowledge with empathetic\n" +
                                            "                                        and compassionate care."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images/doctors/plain_dp.png"
                                                    alt="Dr. Sam Koshy" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Sam Koshy</h5>
                                    <h5 className="card-title">MBBS, MRCP (Internal Medicine)
                                        Consultant Physician
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"With over 4 years of experience, Dr. Sam\n" +
                                            "                                        Koshy is a dedicated Consultant\n" +
                                            "                                        Physician with expertise in\n" +
                                            "                                        internal medicine, outpatient care,\n" +
                                            "                                        and intensive care. He has\n" +
                                            "                                        specialized experience in cardiac\n" +
                                            "                                        critical care, providing advanced\n" +
                                            "                                        management for patients with\n" +
                                            "                                        complex cardiovascular and medical\n" +
                                            "                                        conditions.\n" +
                                            "\n" +
                                            "                                        Dr. Sam focuses on delivering\n" +
                                            "                                        comprehensive and personalized\n" +
                                            "                                        care for both inpatients and\n" +
                                            "                                        outpatients, ensuring a holistic\n" +
                                            "                                        approach to diagnosis, treatment,\n" +
                                            "                                        and follow-up.\n" +
                                            "\n" +
                                            "                                        Dr. Sam’s key areas of expertise include:\n" +
                                            "                                        • Internal medicine and preventive care\n" +
                                            "                                        • Cardiac critical care and acute medical management\n" +
                                            "                                        • Management of chronic diseases like diabetes, hypertension, and heart disease\n" +
                                            "                                        • Inpatient and outpatient care coordination\n" +
                                            "                                        • Comprehensive patient education and wellness guidance\n" +
                                            "\n" +
                                            "                                        Known for his compassionate\n" +
                                            "                                        approach and clinical precision,\n" +
                                            "                                        Dr. Sam Koshy is committed to\n" +
                                            "                                        optimizing patient outcomes and\n" +
                                            "                                        delivering high-quality care with\n" +
                                            "                                        empathy and professionalism."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images\doctors\raja_reddy.jpg"
                                                    alt="Dr. Raja Reddy" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Raja Reddy</h5>
                                    <h5 className="card-title">MBBS, MS (General Surgery),
                                        Consultant – General & Laparoscopic Surgeon
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"With over 35 years of surgical experience,\n" +
                                            "                                        Dr. Raja Reddy is a skilled and\n" +
                                            "                                        experienced General and\n" +
                                            "                                        Laparoscopic Surgeon dedicated to\n" +
                                            "                                        providing high-quality surgical care\n" +
                                            "                                        with precision, safety, and\n" +
                                            "                                        compassion.\n" +
                                            "\n" +
                                            "                                        He specializes in minimally\n" +
                                            "                                        invasive (laparoscopic) surgeries,\n" +
                                            "                                        offering faster recovery, smaller\n" +
                                            "                                        incisions, and reduced\n" +
                                            "                                        post-operative discomfort for\n" +
                                            "                                        patients. His expertise spans a\n" +
                                            "                                        wide range of general surgical\n" +
                                            "                                        procedures including abdominal,\n" +
                                            "                                        gastrointestinal, hernia, and\n" +
                                            "                                        gallbladder surgeries.\n" +
                                            "\n" +
                                            "                                        Dr. Raja Reddy’s areas of expertise include:\n" +
                                            "                                        • Laparoscopic and minimally invasive surgery\n" +
                                            "                                        • Hernia, appendix, and gallbladder surgeries\n" +
                                            "                                        • Gastrointestinal and abdominal procedures\n" +
                                            "                                        • Trauma and emergency surgical care\n" +
                                            "                                        • Post-operative and wound management\n" +
                                            "\n" +
                                            "                                        Known for his vast experience and\n" +
                                            "                                        patient-centered approach, Dr.\n" +
                                            "                                        Raja Reddy ensures individualized\n" +
                                            "                                        care from diagnosis through\n" +
                                            "                                        recovery, maintaining the highest\n" +
                                            "                                        standards of surgical excellence."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images\doctors\sagar_kabadi.jpg"
                                                    alt="Dr Sagar P Kabadi" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr Sagar P Kabadi</h5>
                                    <h5 className="card-title">MBBS MD (General Medicine)
                                        Consultant Physician
                                        FMGE Medical Gastroenterology
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"Dr. Sagar P Kabadi is a well-known\n" +
                                            "                                        Gastroenterologist currently\n" +
                                            "                                        associated with Re Life Hospital\n" +
                                            "                                        and DHEE Hospital. With over 10\n" +
                                            "                                        years of experience in\n" +
                                            "                                        Gastroenterology, he has worked as\n" +
                                            "                                        an expert specialist across\n" +
                                            "                                        different cities in India and has\n" +
                                            "                                        been associated with several\n" +
                                            "                                        reputed hospitals.\n" +
                                            "\n" +
                                            "                                        Dr. Sagar has contributed to the\n" +
                                            "                                        management of numerous complex\n" +
                                            "                                        medical cases and is known for his\n" +
                                            "                                        accurate diagnosis and empathetic\n" +
                                            "                                        patient care. His special interest\n" +
                                            "                                        areas include GERD, Diarrhoea,\n" +
                                            "                                        Chronic Constipation, Irritable\n" +
                                            "                                        Bowel Syndrome (IBS), Hepatitis,\n" +
                                            "                                        Pancreatitis, Colorectal Cancer,\n" +
                                            "                                        Ulcerative Colitis, Rectal\n" +
                                            "                                        Disorders, and related\n" +
                                            "                                        gastrointestinal conditions.\n" +
                                            "\n" +
                                            "                                        Dr. Sagar’s qualifications include:\n" +
                                            "                                        • MBBS – Rajiv Gandhi University of Health Sciences (2015)\n" +
                                            "                                        • MD Internal Medicine – Rajarajeswari Medical College and Hospital (2019)\n" +
                                            "                                        • FMGE – Medical Gastroenterology\n" +
                                            "\n" +
                                            "                                        He has actively participated in\n" +
                                            "                                        research work and various\n" +
                                            "                                        workshops under the\n" +
                                            "                                        Gastroenterology department and\n" +
                                            "                                        has published multiple academic\n" +
                                            "                                        papers. Dr. Kabadi has also\n" +
                                            "                                        received recognition and awards\n" +
                                            "                                        in the field of Gastroenterology."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 py-2">
                            <div className="card h-100 shadow-sm text-white">
                                <ul className="media__container pl-0 mb-0">
                                    <li className="media">
                                        <div>
                                            <div className="media__item">
                                                <img className="card-img-top img-fluid"
                                                    src="images\doctors\prajwal_kc.jpg"
                                                    alt="Dr. Dr Prajwal K C" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="card-body">
                                    <h5 className="card-title">Dr. Dr Prajwal K C</h5>
                                    <h5 className="card-title">MBBS, MD (General Medicine)
                                        Consultant Physician
                                    </h5>
                                    <ReadMoreAndLess className="read-more-content"
                                        charLimit={370}
                                        readMoreText="See more"
                                        readLessText="See less">
                                        {"With over 10 years of experience, Dr. Prajwal\n" +
                                            "                                        K C is a dedicated Consultant\n" +
                                            "                                        Physician with expertise in\n" +
                                            "                                        internal medicine, outpatient\n" +
                                            "                                        care, and intensive care. He\n" +
                                            "                                        provides advanced management\n" +
                                            "                                        for patients with complex\n" +
                                            "                                        cardiovascular and medical\n" +
                                            "                                        conditions.\n" +
                                            "\n" +
                                            "                                        Dr. Prajwal focuses on\n" +
                                            "                                        delivering comprehensive and\n" +
                                            "                                        personalized care for both\n" +
                                            "                                        inpatients and outpatients,\n" +
                                            "                                        ensuring a holistic approach\n" +
                                            "                                        to diagnosis, treatment, and\n" +
                                            "                                        follow-up.\n" +
                                            "\n" +
                                            "                                        Dr. Prajwal’s key areas of expertise include:\n" +
                                            "                                        • Internal medicine and preventive care\n" +
                                            "                                        • Cardiac critical care and acute medical management\n" +
                                            "                                        • Management of chronic diseases like diabetes, hypertension, and heart disease\n" +
                                            "                                        • Inpatient and outpatient care coordination\n" +
                                            "                                        • Comprehensive patient education and wellness guidance\n" +
                                            "\n" +
                                            "                                        Known for his compassionate\n" +
                                            "                                        approach and clinical precision,\n" +
                                            "                                        Dr. Prajwal K C is committed\n" +
                                            "                                        to optimizing patient outcomes\n" +
                                            "                                        and delivering high-quality\n" +
                                            "                                        care with empathy and\n" +
                                            "                                        professionalism."}
                                    </ReadMoreAndLess>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;
