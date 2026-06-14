import React, {useState, useEffect} from "react";
import { Helmet } from 'react-helmet';
import {Link, useNavigate} from "react-router-dom";
import DocViewer from "react-doc-viewer";
import PDFRenderer from "react-doc-viewer/build/plugins/pdf";
import {Button, Form, Modal} from "react-bootstrap";
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
                {/*{(window.location.pathname === '/safeguard-against-interview-impersonation') &&*/}
                {/*<script src="//evaluationz.mykampaign.com/focus/17.js" type="text/javascript" charset="utf-8"*/}
                {/*        async="async"/>*/}
                {/*}*/}
                <meta name="description" content="Read our blogs on the latest news and thoughts surrounding verification" />
                <meta name="keywords" content="Employee impersonation, Is impersonating an employee illegal, Staff impersonation, Executive impersonation" />
                <meta property="og:title" content="Safeguard your organization from impersonation. In real time. | Evaluationz" />
                <meta property="og:description" content="Read our blogs on the latest news and thoughts surrounding verification"/>
                <meta property="og:url" content="https://www.evaluationz.com/safeguard-against-interview-impersonation" />
                <meta property="og:image" content="https://www.evaluationz.com/images/blogs/blog-9/blog-9.png" />
                <meta property="og:image:secure_url" content="https://www.evaluationz.com/images/blogs/blog-9/blog-9.png" />
                <meta name="twitter:image" content="https://www.evaluationz.com/images/blogs/blog-9/blog-9.png" />
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
                        <div className="col-lg-12">
                            <div className="about-section-item about-item-details">
                                <div className="section-title section-title-left mb-0 text-start">
                                    <h1 className="text-black font-weight-bolder">Safeguard your organization from impersonation. In real time. </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section col-md-10 p-0 m-0">
                <img src="images/blogs/blog-9/image-1.png" alt="shape" className="blog-details-image" />
            </div>

            <div className="about-section bg-white py-5 blue-image-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="about-content">
                                    <p className="text-black font-weight-normal">Any employee/employer relationship is based on trust. From the employee’s point of view, they have to trust that the organization will meet the financial commitments agreed upon, will not indulge in unethical activities regarding the employee or the work itself, and they be given will be given opportunities to grow and prosper. From the employer’s side, the relationship is based on the foundation that the employee is whom they say they are, their educational and employment credentials are above board, and that they have no undisclosed history of criminal or unethical behavior. </p>
                                    <p className="text-black font-weight-normal">But, as in all human relationships, trust can be misplaced. And that is where verification comes in.  </p>
                                    <p className="text-black font-weight-bold mb-0">Rising cases of impersonation </p>
                                    <p className="text-black font-weight-normal">Companies are reporting increasing numbers of impersonations spanning the entire process from multiple interviews to joining formalities.  The rise in remote working, coupled with online interviews, have expanded the potential opportunities for impersonation. In fact, unscrupulous entities have made it into a business.  </p>
                                    <p className="text-black font-weight-normal"><a href="https://www.etvbharat.com/english/national/bharat/proxy-interviews-a-booming-business-in-the-digital-era/na20220713114911030030551" target="_blank">https://www.etvbharat.com/english/national/bharat/proxy-interviews-a-booming-business-in-the-digital-era/na20220713114911030030551</a></p>
                                    <p className="text-black font-weight-normal">However, tech solutions now exist that can detect and shut down impersonation at every stage of the hiring process, even in real time. Here’s how verification can reduce, if not eliminate, impersonation at every step of the HR process. You can find out more here (earlier blog link) </p>
                                    <p className="text-black font-weight-bold mb-0">The online interview </p>
                                    <p className="text-black font-weight-normal">The first stage of hiring today is the online interview. Online interviews save time, effort, money, and complex logistics for potential employees (and employers) in remote locations. However, the online interview also presents several opportunities for unethical candidates to bypass scrutiny.  </p>
                                    <p className="text-black font-weight-normal">The initial verification in a video call interview is the video itself. A powerful verification solution can compare the candidate with their government ID to ensure that they are whom they say they are. Technology has advanced to 99% match/does not match accuracy. This works even if the ID on record is from years ago.  </p>
                                    <p className="text-black font-weight-normal">However, many candidates use ‘bad connection’, ‘slow internet’, or ‘my camera is not working’ as excuses to cut off video from the interview. However, verification technology can still use audio data to form the basis on which to verify the candidate, if not in this round, but in the next stage.  </p>
                                    <p className="text-black font-weight-normal">Since most hires go through multiple online interviews, video and audio data gathered during earlier rounds is used to ensure that the same individual is appearing for every interview. The software flags mismatches in real-time, giving employers the option of terminating the interview immediately. This means that time and effort are not drained on unethical candidates.  </p>
                                    <p className="text-black font-weight-bold mb-0">Joining day verification</p>
                                    <p className="text-black font-weight-normal">In cases of hybrid or in-office work environments, where the employee does have to come into the workplace, physical verification data can be matched to the samples that have been gathered across the various touchpoints on the hiring journey.  </p>
                                    <p className="text-black font-weight-normal">Physical verification of identity can be compared with face and audio recognition from the online interviews as well as government IDs. </p>
                                    <p className="text-black font-weight-bold mb-0">3-point authentication</p>
                                    <p className="text-black font-weight-normal">The detection of impersonation by the verification solution is based on 3-point identification - Face, Voice, and ID. The solution has face recognition capabilities of at least 99% accuracy and works on video as well as still images from a screen capture. Even identical twins can be detected with the right software. When it comes to audio samples, the software requires just a few seconds of audio to match. The data available in government databases ensures that the person you are talking to is actually whom they say they are. Government ID authentication and a face match to the video help ensure you are speaking to the right person. </p>
                                    <p className="text-black font-weight-normal">Integration with the employer’s HR or recruitment system makes the process seamless and facilitates detection in real-time. The solution is completely tech-enabled, which means that there is no room for human error.  What’s more, it costs less than a cup of coffee for each verification. That’s a small price to pay to weed out any undesirable candidates. and ensure that you can hire with confidence.</p>
                                    <p className="text-black font-weight-normal">Protect your organization and hire with confidence with the right impersonation detection solution. </p>

                                    <div className={'col-12'}>

                                        {/*<div className={'col-12'}>*/}
                                        {/*    <p className="text-black mb-2">*/}
                                        {/*        /!*Information on Interview Impersonation. <a className={'link no-wrap font-weight-bold cursor-pointer'}*!/*/}
                                        {/*        /!*                                           href={require("../Interview-Impersonation-datasheet.pdf")}*!/*/}
                                        {/*        /!*                                           download="Interview Impersonation Datasheet">Click to download</a>*!/*/}
                                        {/*        Information on Interview Impersonation. <a className={'link no-wrap font-weight-bold cursor-pointer'}*/}
                                        {/*                                                   download="Interview-Impersonation-datasheet" onClick={() => handleShow()}>Click to download</a>*/}
                                        {/*    </p>*/}
                                        {/*</div>*/}

                                           {/* <div className={'col-6'}>
                                            <div className="doc-viewer-block shadow-sm">
                                                <DocViewer documents={docs}
                                                           pluginRenderers={[PDFRenderer]}
                                                           className={'w-100'}
                                                           style={{height: 180}}/>
                                                <img src="images/services/interview-impersonation/interviewimpersonation.png" alt="interviewimpersonation" />
                                                <div className={' download-bg-block'}>
                                                    <a className={'cursor-pointer'}
                                                       href={require("../Interview-Impersonation-datasheet.pdf")}
                                                       download="Interview Impersonation Datasheet">
                                                        <div className="download-bg cursor-pointer">
                                                            <div className="blur-bg"/>
                                                            <div className="col-12 p-0 text-center text-block text-white">
                                                                <i className="mdi mdi-download c-white f-20"/>
                                                                <p className="text-white f-13 mb-0">Download</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a className={'cursor-pointer'} onClick={() => handleShow()}>
                                                        <div className="download-bg cursor-pointer">
                                                            <div className="blur-bg"/>
                                                            <div className="col-12 p-0 text-center text-block text-white">
                                                                <i className="mdi mdi-download c-white f-20"/>
                                                                <p className="text-white f-13 mb-0">Download</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>*/}

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

                                                        <img src="images/services/interview-impersonation/interviewimpersonation.png" alt="interviewimpersonation"  />
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

                                                        <img src="images/services/interview-impersonation/white-paper-img.png" alt="interviewimpersonation" />
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
                                                        <a onClick={() =>{handleShow(); documentOption("unmasking_thought_paper");}}
                                                           className="btn btn-primary btn-red shadow-sm">Download</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/*<div className={'row mb-5'}>
                                            <div className={'col-md-6'}>
                                                <div className="user-card h-100 blog-card bg-white">
                                                    <div className="about-section-item about-item-image text-center blue-image-left content-view">
                                                        <object data="pdf/thought-paper/thought-paper-1.pdf" type="application/pdf" width="100%" height="500px">
                                        <p>Unable to display PDF file. <a href="pdf/thought-paper/thought-paper-1.pdf">Download</a> instead.</p>
                                    </object>
                                                        <img src="images/services/interview-impersonation/white-paper-img.png" alt="interviewimpersonation" width="300px" />
                                                        <embed src="pdf/Interview-Impersonation/Interview-Impersonation-datasheet.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                                               height="425" className="w-100"/>
                                                        <div className="content-overlay"></div>

                                                        <div className="content-details fadeIn-bottom">
                                                            <h3 className="content-icon">
                                                                <i className="mdi mdi-eye" onClick={handleShow}/>
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    <div className="card-body text-center">
                                                        <h4 className="mb-4">Interview Impersonation</h4>
                                                        <a onClick={() => handleShow()}
                                                           className="btn btn-primary btn-red shadow-sm">Download</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={'col-md-6'}>
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
                                        </div>*/}

                                       {/* <div className={'row mb-5'}>
                                            <div className={'col-12'}>

                                                <div className="row d-flex justify-content-between">
                                                    <div className="col-md-6 py-2 cursor-pointer">
                                                        <div className="user-card h-100 blog-card bg-white">
                                                            <div className="about-section-item about-item-image text-center blue-image-left content-view">
                                                                <object data="pdf/thought-paper/thought-paper-1.pdf" type="application/pdf" width="100%" height="500px">
                                        <p>Unable to display PDF file. <a href="pdf/thought-paper/thought-paper-1.pdf">Download</a> instead.</p>
                                    </object>

                                                                <embed src="pdf/Interview-Impersonation-datasheet.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                                                       height="425" className="w-100"/>
                                                                <div className="content-overlay"></div>

                                                                <div className="content-details fadeIn-bottom">
                                                                    <h3 className="content-icon">
                                                                        <i className="mdi mdi-eye" onClick={handleShow}/>
                                                                    </h3>
                                                                </div>
                                                            </div>

                                                            <div className="card-body text-center">
                                                                <h4 className="mb-4">Interview Impersonation</h4>
                                                                <a onClick={() => handleShow()}
                                                                   className="btn btn-primary btn-red shadow-sm">Download</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                            <div className={'col-6'}>

                                                <div className="row d-flex justify-content-between">
                                                    <div className="col-md-4 py-2 cursor-pointer">
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
                                        <div className={'row mb-5'}>
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

                                    </div>

                                    <p className="text-black font-weight-normal">Get in touch at <a href="mailto:sales@evaluationz.com">sales@evaluationz.com</a> for a bespoke solution for your organization. We can tailor custom solutions to meet your specific requirements.</p>
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
