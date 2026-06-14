import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Landing/Landing";
import AboutUs from "../components/AboutUs/AboutUs";
import GeneralMedicineCardiacCare from "../components/Services/SubPages/GeneralMedicine&CardiacCare";
import Orthopedics from "../components/Services/SubPages/Orthopedics";
import PreventiveHealthCheckups from "../components/Services/SubPages/PreventiveHealthCheckups";
import EmergancyCriticalCare from "../components/Services/SubPages/EmergencyCriticalCare";
import Obstetrics from "../components/Services/SubPages/ObstetricsGynaecology";
import Diagnostics from "../components/Services/SubPages/DiagnosticsImagingServices";
import GeneralLaparoscopicSurgery from "../components/Services/SubPages/GeneralLaparoscopicSurgery";
import NeonatologyNewbornCare from "../components/Services/SubPages/NeonatologyNewbornCare";
import Paediatrics from "../components/Services/SubPages/Paediatrics";
import Neurosurgery from "../components/Services/SubPages/Neurosurgery";
import Dermatology from "../components/Services/SubPages/Dermatology";
import Anaesthesiology from "../components/Services/SubPages/Anaesthesiology";
import PainManagement from "../components/Services/SubPages/PainManagement";
import Neurology from "../components/Services/SubPages/Neurology";
import Ent from "../components/Services/SubPages/Ent";
import NephrologyDialysis from "../components/Services/SubPages/NephrologyDialysis";
import Urology from "../components/Services/SubPages/Urology";
import MedicalGastroenterology from "../components/Services/SubPages/MedicalGastroenterology";
import SurgicalGastroenterology from "../components/Services/SubPages/SurgicalGastroenterology";
import PaediatricSurgery from "../components/Services/SubPages/PaediatricSurgery";
import MedicalOncology from "../components/Services/SubPages/MedicalOncology";
import SurgicalOncology from "../components/Services/SubPages/SurgicalOncology";
import VascularSurgery from "../components/Services/SubPages/VascularSurgery";
import Pulmonology from "../components/Services/SubPages/Pulmonology";
import CosmetologyAestheticMedicine from "../components/Services/SubPages/CosmetologyAestheticMedicine";
import Cardiology from "../components/Services/SubPages/Cardiology";
import Omfs from "../components/Services/SubPages/Omfs";
import PlasticSurgery from "../components/Services/SubPages/PlasticSurgery";
import Gynaecology from "../components/Services/SubPages/Gynaecology";
import Careers from "../components/Careers/Careers";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import Blog from "../components/Blog/BlogLanding";
import ThoughtPaper from "../components/ThoughtPaper/ThoughtPaperLanding";
import ThoughtPaperThankYou from "../components/ThoughtPaperThankYou/ThoughtPaperThankYouLanding";
import ContactUs from "../components/ContactUs/ContactUs";
import BookAppointment from "../components/BookAppointment/BookAppointment";
import Thankyou from "../components/ContactUs/Thankyou";
import Thanks from "../components/ContactUs/Thanks";
import Industries from "../components/Industries/Industries";
import Ecommerce from "../components/Industries/SubPages/Ecommerce";
import Banking from "../components/Industries/SubPages/Banking";
import Corporate from "../components/Industries/SubPages/Corporate";
import InternetCompanies from "../components/Industries/SubPages/InternetCompanies";
import Matrimonial from "../components/Industries/SubPages/Matrimonial";
import Dating from "../components/Industries/SubPages/Dating";
import Rental from "../components/Industries/SubPages/Rental";
import Technology from "../components/Technology/Technology";
import Footer from "../components/Footer/Footer";
import FAQ from "../components/FAQ's/FAQ";
import BlogDetails1 from "../components/Blog/BlogDetails1";
import BlogDetails2 from "../components/Blog/BlogDetails2";
import BlogDetails3 from "../components/Blog/BlogDetails3";
import BlogDetails4 from "../components/Blog/BlogDetails4";
import BlogDetails5 from "../components/Blog/BlogDetails5";
import BlogDetails6 from "../components/Blog/BlogDetails6";
import BlogDetails7 from "../components/Blog/BlogDetails7";
import BlogDetails8 from "../components/Blog/BlogDetails8";
import BlogDetails9 from "../components/Blog/BlogDetails9";
import BlogDetails10 from "../components/Blog/BlogDetails10";
import BlogDetails11 from "../components/Blog/BlogDetails11";
import BlogDetails12 from "../components/Blog/BlogDetails12";
import BlogDetails13 from "../components/Blog/BlogDetails13";
import BlogDetails14 from "../components/Blog/BlogDetails14";
import BlogDetails15 from "../components/Blog/BlogDetails15";
import BlogDetails16 from "../components/Blog/BlogDetails16";
import BlogDetails17 from "../components/Blog/BlogDetails17";
import BlogDetails18 from "../components/Blog/BlogDetails18";
import BlogDetails19 from "../components/Blog/BlogDetails19";
import BlogDetails20 from "../components/Blog/BlogDetails20";
import BlogDetails21 from "../components/Blog/BlogDetails21";
import BlogDetails22 from "../components/Blog/BlogDetails22";
import BlogDetails23 from "../components/Blog/BlogDetails23";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "../components/Terms/TermsOfUse";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "react-bootstrap/cjs/Switch";
import ScrollIntoView from "../components/ScrollIntoView";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <ScrollIntoView>
                    <Switch className="pl-0">
                        <Navbar />
                         <main className="page-content">
                        <Routes>
                            <Route path='/' exact element={<Landing />} />
                            <Route path='/about-us' element={<AboutUs />} />
                            <Route path='/general-medicine-cardiac-care' element={<GeneralMedicineCardiacCare/>}/>
                            <Route path='/preventive-health-check-ups' element={<PreventiveHealthCheckups/>}/>
                            <Route path='/emergancy-critical-care' element={<EmergancyCriticalCare/>}/>
                            <Route path='/obstetrics-gynaecology' element={<Obstetrics/>}/>
                            <Route path='/diagnostics-imaging-services' element={<Diagnostics/>}/>
                            <Route path='/general-laparoscopic-surgery' element={<GeneralLaparoscopicSurgery/>}/>
                            <Route path='/orthopedics' element={<Orthopedics/>}/>
                            <Route path='/neonatology-newborn-care' element={<NeonatologyNewbornCare/>}/>
                            <Route path='/paediatrics' element={<Paediatrics/>}/>
                            <Route path='/neurosurgery' element={<Neurosurgery/>}/>
                            <Route path='/dermatology' element={<Dermatology/>}/>
                            <Route path='/anaesthesiology' element={<Anaesthesiology/>}/>
                            <Route path='/neurology' element={<Neurology/>}/>
                            <Route path='/nephrology' element={<NephrologyDialysis/>}/>
                            <Route path='/ent' element={<Ent/>}/>
                            <Route path='/pain' element={<PainManagement/>}/>
                            <Route path='/urology' element={<Urology/>}/>
                            <Route path='/medical-gastroenterology' element={<MedicalGastroenterology/>}/>
                            <Route path='/surgical-gastroenterology' element={<SurgicalGastroenterology/>}/>
                            <Route path='/paediatric-surgery' element={<PaediatricSurgery/>}/>
                            <Route path='/medical-oncology' element={<MedicalOncology/>}/>
                            <Route path='/surgical-oncology' element={<SurgicalOncology/>}/>
                            <Route path='/vascular-surgery' element={<VascularSurgery/>}/>
                            <Route path='/pulmonology' element={<Pulmonology/>}/>
                            <Route path='/omfs' element={<Omfs/>}/>
                            <Route path='/cosmetology' element={<CosmetologyAestheticMedicine/>}/>
                            <Route path='/cardiology' element={<Cardiology/>}/>
                            <Route path='/plastic-surgery' element={<PlasticSurgery/>}/>
                            <Route path='/gynaecology' element={<Gynaecology/>}/>
                            <Route path='/careers' element={<Careers />} />
                            <Route path='/case-studies' element={<CaseStudies />} />
                            <Route path='/blog' element={<Blog />} />
                            <Route path='/thought-paper' element={<ThoughtPaper />} />
                            <Route path='/thought-paper-thank-you' element={<ThoughtPaperThankYou />} />
                            <Route path='/industries' element={<Industries />} />
                            <Route path='/ecommerce' element={<Ecommerce />} />
                            <Route path='/bfsi' element={<Banking />} />
                            <Route path='/corporate' element={<Corporate />} />
                            <Route path='/internetcompanies' element={<InternetCompanies />} />
                            <Route path='/matrimonial' element={<Matrimonial />} />
                            <Route path='/online-dating' element={<Dating />} />
                            <Route path='/rental' element={<Rental />} />
                            <Route path='/contact' element={<ContactUs />} />
                            <Route path='/appointment' element={<BookAppointment />} />
                            <Route path='/thankyou' element={<Thankyou />} />
                            <Route path='/thanks' element={<Thanks />} />
                            <Route path='/faq' element={<FAQ />} />
                            <Route path='/blog1' element={<BlogDetails1 />} />
                            <Route path='/blog2' element={<BlogDetails2 />} />
                            <Route path='/blog3' element={<BlogDetails3 />} />
                            <Route path='/blog4' element={<BlogDetails4 />} />
                            <Route path='/blog5' element={<BlogDetails5 />} />
                            <Route path='/blog6' element={<BlogDetails6 />} />
                            <Route path='/blog7' element={<BlogDetails7 />} />
                            <Route path='/dont-let-your-delivery-agents-damage-your-brand' element={<BlogDetails8 />} />
                            <Route path='/safeguard-against-interview-impersonation' element={<BlogDetails9 />} />
                            <Route path='/preventing-insurance-pension-fraud' element={<BlogDetails10 />} />
                            <Route path='/Shut-the-door-on-fraud-with-eKYC' element={<BlogDetails11 />} />
                            <Route path='/add-trust-to-your-service-platform' element={<BlogDetails12 />} />
                            <Route path='/your-employees-and-partners-are-your-assets' element={<BlogDetails13 />} />
                            <Route path='/How-to-make-your-platforms-more-holistic-by-integrating-employee-verification-solutions' element={<BlogDetails14 />} />
                            <Route path='/How-financial-businesses-integrate-video-KYC' element={<BlogDetails15 />} />
                            <Route path='/Hiring-employees-is-hard' element={<BlogDetails16 />} />
                            <Route path='/How-to-Reduce-Customer-Onboarding-Time' element={<BlogDetails17 />} />
                            <Route path='/The-Crucial-Role-of-UAN-Verification-in-Employment-Background-Checks' element={<BlogDetails18 />} />
                            <Route path='/The-Dangers-of-Interview-Impersonation-How-to-Protect-Your-Organization' element={<BlogDetails19 />} />
                            <Route path='/Enhancing-Revenue-and-Customer-Acquisition-through-Digital-Verification-and-KYC' element={<BlogDetails20 />} />
                            <Route path='/The-Rising-Threat-of-AI-and-Deep-Fakes-in-Job-Interviews' element={<BlogDetails21 />} />
                            <Route path='/Recognizing-Employee-Fraud-Types-to-Safeguard-Your-Business' element={<BlogDetails22 />} />
                            <Route path='/The-business-of-impersonation-and-how-it-affects-yours' element={<BlogDetails23 />} />
                            <Route path='/technology' element={<Technology />} />
                            <Route path='/privacy' element={<PrivacyPolicy />} />
                            <Route path='/tnc' element={<TermsOfUse />} />
                        </Routes>
                        </main>
                        <Footer />
                    </Switch>
                </ScrollIntoView>
            </div>
        </BrowserRouter>
    );
};

export default App;
