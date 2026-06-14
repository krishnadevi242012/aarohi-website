import React,{useState,useEffect} from "react";
import { Link, useNavigate} from "react-router-dom";
import { Helmet } from 'react-helmet';
import DocViewer from "react-doc-viewer";
import PDFRenderer from "react-doc-viewer/build/plugins/pdf";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";

const Landing = () => {
    const [showModal, setShowModal] = useState(false);
    const [validated, setValidated] = useState(false);
    const [activeButton, setactiveButton] = useState(true);
    const [captchaText, setCaptchaText] = useState('');
    const [captchaSum, setCaptchaSum] = useState(Number);
    useEffect(() => {
        generateCaptcha();
    }, []);

    function generateCaptcha() {
        const numberOne = Math.floor(Math.random() * 10) + 1;
        const numberTwo = Math.floor(Math.random() * 10) + 1;
        const sum = numberOne + numberTwo;
        let captcha= numberOne + "+" +numberTwo;
        setCaptchaText(captcha)
        setCaptchaSum(sum);
    }
    const handleClose = () => {
        setShowModal(false);
    }

    const handleShow = () => {
        setShowModal(true);
        generateCaptcha();
    }

    async function interviewImpersonationFormValidation(event) {
        const form = event.currentTarget;
        var captcha = document.getElementById('mauticform_input_evaldatasheetdownload_solve_this_85').value;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else if (captchaSum != captcha){
            event.preventDefault();
            event.stopPropagation();
            alert("Please solve the puzzle");
        }else{
            event.preventDefault();
            event.stopPropagation();

            var firstName = document.getElementById('mauticform_input_evaldatasheetdownload_first_name').value;
            var lastName = document.getElementById('mauticform_input_evaldatasheetdownload_last_name').value;
            var emailId = document.getElementById('mauticform_input_evaldatasheetdownload_email_id').value;
            var companyName = document.getElementById('mauticform_input_evaldatasheetdownload_company_name').value;
            var remarks ="interview_impersonation_datasheet";
            const postData = { "firstName": firstName, "lastName": lastName, "emailId": emailId, "companyName": companyName, "remarks": remarks }
            let logContact = await axios.post("https://www.verify.evaluationz.com:304/api/webSiteDocumentDownload", postData);
            if (logContact.status === 200) {
                setValidated(true);
                navigate('/thanks');
            }
        }
    }
    function onChange(e) {
        e.persist();
        var firstName = document.getElementById('mauticform_input_evaldatasheetdownload_first_name').value;
        var lastName = document.getElementById('mauticform_input_evaldatasheetdownload_last_name').value;
        var email = document.getElementById('mauticform_input_evaldatasheetdownload_email_id').value;
        var captcha = document.getElementById('mauticform_input_evaldatasheetdownload_solve_this_85').value;

        if (firstName=== "" || lastName=== "" || email=== "" || captcha=== "") {
            setactiveButton(true)
        } else {
            setactiveButton(false)
        }
    }

    const navigate = useNavigate();
    const docs = [
        { uri: require("../../Interview-Impersonation-datasheet.pdf") },
    ];

    return (
        <section>
            <Helmet>
                <title>Evaluationz: Corporate</title>
                {/*{(window.location.pathname === '/corporate') &&*/}
                {/*<script src="//evaluationz.mykampaign.com/focus/10.js" type="text/javascript" charset="utf-8"*/}
                {/*        async="async"/>*/}
                {/*}*/}
                <meta name="description" content="See how Evaluationz brings security to the corporate through verification" />
                <meta name="keywords" content="address verification, criminal verification, drug panel testing, employment verification, education verification, employee verification, user verification, vendor verification, Identity check, Social Media Check, Reference check, Drug test, Digital verification, passport verification, credit check, API Integration, Reduced TAT, Real time verification, verification Specialist, NASCOM empanelled, credit score check, Evaluationz, Evaluationz India Pvt. Ltd., Verification India, AI, Artificial Intelligence, BlueG, Coporate verification, IT Verification, Ites Verification, Banking and Financial Services Industry Verification, Automative verification, eCommerce verification, healthcare verification, rental verificaion, matrimonial verification, hyperlocal verification, blue collar verification, white collar verification"/>
                <meta property="og:description" content="See how Evaluationz brings security to the corporate through verification" />
                <meta property="og:url" content="https://www.evaluationz.com/corporate" />
                <meta property="og:image" content="https://www.evaluationz.com/images/favicon.jpg" />
                <meta property="og:image:secure_url" content="https://www.evaluationz.com/images/favicon.jpg" />
                <meta name="twitter:image" content="https://www.evaluationz.com/images/favicon.jpg" />
                {/*<script type="text/javascript" src="https://evaluationz.mykampaign.com/media/js/mautic-form.js" data-onload="MauticSDK.onLoad()" />*/}
                {/*<script>{`MauticDomain = 'https://evaluationz.mykampaign.com'; MauticLang = {'submittingMessage': "Please wait..."};`}</script>*/}
            </Helmet>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h5 className="text-black font-weight-bolder">Register Now For Download</h5>
                </Modal.Header>
                <Modal.Body>
                    <div id="mauticform_wrapper_evaldatasheetdownload" className="mauticform_wrapper">
                        <Form noValidate validated={validated} onSubmit={interviewImpersonationFormValidation} autoComplete="off" role="form"  id="mauticform_evaldatasheetdownload" data-mautic-form="evaldatasheetdownload" enctype="multipart/form-data">
                            <div className="mauticform-error" id="mauticform_evaldatasheetdownload_error"></div>
                            <div className="mauticform-message" id="mauticform_evaldatasheetdownload_message"></div>
                            <div className="mauticform-innerform">
                                <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
                                    <div id="mauticform_evaldatasheetdownload_first_name" data-validate="first_name" data-validation-type="text" className="mauticform-row mauticform-text mauticform-field-1 mauticform-required">
                                        <label id="mauticform_label_evaldatasheetdownload_first_name" for="mauticform_input_evaldatasheetdownload_first_name" className="mauticform-label">First Name</label>
                                        <Form.Control id="mauticform_input_evaldatasheetdownload_first_name" name="mauticform[first_name]" className="mauticform-input" type="text" onChange={onChange} />
                                        <span className="mauticform-errormsg" style={{ display: 'none' }}>Please provide your first name</span>
                                    </div>

                                    <div id="mauticform_evaldatasheetdownload_last_name" data-validate="last_name" data-validation-type="text" className="mauticform-row mauticform-text mauticform-field-2 mauticform-required">
                                        <label id="mauticform_label_evaldatasheetdownload_last_name" for="mauticform_input_evaldatasheetdownload_last_name" className="mauticform-label">Last Name</label>
                                        <Form.Control id="mauticform_input_evaldatasheetdownload_last_name" name="mauticform[last_name]" className="mauticform-input" type="text" onChange={onChange} />
                                        <span className="mauticform-errormsg" style={{ display: 'none' }}>This is required.</span>
                                    </div>

                                    <div id="mauticform_evaldatasheetdownload_email_id" data-validate="email_id" data-validation-type="email" className="mauticform-row mauticform-email mauticform-field-3 mauticform-required">
                                        <label id="mauticform_label_evaldatasheetdownload_email_id" for="mauticform_input_evaldatasheetdownload_email_id" className="mauticform-label">Email Id</label>
                                        <Form.Control id="mauticform_input_evaldatasheetdownload_email_id" name="mauticform[email_id]" className="mauticform-input" type="email" onChange={onChange} />

                                        <span className="mauticform-errormsg" style={{ display: 'none' }}>Please provide your valid email address</span>
                                    </div>

                                    <div id="mauticform_evaldatasheetdownload_company_name" className="mauticform-row mauticform-text mauticform-field-4">
                                        <label id="mauticform_label_evaldatasheetdownload_company_name" for="mauticform_input_evaldatasheetdownload_company_name" className="mauticform-label">Company Name</label>
                                        <Form.Control id="mauticform_input_evaldatasheetdownload_company_name" name="mauticform[company_name]" className="mauticform-input" type="text" />
                                        <span className="mauticform-errormsg" style={{ display: 'none' }}></span>
                                    </div>

                                    <div id="mauticform_evaldatasheetdownload_solve_this_85" data-validate="solve_this_85" data-validation-type="captcha" className="mauticform-row mauticform-text mauticform-field-5 mauticform-required">
                                        <label id="mauticform_label_evaldatasheetdownload_solve_this_85" for="mauticform_input_evaldatasheetdownload_solve_this_85" className="mauticform-label">Solve this {captchaText}</label>
                                        <Form.Control id="mauticform_input_evaldatasheetdownload_solve_this_85" name="mauticform[solve_this_85]" className="mauticform-input" type="text" onChange={onChange} />
                                        <span className="mauticform-errormsg" style={{ display: 'none' }}>This is required.</span>
                                    </div>

                                    <div id="mauticform_evaldatasheetdownload_submit" className="mauticform-row mauticform-button-wrapper mauticform-field-6 row text-center">
                                        <div className="col-12">
                                            <Button type="submit" name="mauticform[submit]" id="mauticform_input_evaldatasheetdownload_submit" className="" disabled={activeButton}>Get Datasheet</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Form.Control id="mauticform_evaldatasheetdownload_id" name="mauticform[formId]" value="4"  type="hidden" />
                            <Form.Control id="mauticform_evaldatasheetdownload_return" name="mauticform[return]" value=""  type="hidden" />
                            <Form.Control id="mauticform_evaldatasheetdownload_name" name="mauticform[formName]" value="evaldatasheetdownload"  type="hidden" />
                        </Form>
                    </div>
                </Modal.Body>

            </Modal>

            <div className="about-section bg-white py-4 mt-5">
                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-image text-md-left text-center">
                                <img src="images/industries/corporate/image-1.jpg"
                                     alt="shape"
                                     className="blue-image-left shadow-2xl" />
                            </div>
                        </div>

                        <div className="col-lg-6 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h1 className="c-blue font-weight-bolder">Make sure you hire right for your corporate </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-black pt-4 pb-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <p className="text-white">The most widespread use of verification has traditionally been employee verification for corporates. Verification in the corporate employment space comes in useful in three main areas.</p>
                                    <p className="text-white font-weight-bold mb-0">Identity, education, and employment verification</p>
                                    <p className="text-white">Digital ID verification is just the first part of the process.  In verticals like IT, ITeS, Banking, Financial Services, Insurance, Automotive, eCommerce, and Healthcare, where qualifications and skills are of utmost importance, instances of falsification of academic qualifications and employment are on the rise. In fact, India reports almost up to 25% of resume fabrication in employment and the largest misrepresentation of academic qualifications. Evaluationz (A NASSCOM NSR Empanelled company) with 16+ years expertise in this space has put together robust verification processes that detect and flag these frauds.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <p className="text-black font-weight-bold mb-0">Interview impersonation</p>
                                    <p className="text-black">Instances of impersonation during interviews, especially during remote hiring, are skyrocketing. The person who is being interviewed may not be the same person you are hiring.  Evaluationz’s verification solution compares and matches the candidate’s face/ voice/ audio video sample along with their government ID during the initial video call. The software uses 3-factor authentication (Face, Voice, Government ID) and flags mismatches in real-time, giving customer onboarding teams the option of rejecting or declining the candidate profile immediately. </p>

                                    <div className={'row mb-5'}>
                                        {/*<div className={'col-12'}>
                                            <p className="text-black mb-2">
                                                Information on Interview Impersonation. <a className={'link no-wrap font-weight-bold cursor-pointer'}
                                                                                           href={require("../../Interview-Impersonation-datasheet.pdf")}
                                                                                           download="Interview Impersonation Datasheet">Click to download</a>
                                                Information on Interview Impersonation. <a className={'link no-wrap font-weight-bold cursor-pointer'}
                                                                                           download="Interview-Impersonation-datasheet" onClick={() => handleShow()}>Click to download</a>

                                            </p>
                                        </div>*/}

                                        <div className={'col-12'}>
                                            <div className="ekyc-doc-viewer shadow-sm">
                                                {/*<DocViewer documents={docs}*/}
                                                {/*           pluginRenderers={[PDFRenderer]}*/}
                                                {/*           className={'w-100'}*/}
                                                {/*           style={{height: 180}}/>*/}
                                                <img src="images/services/interview-impersonation/interviewimpersonation1.png"
                                                     alt="interviewimpersonation" />
                                                <div className={'col-12 download-bg-block'}>
                                                    {/*<a className={'cursor-pointer'}*/}
                                                    {/*   href={require("../../Interview-Impersonation-datasheet.pdf")}*/}
                                                    {/*   download="Interview Impersonation Datasheet">*/}
                                                    {/*    <div className="download-bg cursor-pointer">*/}
                                                    {/*        <div className="blur-bg"/>*/}
                                                    {/*        <div className="col-12 p-0 text-center text-block text-white">*/}
                                                    {/*            <i className="mdi mdi-download c-white f-20"/>*/}
                                                    {/*            <p className="text-white f-13 mb-0">Download</p>*/}
                                                    {/*        </div>*/}
                                                    {/*    </div>*/}
                                                    {/*</a>*/}
                                                    <a className={'cursor-pointer'} onClick={() => handleShow()}>
                                                        <div className="download-bg cursor-pointer">
                                                            <div className="blur-bg"/>
                                                            <div className="col-12 p-0 text-center text-block ekyc-text-block text-white">
                                                                <p className="text-white font-weight-bold f-13 mb-0">Information on Interview Impersonation</p>
                                                                <button type="button" className="btn btn-primary btn-red">Download</button>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-black font-weight-bold mb-0">Dual employment or moonlighting verification </p>
                                    <p className="text-black mb-0">Remote and hybrid working have seen the rise of employees moonlighting or undertaking simultaneous employment with more than one firm. Companies have differing policies on dual employment; some allow it subject to certain conditions, and some outrightly ban it. Either way, companies need to know whether their employees are moonlighting without their knowledge. Evaluationz’s verification solution can help track and detect employees who are behaving unethically. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white pb-5">
                <div className="container">
                    <h3 className="c-blue">
                        Recommended Verifications
                    </h3>

                    <div className="row align-items-center mt-4">
                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/icon-1.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Digital Identity Verification
                            </span>
                        </div>

                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/icon-2.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Digital Address Verification
                            </span>
                        </div>

                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/icon-3.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                               Employment Verification
                            </span>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4">
                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/icon-4.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Education Verification
                            </span>
                        </div>

                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/icon-5.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                               Criminal Record Check
                            </span>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/icon-6.png" alt="shape" width="80"/>
                            <span className="text-black ml-2">
                                Drug Test
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-black py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left text-start">
                                    <h2 className="c-red">The Evaluationz Edge</h2>
                                </div>
                                <div className="about-content">
                                    <p className="text-white">Our comprehensive verifications process builds on Evaluationz’ proprietary BlueG platform that uses artificial intelligence, and
                                        componentized government identity documents and databases.</p>

                                    <p className="text-white">
                                        Evaluationz verifications is made incredibly convenient and quick with seamless API integration with existing ATS and HRIS
                                        systems. The HR department gets easy interactions that feel like the native application that they are used to while the process
                                        is intuitive and transparent for the potential candidate.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mt-4">
                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/icon-7.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Seamless API Integration
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/icon-8.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                               Intuitive And Hassle-free Process
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/icon-9.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Multiple Payment Options
                            </span>
                        </div>

                        <div className="col-md-3 d-flex align-items-center justify-content-start">
                            <img src="images/industries/corporate/icon-10.png" alt="shape" width="80"/>
                            <span className="text-white ml-2">
                                Automatically Trigger Initial And Repeat Verifications
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 py-2 cursor-pointer" onClick={() => navigate(`/safeguard-against-interview-impersonation`)}>
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
                        <div className="col-md-4 py-2 cursor-pointer" onClick={() => navigate(`/blog7`)}>
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
                        <div className="col-md-4 py-2 cursor-pointer" onClick={() => navigate(`/your-employees-and-partners-are-your-assets`)}>
                            {/*onClick={() => history.push(`/your-employees-and-partners-are-your-assets`)}>*/}
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left">
                                    <img src="images/blogs/blog-13/blog-13.png" alt="blog" className="w-100"/>
                                </div>
                                <div className="card-body">
                                    <h4>Your employees and partners are your assets, but could they become your liabilities?</h4>
                                    <p className="mb-0">As a company, your business runs on trust.
                                        You deal with people and organizations – whether employees, customers, or vendors – with the belief that they are whom they claim to be, and that they will do what they are supposed to do.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section bg-white pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/technology"
                                  target="_blank"
                                  className="btn btn-primary btn-white shadow-lg">
                                For more details on the BlueG platform and API integration, go here
                            </Link>
                        </div>

                        <div className="col-12 mt-4">
                            <Link to="/services"
                                  target="_blank"
                                  className="btn btn-primary btn-white shadow-lg">
                                For more information on our Services, go here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;

