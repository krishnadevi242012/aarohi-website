import React, {useEffect} from "react";
import { Helmet } from 'react-helmet';
import {Link, useNavigate} from "react-router-dom";
import {Button, Form, Modal} from "react-bootstrap";
/*import {useState} from "@types/react";*/
import {useState} from "react";
import DocViewer from "react-doc-viewer";
import PDFRenderer from "react-doc-viewer/build/plugins/pdf";
import axios from "axios";

const BlogDetails = () => {
    const [showModal, setShowModal] = useState(false);
    const [validated, setValidated] = useState(false);
    const [activeButton, setactiveButton] = useState(true);
    const [documentName, setdocumentName] = useState('');

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

    const handleClose = () =>{
        setShowModal(false);
    }
    const handleShow = () => {
        setShowModal(true);
        generateCaptcha();
    }
    const documentOption = (name) =>{
        setdocumentName(name);
    }
    const navigate = useNavigate();
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
            var remarks = documentName;
            const postData = { "firstName": firstName, "lastName": lastName, "emailId": emailId, "companyName": companyName, "remarks": remarks}
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
        }
        else {
            setactiveButton(false)
        }
    }
    const docs = [
        { uri: require("../Interview-Impersonation-datasheet.pdf") },
    ];
    return (
        <section>
            <Helmet>
                <title>Evaluationz: Blog</title>
                {/*{(window.location.pathname === '/The-Dangers-of-Interview-Impersonation-How-to-Protect-Your-Organization') &&*/}
                {/*    <script src="https://evaluationz.mykampaign.com/form/generate.js?id=5" type="text/javascript" charset="utf-8"*/}
                {/*            async="async"/>*/}
                {/*}*/}
                <meta name="description" content="Read our blogs on the latest news and thoughts surrounding verification"/>
                <meta name="keywords" content="Employee verification, background verification, vendor verification, interview fraud, interview impersonation, secure workplace, return to work, hybrid work model, remote hiring, ATS, HRIS, hire with confidence " />
                <meta property="og:title" content="The Dangers of Interview Impersonation: How to Protect Your Organization | Evaluationz" />
                <meta property="og:description" content="Read our blogs on the latest news and thoughts surrounding verification"/>
                <meta property="og:url" content="https://www.evaluationz.com/The-Dangers-of-Interview-Impersonation-How-to-Protect-Your-Organization" />
                <meta property="og:image" content="https://www.evaluationz.com/images/blogs/blog-19/blog-19.png" />
                <meta property="og:image:secure_url" content="https://www.evaluationz.com/images/blogs/blog-19/blog-19.png" />
                <meta name="twitter:image" content="https://www.evaluationz.com/images/blogs/blog-19/blog-19.png" />
                {/*<script type="text/javascript" src="https://evaluationz.mykampaign.com/media/js/mautic-form.js" data-onload="MauticSDK.onLoad()" />*/}
                {/*<script>{`MauticDomain = 'https://evaluationz.mykampaign.com'; MauticLang = {'submittingMessage': "Please wait..."};`}</script>*/}

            </Helmet>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h5 className="text-black font-weight-bolder">Register Now For Download</h5>
                </Modal.Header>
                <Modal.Body>
                    <div id="mauticform_wrapper_evaldatasheetdownload" className="mauticform_wrapper">
                        <Form noValidate validated={validated} onSubmit={interviewImpersonationFormValidation} autoComplete="off" role="form" id="mauticform_evaldatasheetdownload" data-mautic-form="evaldatasheetdownload" enctype="multipart/form-data">
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
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left mb-0 text-start">
                                    <h1 className="text-black font-weight-bolder">The Dangers of Interview Impersonation: How to Protect Your Organization
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section col-md-10 p-0 m-0">
                <img src="images/blogs/blog-19/blog-19.png" alt="shape" className="blog-details-image" />
            </div>

            <div className="about-section bg-white py-5 blue-image-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="about-content">
                                    <p className="text-black font-weight-bold mb-0">Introduction</p>
                                    <p className="text-black font-weight-normal">Hiring the right candidate is decisive for any organization's success.
                                        Remote working opportunities and virtual hiring have increased the possibility of interview fraud.
                                        Writer Shivangi Singh on LinkedIn notifies that the recruiting team estimates 15-20% of candidates appearing in the interview are dishonest in the way they present themselves.
                                        Additional shocking statistics from an article on HirePro includes:<br/><br/>
                                        •	There has been a 92% increase in interview fraud since the pandemic.<br/>
                                        •	21% of candidates engage in cheating in a controlled testing environment.<br/><br/>
                                        Hiring the wrong person can lead to costly consequences, including decreased productivity, loss of business, and damage to the organization’s reputation. Moreover, interview fraud, where candidates misrepresent themselves during the hiring process, poses a growing threat to organizations.
                                    </p>

                                    <p className="text-black font-weight-bold mb-0">Cost of Hiring </p>

                                    <p className="text-black font-weight-normal">Hiring an employee is expensive. The per-hire cost varies based on factors like industry, job role, location, and specific recruitment method. In an article written by  Dr. Vishal Sangale (CEO and Co-founder - Traitfit)on LinkedIn estimates the cost per hire is about Rs. 25500 nearly for all industries. This is nearly equal to a salary for a month for an average package of Rs. 3 – 4 lakhs per annum.</p>

                                    <p className="text-black font-weight-bold mb-0">Challenges of mass hiring and remote hiring</p>
                                    <p className="text-black font-weight-normal">Interviewees use multiple counterfeit tactics in virtual interviews. Here are some challenges encountered during virtual interviews:
                                        <p className="text-black font-weight-bold mb-0">•	Camera Issue: </p> The candidate is not ready to be on camera or they may appear on the camera with low lighting.
                                            <p className="text-black font-weight-bold mb-0">•	Audio Issue:</p> Even if the candidate appears on camera, where the candidate lip-syncs during the interview, while someone else responds off-camera.
                                                <p className="text-black font-weight-bold mb-0"> •	Impersonation:</p> Candidates use video morphing tools to get the interviews cleared.<br/><br/>
                                        When hiring at a large scale, assessing the quality of the candidate is a great challenge. Rushed hiring decision leads to selecting the wrong candidate as the interview and payment for the interview panellist are timebound.<br/><br/>
                                        Mass hiring may result in a higher risk of onboarding a fraudulent candidate who does not possess the right skillset.
                                    </p>

                                    <p className="text-black font-weight-bold mb-0"> Examples of different interview fraud models</p>
                                    <p className="text-black font-weight-normal"> Companies are tussling with impersonation. The person you hire is not the one who comes to work.<br/><br/>
                                        <p className="text-black font-weight-bold mb-0"> Example 1: Remote working</p>
                                        Executives at an IT company were speculative why the employee they had hired recently, refused to join video calls. The team lead was confused, as the employee had appeared on camera during interviews while being recruited. So, they decided to call the workforce to the office. When the employee was at the office, the lead met the new employee and realized that this wasn't the person who had shown up during the interviews.
                                        <br/><br/>
                                        <p className="text-black font-weight-bold mb-0"> Example 2: Impersonation</p>
                                        During a technical interview, the interviewer was astonished by the technical proficiency of the candidate. However, after a month of joining, the company finds that the candidate is not skilful for the job role. After investigation, the hiring team identified that the candidate was impersonating.

                                        This kind of impersonation is happening mostly in IT firms where recruitment is in bulk and when interviews are happening remotely. Over the years interview fraud has been increasing and become a threat to hiring managers.
                                    </p>

                                    <p className="text-black font-weight-bold mb-0">Introducing the digital verification model – iCatch</p>
                                    <p className="text-black font-weight-normal">Preventing interview fraud is vital for various reasons like protecting the organization’s reputation, minimizing hiring costs and ensuring workforce competence.<br/><br/>
                                        Evaluationz’ is presenting an on-demand API–integrated interview impersonation detection tool, powered by AI. This tool precisely identifies the authenticity of the candidate up to 99% across various stages of the interview process in real time. Evaluationz’ verification solution starts from the initial round of interviews and right up to the onboarding of the candidate.
                                    </p>

                                    <p className="text-black font-weight-bold mb-0 fs-5">Key features of ICatch</p><br/>
                                    <p className="text-black font-weight-normal"><p className="text-black font-weight-bold mb-0">Three-point authentication</p>
                                        The three-point authentication is a robust method that combines face recognition, voice identity and government identification proof to strengthen impersonation detection. This API (Application Programming Interface) compares and matches the candidate’s face/ voice, video/audio samples along with identification proof (government ID) during the various rounds of interviews.<br/><br/>
                                        <p className="text-black font-weight-bold mb-0">•	Face recognition – </p>face recognition technology captures the multiple images of the face during live video. The application analyses the face features and compares and cross-verifies the live images with the reference images of the candidate captured on each round of interviews.<br/><br/>
                                        <p className="text-black font-weight-bold mb-0">•	 Voice Identity – </p>this is another crucial element of 3-point authentication. This technology verifies the candidate’s voice by assessing factors like pitch, tone and other vocal characteristics and cross-verifies with the voice samples gathered at various rounds of interviews to ensure that the person talking is the one that appears on the camera.<br/><br/>
                                        <p className="text-black font-weight-bold mb-0">•	Government identification proof – </p>traditional identification also plays a pivotal role in 3-point authentication. The data available in the government database establishes the identity of the candidate.
                                        Video and audio data gathered during each round is used as a reference to cross-verify at various stages of the interview and ensures that the same individual appears for every round till the physical onboarding stage. 3-point authentication guarantees that identity proof provided by the person is the one appearing on the camera and the same is speaking during the interview. This helps maintain the integrity of the hiring process.<br/><br/>
                                        <p className="text-black font-weight-bold mb-0">Real-time detection</p>
                                        iCatch has an option to live monitor the video and audio feeds. The software flags any discrepancy in the video and audio in real time and sends a notification to the recruitment team whether to reject or withdraw the candidate’s profile immediately. This can effectively lower the cost and time.<br/><br/>
                                        <p className="text-black font-weight-bold mb-0">Multi-platform support</p>
                                        This application is widely supported on any online interview platforms like Google Meet, Microsoft Teams, Zoom etc.<br/><br/>
                                        <p className="text-black font-weight-bold mb-0">Integrates with legacy HRMS/HRIS and ATS</p>
                                        This API can be easily integrated into any existing HRMS (Human Resource Management System)/HRIS (Human Resource Information System) and ATS(Application Tracking System). This makes the process seamless, and detection is human error-free.<br/><br/>
                                    </p>

                                    <p className="text-black font-weight-bold mb-0">Conclusion</p>
                                    <p className="text-black font-weight-normal">Preventing interview fraud is not just a matter of protecting an organization from deceptiveness; it is crucial for safeguarding the organization's reputation, overall ethical and operational integrity, and business losses. By implementing iCatch to detect and prevent interview fraud, organizations can ensure that they hire qualified and trustworthy individuals who will contribute positively to their success.</p>

                                    <div className={'row mb-5'}>
                                        <div className={'col-md-6'}>
                                            <p className="text-black mb-2 fw-bold fs-6">
                                                {/*Information on e-KYC. <a className={'link no-wrap font-weight-bold cursor-pointer'}*/}
                                                {/*                         href={require("../../Interview-Impersonation-datasheet.pdf")}*/}
                                                {/*                         download="Interview-Impersonation-datasheet">Click to download</a>*/}
                                                Download our Brochure on Interview Impersonation
                                            </p>
                                            <div className="user-card h-100 blog-card bg-white">
                                                <div className="about-section-item about-item-image text-center blue-image-left content-view">
                                                    {/*<object data="pdf/thought-paper/thought-paper-1.pdf" type="application/pdf" width="100%" height="500px">
                                        <p>Unable to display PDF file. <a href="pdf/thought-paper/thought-paper-1.pdf">Download</a> instead.</p>
                                    </object>*/}

                                                    <img src="images/services/interview-impersonation/interviewimpersonation.png" alt="interviewimpersonation"/>
                                                    {/*<embed src="pdf/Interview-Impersonation/Interview-Impersonation-datasheet.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                                           height="425" className="w-100"/>*/}
                                                    <div className="content-overlay"></div>

                                                    <div className="content-details fadeIn-bottom">
                                                        <h3 className="content-icon">
                                                            <i className="mdi mdi-download" onClick={handleShow}/>
                                                        </h3>
                                                    </div>
                                                </div>

                                                <div className="card-body text-center">
                                                    <h4 className="mb-4">Interview Impersonation</h4>
                                                    <a onClick={() => {handleShow(); documentOption("interview_impersonation_datasheet");}}
                                                       className="btn btn-primary btn-red shadow-sm">Download</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={'col-md-6'}>
                                            <p className="text-black mb-2 fw-bold fs-6">
                                                {/*Information on e-KYC. <a className={'link no-wrap font-weight-bold cursor-pointer'}*/}
                                                {/*                         href={require("../../Interview-Impersonation-datasheet.pdf")}*/}
                                                {/*                         download="Interview-Impersonation-datasheet">Click to download</a>*/}
                                                Download our Thought Paper on Interview Impersonation
                                            </p>
                                            <div className="user-card h-100 blog-card bg-white">
                                                <div className="about-section-item about-item-image text-center blue-image-left content-view">
                                                    {/*<object data="pdf/thought-paper/thought-paper-1.pdf" type="application/pdf" width="100%" height="500px">
                                        <p>Unable to display PDF file. <a href="pdf/thought-paper/thought-paper-1.pdf">Download</a> instead.</p>
                                    </object>*/}

                                                    <img src="images/services/interview-impersonation/white-paper-img.png" alt="interviewimpersonation"/>
                                                    {/*<embed src="pdf/thought-paper/thought-paper-1.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                                           height="425" className="w-100"/>*/}
                                                    <div className="content-overlay"></div>

                                                    <div className="content-details fadeIn-bottom">
                                                        <h3 className="content-icon">
                                                            <i className="mdi mdi-download" onClick={handleShow}/>
                                                        </h3>
                                                    </div>
                                                </div>

                                                <div className="card-body text-center">
                                                    <h4 className="mb-4">Unmasking Interview Impersonation: Securing Hiring</h4>
                                                    <a onClick={() => {handleShow(); documentOption("unmasking_thought_paper");}}
                                                       className="btn btn-primary btn-red shadow-sm">Download</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*<div className={'row mb-5'}>
                                        <div className={'col-12'}>

                                                    <div className="row d-flex justify-content-between">
                                                        <div className="col-md-6 py-2 cursor-pointer">
                                                            <div className="user-card h-100 blog-card bg-white">
                                                                <div className="about-section-item about-item-image text-center blue-image-left content-view">
                                                                    <object data="pdf/thought-paper/thought-paper-1.pdf" type="application/pdf" width="100%" height="500px">
                                        <p>Unable to display PDF file. <a href="pdf/thought-paper/thought-paper-1.pdf">Download</a> instead.</p>
                                    </object>

                                                                    <embed src="pdf/thought-paper/thought-paper-1.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                                                           height="425" className="w-100"/>
                                                                    <div className="content-overlay"></div>

                                                                    <div className="content-details fadeIn-bottom">
                                                                        <h3 className="content-icon">
                                                                            <i className="mdi mdi-eye" onClick={handleShow}/>
                                                                        </h3>
                                                                    </div>
                                                                </div>

                                                                <div className="card-body text-center">
                                                                    <h4 className="mb-4">Unmasking Interview Impersonation: Securing Hiring</h4>
                                                                    <a onClick={() => handleShow()}
                                                                       className="btn btn-primary btn-red shadow-sm">Download</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                        </div>
                                    </div>*/}

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
