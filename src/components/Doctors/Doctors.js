import React from "react";
import { Helmet } from "react-helmet";

const departments = [
    {
        name: "General Medicine",
        icon: "mdi mdi-stethoscope",
        doctors: [
            {
                name: "Dr. Sam Koshy",
                qualification: "MBBS, MRCP (Internal Medicine)",
                role: "Consultant Physician",
                experience: "",
                description:
                    "Dedicated Consultant Physician with expertise in internal medicine, outpatient care, intensive care, and cardiac critical care.",
                expertise: [
                    "Internal Medicine & Preventive Care",
                    "Cardiac Critical Care",
                    "Acute Medical Management",
                    "Diabetes, Hypertension & Heart Disease",
                    "Inpatient & Outpatient Care"
                ]
            },
            {
                name: "Dr. Goutham R",
                qualification: "MBBS, Fellowship in Internal Medicine & Diabetology",
                role: "Consultant Physician – Internal Medicine & Diabetology",
                experience: "8 Years",
                description:
                    "Experienced Consultant Physician specialising in Internal Medicine and Diabetology, with a focus on preventive healthcare and long-term disease management.",
                expertise: [
                    "General & Internal Medicine",
                    "Diabetes & Diabetology",
                    "Hypertension Management",
                    "Metabolic Disorders",
                    "Chronic Disease Management",
                    "Preventive Healthcare"
                ]
            }
        ]
    },

    {
        name: "General & Laparoscopic Surgery",
        icon: "mdi mdi-medical-bag",
        doctors: [
            {
                name: "Dr. Amruth S R",
                qualification: "MBBS, MS (General Surgery), FIAGES, FALS",
                role: "Consultant – General & Laparoscopic Surgeon",
                description:
                    "Skilled General & Laparoscopic Surgeon providing safe, precise, and patient-focused surgical care using conventional and minimally invasive techniques.",
                expertise: [
                    "Laparoscopic & Minimally Invasive Surgery",
                    "Hernia & Appendix Surgery",
                    "Gallbladder & Abdominal Surgery",
                    "Gastrointestinal Surgery",
                    "Trauma & Emergency Surgery",
                    "Wound Care & Post-operative Management"
                ]
            }
        ]
    },

    {
        name: "Obstetrics & Gynaecology",
        icon: "mdi mdi-human-female",
        doctors: [
            {
                name: "Dr. Ranjitha Vivek",
                qualification: "MBBS, MS (OBG), DNB (OBG), FRM, FMAS",
                role: "Consultant Obstetrician & Gynaecologist",
                subRole:
                    "Infertility Specialist | Laparoscopic Surgeon | Certified PCOD Specialist",
                experience: "7+ Years",
                description:
                    "Experienced Obstetrician & Gynaecologist specialising in women's healthcare, infertility management, high-risk pregnancy, laparoscopic procedures, and PCOD/PCOS care.",
                expertise: [
                    "Infertility Evaluation & Treatment",
                    "Reproductive Medicine & Fertility Care",
                    "High-Risk Pregnancy Management",
                    "Antenatal & Postnatal Care",
                    "Laparoscopic & Minimally Invasive Surgery",
                    "PCOD/PCOS Management",
                    "Adolescent Gynaecological Care",
                    "Menopausal Health"
                ]
            }
        ]
    },

    {
        name: "Paediatrics",
        icon: "mdi mdi-baby-face-outline",
        doctors: [
            {
                name: "Dr. Rohith H R",
                qualification: "MBBS, DCH, MD (Paediatrics), DNB (Paediatrics)",
                role: "Consultant Paediatrician",
                experience: "20+ Years Overall | 14+ Years Specialist",
                description:
                    "Highly experienced paediatrician providing comprehensive healthcare for newborns, infants, children, and adolescents.",
                expertise: [
                    "General Paediatric Care",
                    "Newborn & Infant Care",
                    "Childhood Infections",
                    "Allergy Management",
                    "Respiratory Problems",
                    "Growth & Development",
                    "Preventive Paediatric Care",
                    "Paediatric Orthopaedic Conditions"
                ]
            },
            {
                name: "Dr. Madhu Kiran B T",
                qualification: "MBBS, MD (Paediatrics)",
                role: "Consultant Paediatrician",
                experience: "6+ Years",
                description:
                    "Dedicated paediatrician focused on preventive health, immunisation, nutrition, and management of common and complex childhood illnesses.",
                expertise: [
                    "Newborn & Infant Care",
                    "Growth & Development",
                    "Childhood Infections",
                    "Allergy Management",
                    "Immunisation & Preventive Care",
                    "Nutritional & Behavioural Guidance"
                ]
            }
        ]
    },

    {
        name: "Orthopaedics & Trauma",
        icon: "mdi mdi-bone",
        doctors: [
            {
                name: "Dr. D. Likith Kumar",
                qualification:
                    "MBBS, MS (Orthopaedics), FIASM, FIJR, DIFM (FIFA – Switzerland), FIRM (U.K.)",
                role: "Consultant Orthopaedic & Trauma Surgeon",
                description:
                    "Experienced Orthopaedic & Trauma Surgeon with specialised training in joint replacement, robotic surgery, arthroscopy, sports medicine, trauma care, and musculoskeletal disorders.",
                expertise: [
                    "Joint Replacement & Robotic Surgery",
                    "Knee & Shoulder Arthroscopy",
                    "Sports Injuries & Sports Medicine",
                    "Orthopaedic Trauma & Fracture Management",
                    "Foot & Ankle Conditions",
                    "Musculoskeletal Disorders"
                ]
            },
            {
                name: "Dr. Arjun Kumar",
                qualification:
                    "MBBS, MS Orthopaedics, FRGUHS Fellowship in Spine Surgery, FIFA Fellowship in Sports Medicine, FIPM Fellowship in Pain Management",
                role: "Consultant Orthopaedic Surgeon",
                subRole: "Spine | Sports Medicine | Pain Management",
                description:
                    "Consultant Orthopaedic Surgeon specialising in spine care, joint and musculoskeletal disorders, sports medicine, and pain management.",
                expertise: [
                    "Spine Care",
                    "Joint & Musculoskeletal Disorders",
                    "Sports Injuries",
                    "Pain Management",
                    "Regenerative Therapies"
                ]
            }
        ]
    },

    {
        name: "Neurology",
        icon: "mdi mdi-brain",
        doctors: [
            {
                name: "Dr. Prasad B N K",
                qualification: "Consultant Neurologist & Geriatric Neurologist",
                role: "Consultant Neurologist & Geriatric Neurologist",
                experience: "27+ Years",
                description:
                    "Senior Neurologist with extensive experience in the evaluation, diagnosis, treatment, and long-term management of neurological disorders, with special interest in Geriatric Neurology.",
                expertise: [
                    "General Neurology",
                    "Geriatric Neurology",
                    "Comprehensive Neurological Evaluation",
                    "Complex Neurological Conditions",
                    "Age-related Neurological Conditions",
                    "Long-term Neurological Care"
                ]
            }
        ]
    },

    {
        name: "Neurosurgery",
        icon: "mdi mdi-brain",
        doctors: [
            {
                name: "Dr. Prahlad ST",
                qualification: "DNB (Neurosurgery)",
                role: "Consultant – Neurosurgeon",
                experience: "10+ Years",
                description:
                    "Experienced Neurosurgeon specialising in complex neurological and spinal conditions with a focus on precise, evidence-based surgical care.",
                expertise: [
                    "Brain Tumours & Traumatic Brain Injuries",
                    "Spinal Disorders & Degenerative Spine Surgery",
                    "Neurotrauma & Emergency Neurosurgery",
                    "Minimally Invasive & Microneurosurgical Procedures",
                    "Peripheral Nerve Surgeries"
                ]
            }
        ]
    },

    {
        name: "Nephrology",
        icon: "mdi mdi-water-outline",
        doctors: [
            {
                name: "Dr. Arun Kumar N",
                qualification: "MBBS, MD – General Medicine, DNB – Nephrology",
                role: "Consultant Nephrologist & Renal Specialist",
                experience: "17 Years Overall | 9 Years Nephrology",
                description:
                    "Experienced Consultant Nephrologist and Renal Specialist providing comprehensive care for kidney and renal-related disorders.",
                expertise: [
                    "Chronic Kidney Disease",
                    "Acute Kidney Injury",
                    "Diabetic Kidney Disease",
                    "Hypertension & Kidney Disorders",
                    "Electrolyte & Fluid Disorders",
                    "Dialysis & Renal Replacement Therapy",
                    "Kidney Disease Prevention",
                    "Pre & Post-transplant Renal Care"
                ]
            },
            {
                name: "Dr. Arun Kumar J",
                qualification:
                    "MBBS, MD, DNB (Internal Medicine), MRCP (London), DNB (Nephrology)",
                role: "Consultant Nephrologist & Renal Transplant Physician",
                description:
                    "Highly qualified nephrologist with expertise in complex kidney diseases, dialysis, renal transplantation, and interventional nephrology.",
                expertise: [
                    "Chronic Kidney Disease & ESRD",
                    "Acute Kidney Injury",
                    "Haemodialysis & Peritoneal Dialysis",
                    "Kidney Transplantation",
                    "Interventional Nephrology",
                    "Native & Transplant Kidney Biopsy",
                    "Glomerular & Proteinuric Kidney Diseases",
                    "Diabetic Kidney Disease"
                ]
            }
        ]
    },

    {
        name: "Urology",
        icon: "mdi mdi-hospital",
        doctors: [
            {
                name: "Dr. Jayanth D H",
                qualification:
                    "MBBS, MS (General Surgery), DNB (General Surgery), MCh (Urology)",
                role: "Consultant – Urologist & Andrologist",
                description:
                    "Urologist and Andrologist specialising in urinary tract and male reproductive disorders, with expertise in advanced urological procedures.",
                expertise: [
                    "Urological Surgery",
                    "Kidney Stones & Urinary Obstruction",
                    "Male Infertility & Andrology",
                    "Prostate Diseases",
                    "Urinary Incontinence",
                    "Paediatric Urology"
                ]
            }
        ]
    },

    {
        name: "Dermatology",
        icon: "mdi mdi-face-woman-shimmer",
        doctors: [
            {
                name: "Dr. S. Soundharyaa Moorthi",
                qualification: "MBBS, MD (DVL)",
                role: "Consultant Dermatologist & Cosmetologist",
                experience: "7+ Years",
                description:
                    "Dermatologist and Cosmetologist providing comprehensive clinical, skin, hair, and aesthetic care.",
                expertise: [
                    "Acne & Acne Scar Management",
                    "Melasma & Facial Pigmentation",
                    "Hair Loss & Scalp Disorders",
                    "Psoriasis & Eczema",
                    "Allergic Skin Disorders",
                    "Aesthetic Procedures"
                ]
            }
        ]
    },

    {
        name: "ENT, Head & Neck",
        icon: "mdi mdi-ear-hearing",
        doctors: [
            {
                name: "Dr. Prashanth V",
                qualification: "MBBS, MS – ENT",
                role: "Consultant – ENT, Head & Neck Surgeon",
                subRole: "Otorhinolaryngologist",
                experience: "24+ Years Overall | 15+ Years Specialist",
                description:
                    "Experienced ENT and Head & Neck Surgeon with expertise in ear, nose, throat, voice, hearing, sinus, and head & neck conditions.",
                expertise: [
                    "General ENT & Otorhinolaryngology",
                    "Head & Neck Surgery",
                    "Head & Neck Oncology",
                    "Laryngology & Voice Disorders",
                    "Sinus & Nasal Disorders",
                    "Functional Endoscopic Sinus Surgery",
                    "Ear & Hearing Disorders"
                ]
            },
            {
                name: "Dr. Darshan Gowda P V",
                qualification: "MBBS, MS (ENT)",
                role: "Consultant – ENT Specialist",
                experience: "5 Years",
                description:
                    "ENT specialist experienced in diagnosis and treatment of a wide range of ear, nose, and throat disorders.",
                expertise: [
                    "Ear Infections & Hearing Loss",
                    "Sinusitis & Allergic Rhinitis",
                    "Throat Infections & Tonsillitis",
                    "Voice Disorders",
                    "Endoscopic Sinus Surgery",
                    "Vertigo & Balance Disorders"
                ]
            }
        ]
    },

    {
        name: "Psychiatry",
        icon: "mdi mdi-head-cog-outline",
        doctors: [
            {
                name: "Dr. Shivaswamy B M",
                qualification: "MBBS, MD (Psychiatry)",
                role: "Consultant Neuropsychiatrist",
                description:
                    "Consultant Neuropsychiatrist specialising in psychiatric, neuropsychiatric, behavioural, and emotional conditions across different age groups.",
                expertise: [
                    "Neuropsychiatry",
                    "Paediatric Psychiatry",
                    "Depression & Mood Disorders",
                    "Anxiety & Stress-related Disorders",
                    "Bipolar Disorder",
                    "Schizophrenia",
                    "OCD",
                    "Sleep Disorders",
                    "Cognitive & Memory Disorders",
                    "Dementia Care"
                ]
            }
        ]
    },

    {
        name: "Gastroenterology",
        icon: "mdi mdi-stomach",
        doctors: [
            {
                name: "Dr. Sagar P. Kabadi",
                qualification: "MBBS, MD (General Medicine), Specialty Training in Gastroenterology",
                role: "Consultant Medical Gastroenterologist",
                experience: "11+ Years",
                description:
                    "Medical Gastroenterologist with extensive experience in gastrointestinal disorders and more than 10,000 upper gastrointestinal endoscopies.",
                expertise: [
                    "Medical Gastroenterology",
                    "Diagnostic & Therapeutic Endoscopy",
                    "Gastrointestinal Emergencies",
                    "IBD & IBS",
                    "GERD & Recurrent Gastritis",
                    "GI Bleeding",
                    "Pancreatitis",
                    "Liver Diseases"
                ]
            }
        ]
    },

    {
        name: "Surgical Gastroenterology",
        icon: "mdi mdi-stomach",
        doctors: [
            {
                name: "Dr. Gautham M.V.",
                qualification: "M.S. General Surgery, M.Ch. Surgical Gastroenterology",
                role: "Consultant – Surgical Gastroenterology",
                description:
                    "Experienced Surgical Gastroenterologist specialising in complex gastrointestinal and hepatobiliary disorders and advanced gastrointestinal surgery.",
                expertise: [
                    "Gastrointestinal Surgery",
                    "Upper Gastrointestinal Surgery",
                    "Colorectal Surgery",
                    "Hepatobiliary Surgery",
                    "Pancreatic Surgery",
                    "Minimally Invasive & Laparoscopic Surgery",
                    "Complex Abdominal Conditions",
                    "Pre & Post-operative Surgical Care"
                ]
            }
        ]
    },

    {
        name: "Respiratory Medicine",
        icon: "mdi mdi-lungs",
        doctors: [
            {
                name: "Dr. Rekha V. S.",
                qualification: "MBBS, MD – Respiratory Medicine",
                role: "Consultant Pulmonologist | Respiratory Medicine Specialist",
                experience: "11 Years Overall | 3 Years Specialist",
                description:
                    "Consultant Pulmonologist specialising in diagnosis, treatment, and management of respiratory and lung-related conditions.",
                expertise: [
                    "Asthma & Allergic Respiratory Disorders",
                    "COPD",
                    "Chronic Cough",
                    "Respiratory Tract Infections",
                    "Breathing Difficulties",
                    "Lung & Respiratory Disorders"
                ]
            },
            {
                name: "Dr. Karthik Kumar S",
                qualification: "MBBS, MD (Respiratory Medicine)",
                role: "Consultant – Respiratory Medicine",
                experience: "3+ Years",
                description:
                    "Respiratory Medicine Specialist providing evidence-based care for acute and chronic lung diseases.",
                expertise: [
                    "Asthma & Allergy Management",
                    "COPD",
                    "Tuberculosis & Lung Infections",
                    "Interstitial Lung Diseases",
                    "Sleep-related Breathing Disorders",
                    "Smoking Cessation & Preventive Lung Health"
                ]
            }
        ]
    },

    {
        name: "Vascular & Endovascular Surgery",
        icon: "mdi mdi-heart-pulse",
        doctors: [
            {
                name: "Dr. Adarsh Mahadevappa Sudhirkumar",
                qualification:
                    "MBBS, MS (General Surgery), DNB (Vascular & Endovascular Surgery)",
                role: "Consultant – Vascular & Endovascular Surgeon",
                experience: "7+ Years",
                description:
                    "Vascular and Endovascular Surgeon specialising in diseases affecting the arteries, veins, and lymphatic system, including open and minimally invasive procedures.",
                expertise: [
                    "Peripheral Arterial Disease",
                    "Varicose Veins & Venous Insufficiency",
                    "Aneurysm Repair & Endovascular Interventions",
                    "Diabetic Foot & Limb Salvage",
                    "Carotid & Renal Artery Interventions",
                    "AV Fistula & Vascular Access"
                ]
            }
        ]
    },

    {
        name: "Anaesthesia & Pain Medicine",
        icon: "mdi mdi-needle",
        doctors: [
            {
                name: "Dr. Prajwal Gowda C",
                qualification: "MBBS, MD, DNB, FIPM",
                role: "Consultant – Anaesthesia & Pain Medicine",
                experience: "9+ Years",
                description:
                    "Specialist in Anaesthesia and Pain Medicine with special interest in paediatric anaesthesia, regional blocks, and advanced pain management.",
                expertise: [
                    "Paediatric & Adult Anaesthesia",
                    "Regional Anaesthesia & Nerve Blocks",
                    "Acute & Chronic Pain Management",
                    "Perioperative & Critical Care",
                    "Multimodal Pain Therapy"
                ]
            },
            {
                name: "Dr. Vivek Anand",
                qualification: "MBBS, MD (Anesthesiology)",
                role: "Consultant Anesthesiologist",
                experience: "6+ Years",
                description:
                    "Experienced Anesthesiologist providing safe and effective anaesthesia care across a wide range of surgical procedures.",
                expertise: [
                    "General & Regional Anaesthesia",
                    "Preoperative Evaluation & Risk Assessment",
                    "Pain Management",
                    "Critical Care & Patient Monitoring",
                    "Anaesthesia for High-risk & Emergency Surgeries"
                ]
            }
        ]
    },

    {
        name: "Emergency Medicine & Critical Care",
        icon: "mdi mdi-ambulance",
        doctors: [
            {
                name: "Dr. Nagendra Prasad KP",
                qualification: "MBBS, Fellowship in Emergency Medicine & Critical Care",
                role: "Consultant – Emergency Medicine & Critical Care",
                subRole: "Special Interest: Diabetes & Acute Medical Care",
                experience: "9 Years",
                description:
                    "Experienced medical professional specialising in Emergency Medicine, Critical Care, and Diabetes Management, with expertise in acute and critical medical conditions.",
                expertise: [
                    "Emergency Medical Care",
                    "Critical Care Management",
                    "Acute Medical Conditions",
                    "Diabetes & Diabetic Emergencies",
                    "Initial Stabilisation of Critically Ill Patients",
                    "Acute Respiratory & Cardiovascular Conditions",
                    "Medical Emergencies",
                    "Post-emergency Care"
                ]
            }
        ]
    }
];

