import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import { Helmet } from 'react-helmet';
import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

const ThoughtPaperLanding = () => {
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

    const handleClose = () =>{
        setShowModal(false);
    }
    const handleShow = () => {
        setShowModal(true);
        generateCaptcha();
    }
    const navigate = useNavigate();

    async function interviewImpersonationFormValidation(event) {
        const form = event.currentTarget;
        const captcha = document.getElementById('mauticform_input_evaldatasheetdownload_solve_this_85').value;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else if (captchaSum !== captcha){
            event.preventDefault();
            event.stopPropagation();
            alert("Please solve the puzzle");
        } else{
            event.preventDefault();
            event.stopPropagation();

            const firstName = document.getElementById('mauticform_input_evaldatasheetdownload_first_name').value;
            const lastName = document.getElementById('mauticform_input_evaldatasheetdownload_last_name').value;
            const emailId = document.getElementById('mauticform_input_evaldatasheetdownload_email_id').value;
            const companyName = document.getElementById('mauticform_input_evaldatasheetdownload_company_name').value;
            const remarks ="unmasking_thought_paper";
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
        const firstName = document.getElementById('mauticform_input_evaldatasheetdownload_first_name').value;
        const lastName = document.getElementById('mauticform_input_evaldatasheetdownload_last_name').value;
        const email = document.getElementById('mauticform_input_evaldatasheetdownload_email_id').value;
        const captcha = document.getElementById('mauticform_input_evaldatasheetdownload_solve_this_85').value;

        if (firstName=== "" || lastName=== "" || email=== "" || captcha=== "") {
            setactiveButton(true)
        } else {
            setactiveButton(false)
        }
    }

    const docs = [
        { uri: require("../Interview-Impersonation-datasheet.pdf") },
    ];

    /*const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onLoginFormSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };*/

    return (
        <section>
            <Helmet>
                <title>Evaluationz: Thought Paper</title>
                {/*{(window.location.pathname === '/blog') &&*/}
                {/*<script src="//evaluationz.mykampaign.com/focus/6.js" type="text/javascript" charset="utf-8"*/}
                {/*        async="async"></script>*/}
                {/*}*/}
                <meta name="description" content="Read our blogs on the latest news and thoughts surrounding verification" />
                <meta name="keywords" content="address verification, criminal verification, drug panel testing, employment verification, education verification, employee verification, user verification, vendor verification, Identity check, Social Media Check, Reference check, Drug test, Digital verification, passport verification, credit check, API Integration, Reduced TAT, Real time verification, verification Specialist, NASCOM empanelled, credit score check, Evaluationz, Evaluationz India Pvt. Ltd., Verification India, AI, Artificial Intelligence, BlueG, Coporate verification, IT Verification, Ites Verification, Banking and Financial Services Industry Verification, Automative verification, eCommerce verification, healthcare verification, rental verificaion, matrimonial verification, hyperlocal verification, blue collar verification, white collar verification" />
                <meta property="og:description" content="Read our blogs on the latest news and thoughts surrounding verification" />
                <meta property="og:url" content="https://evaluationz.com/blog" />
                <meta property="og:image" content="https://evaluationz.com/images/favicon.jpg" />
                <meta property="og:image:secure_url" content="https://evaluationz.com/images/favicon.jpg" />
                <meta name="twitter:image" content="https://evaluationz.com/images/favicon.jpg" />
                {/*<script type="text/javascript" src="https://evaluationz.mykampaign.com/media/js/mautic-form.js" data-onload="MauticSDK.onLoad()" />*/}
                {/*<script>{`MauticDomain = 'https://evaluationz.mykampaign.com'; MauticLang = {'submittingMessage': "Please wait..."};`}</script>*/}

            </Helmet>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h5 className="text-black font-weight-bolder">Register Now For Download</h5>
                </Modal.Header>
                <Modal.Body>
                    <div id="mauticform_wrapper_evaldatasheetdownload" className="mauticform_wrapper">
                        <Form noValidate validated={validated} onSubmit={interviewImpersonationFormValidation} autoComplete="off">
                            <div className="mauticform-innerform">
                                <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
                                    <div id="mauticform_evaldatasheetdownload_first_name"
                                         data-validate="first_name"
                                         data-validation-type="text"
                                         className="mauticform-row mauticform-text mauticform-field-1 mauticform-required">
                                        <label id="mauticform_label_evaldatasheetdownload_first_name"
                                               for="mauticform_input_evaldatasheetdownload_first_name"
                                               className="mauticform-label">First Name</label>
                                        <Form.Control id="mauticform_input_evaldatasheetdownload_first_name"
                                                      name="mauticform[first_name]"
                                                      className="mauticform-input"
                                                      type="text"
                                                      onChange={onChange}/>
                                        <span className="mauticform-errormsg"
                                              style={{ display: 'none' }}>Please provide your first name</span>
                                    </div>

                                    <div id="mauticform_evaldatasheetdownload_last_name"
                                         data-validate="last_name"
                                         data-validation-type="text"
                                         className="mauticform-row mauticform-text mauticform-field-2 mauticform-required">
                                        <label id="mauticform_label_evaldatasheetdownload_last_name"
                                               for="mauticform_input_evaldatasheetdownload_last_name"
                                               className="mauticform-label">Last Name</label>
                                        <Form.Control id="mauticform_input_evaldatasheetdownload_last_name"
                                                      name="mauticform[last_name]"
                                                      className="mauticform-input"
                                                      type="text"
                                                      onChange={onChange}/>
                                        <span className="mauticform-errormsg"
                                              style={{ display: 'none' }}>This is required.</span>
                                    </div>

                                    <div id="mauticform_evaldatasheetdownload_email_id"
                                         data-validate="email_id"
                                         data-validation-type="email"
                                         className="mauticform-row mauticform-email mauticform-field-3 mauticform-required">
                                        <label id="mauticform_label_evaldatasheetdownload_email_id"
                                               for="mauticform_input_evaldatasheetdownload_email_id"
                                               className="mauticform-label">Email Id</label>
                                        <Form.Control id="mauticform_input_evaldatasheetdownload_email_id"
                                                      name="mauticform[email_id]"
                                                      className="mauticform-input"
                                                      type="email"
                                                      onChange={onChange}/>

                                        <span className="mauticform-errormsg"
                                              style={{ display: 'none' }}>Please provide your valid email address</span>
                                    </div>

                                    <div id="mauticform_evaldatasheetdownload_company_name"
                                         className="mauticform-row mauticform-text mauticform-field-4">
                                        <label id="mauticform_label_evaldatasheetdownload_company_name"
                                               for="mauticform_input_evaldatasheetdownload_company_name"
                                               className="mauticform-label">Company Name</label>
                                        <Form.Control id="mauticform_input_evaldatasheetdownload_company_name"
                                                      name="mauticform[company_name]"
                                                      className="mauticform-input"
                                                      type="text"/>
                                        <span className="mauticform-errormsg"
                                              style={{ display: 'none' }}></span>
                                    </div>

                                    <div id="mauticform_evaldatasheetdownload_solve_this_85"
                                         data-validate="solve_this_85"
                                         data-validation-type="captcha"
                                         className="mauticform-row mauticform-text mauticform-field-5 mauticform-required">
                                        <label id="mauticform_label_evaldatasheetdownload_solve_this_85"
                                               for="mauticform_input_evaldatasheetdownload_solve_this_85"
                                               className="mauticform-label">Solve this {captchaText}</label>
                                        <Form.Control id="mauticform_input_evaldatasheetdownload_solve_this_85"
                                                      name="mauticform[solve_this_85]"
                                                      className="mauticform-input"
                                                      type="text"
                                                      onChange={onChange}/>
                                        <span className="mauticform-errormsg"
                                              style={{ display: 'none' }}>This is required.</span>
                                    </div>

                                    <div id="mauticform_evaldatasheetdownload_submit"
                                         className="mauticform-row mauticform-button-wrapper mauticform-field-6 row text-center">
                                        <div className="col-12">
                                            <Button type="submit"
                                                    className=""
                                                    disabled={activeButton}>Get Datasheet</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>

            <div className="hero-block pt-4 pb-5">
                <div className="container pt-5">
                    <div className="col-12 px-0">
                        <h1>Thought Paper</h1>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-6 py-2 cursor-pointer">
                            <div className="user-card h-100 blog-card bg-white">
                                <div className="about-section-item about-item-image text-center blue-image-left content-view">
                                    {/*<object data="pdf/thought-paper/thought-paper-1.pdf" type="application/pdf" width="100%" height="500px">
                                        <p>Unable to display PDF file. <a href="pdf/thought-paper/thought-paper-1.pdf">Download</a> instead.</p>
                                    </object>*/}
                                    <img src="images/services/interview-impersonation/white-paper-img.png" alt="interviewimpersonation"/>
                                    {/* <embed src="pdf/thought-paper/thought-paper-1.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                        height="425" className="w-100"/>*/}
                                    {/*<div className="content-overlay"></div>*/}

                                    <div className="content-details fadeIn-bottom">
                                        <h3 className="content-icon">
                                            <i className="" onClick={handleShow}/>
                                        </h3>
                                    </div>
                                </div>

                                <div className="card-body text-center">
                                    <h4 className="mb-4">Unmasking Interview Impersonation: Securing Hiring</h4>
                                    <a onClick={() => handleShow()}
                                       className="btn btn-primary btn-red shadow-sm">Download</a>
                                    {/* <h4 className="mb-4">Unmasking Interview Impersonation: Securing Hiring</h4>
                                    <a href="pdf/thought-paper/thought-paper-1.pdf"
                                       target="_blank"
                                       className="btn btn-primary btn-red shadow-sm">Download</a>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h5 className="text-black font-weight-bolder mb-0">Unmasking Interview Impersonation: Securing Hiring</h5>
                </Modal.Header>
                <Modal.Body>
                    <object data="pdf/thought-paper/thought-paper-1.pdf"
                            type="application/pdf"
                            width="100%"
                            height="500px">
                    </object>
                </Modal.Body>
            </Modal>*/}
        </section>
    );
};

export default ThoughtPaperLanding;