const Landing = () => {
    return (
        <section className="doctors-team-page">

            <Helmet>
                <title>Aarohi Hospital: Doctors Team</title>
            </Helmet>

            {/* HERO */}
            <div className="doctors-hero">
                <div className="doctors-hero-overlay"></div>

                <div className="container">
                    <div className="doctors-hero-content">
                        <span>AAROHI HOSPITAL</span>
                        <h1>Our Doctors</h1>
                        <p>
                            Experienced specialists providing compassionate,
                            personalised and comprehensive healthcare.
                        </p>
                        <div className="doctors-hero-line"></div>
                    </div>
                </div>
            </div>

            {/* INTRO */}
            <section className="doctors-intro">
                <div className="container">
                    <span className="doctors-section-label">
                        OUR MEDICAL TEAM
                    </span>

                    <h2>
                        Experienced Doctors,
                        <span> Comprehensive Care</span>
                    </h2>

                    <p>
                        Meet the experienced doctors at Aarohi Hospital across
                        our key medical and surgical specialities. Our
                        multidisciplinary team is committed to providing
                        personalised care focused on accurate diagnosis,
                        appropriate treatment, and patient well-being.
                    </p>
                </div>
            </section>

            {/* DEPARTMENTS */}
            <section className="doctors-list-section">
                <div className="container">

                    {departments.map((department, departmentIndex) => (
                        <div
                            className="doctor-department"
                            key={department.name}
                        >

                            <div className="department-heading">
                                <div className="department-icon">
                                    <i className={department.icon}></i>
                                </div>

                                <div>
                                    <span>
                                        DEPARTMENT {String(departmentIndex + 1).padStart(2, "0")}
                                    </span>

                                    <h2>{department.name}</h2>
                                </div>
                            </div>

                            <div className="doctors-grid">

                                {department.doctors.map((doctor) => (
                                    <article
                                        className="doctor-card"
                                        key={doctor.name}
                                    >

                                        <div className="doctor-card-top">
                                            <div className="doctor-avatar">
                                                <i className="mdi mdi-account-doctor"></i>
                                            </div>

                                        </div>

                                        <div className="doctor-card-body">

                                            <h3>{doctor.name}</h3>

                                            <p className="doctor-role">
                                                {doctor.role}
                                            </p>

                                            {doctor.subRole && (
                                                <p className="doctor-subrole">
                                                    {doctor.subRole}
                                                </p>
                                            )}

                                            <div className="doctor-qualification">
                                                {doctor.qualification}
                                            </div>

                                            {doctor.experience && (
                                                <div className="doctor-experience">
                                                    <i className="mdi mdi-briefcase-outline"></i>
                                                    {doctor.experience}
                                                </div>
                                            )}

                                            <p className="doctor-description">
                                                {doctor.description}
                                            </p>

                                            <div className="doctor-expertise">
                                                <h4>Areas of Expertise</h4>

                                                <div className="expertise-list">
                                                    {doctor.expertise.map((item) => (
                                                        <span key={item}>
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>

                                    </article>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>
            </section>

            {/* CTA */}
            <section className="doctors-cta">
                <div className="container">
                    <div className="doctors-cta-inner">

                        <div>
                            <span>YOUR HEALTH, OUR PRIORITY</span>
                            <h2>Need to consult a specialist?</h2>
                            <p>
                                Book an appointment with our experienced
                                doctors and get the care you need.
                            </p>
                        </div>

                        <a
                            href="/appointment"
                            className="doctors-cta-button"
                        >
                            Book an Appointment
                            <span>→</span>
                        </a>

                    </div>
                </div>
            </section>

        </section>
    );
};

export default Landing;