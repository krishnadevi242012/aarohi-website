import React, {useEffect} from "react";
import { Helmet } from 'react-helmet';
import {Link, useNavigate} from "react-router-dom";
/*import {useState} from "@types/react";*/
import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
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
        }
        else{
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
                {/*{(window.location.pathname === '/blog7') &&*/}
                {/*<script src="//evaluationz.mykampaign.com/focus/16.js" type="text/javascript" charset="utf-8"*/}
                {/*        async="async"></script>*/}
                {/*}*/}
                <meta name="description" content="Read our blogs on the latest news and thoughts surrounding verification" />
                <meta name="keywords" content="impersonation during interview,candidate impersonation,what is impersonation check,Mandatory impersonation check,what is impersonation" />
                <meta property="og:title" content="Impersonation during interviews. How are you protecting your company? | Evaluationz" />
                <meta property="og:description" content="Read our blogs on the latest news and thoughts surrounding verification" />
                <meta property="og:url" content="https://www.evaluationz.com/blog7" />
                <meta property="og:image" content="https://www.evaluationz.com/images/blogs/blog-7/blog-7.jpg" />
                <meta property="og:image:secure_url" content="https://www.evaluationz.com/images/blogs/blog-7/blog-7.jpg" />
                <meta name="twitter:image" content="https://www.evaluationz.com/images/blogs/blog-7/blog-7.jpg" />
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
                                    <h1 className="text-black font-weight-bolder">Impersonation during interviews. How are you protecting your company?  </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-section col-md-10 p-0 m-0">
                <img src="images/blogs/blog-7/blog-7.png" alt="shape" className="blog-details-image" />
            </div>

            <div className="about-section bg-white py-5 blue-image-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 pb-30">
                            <div className="about-section-item about-item-details">
                                <div className="about-content">
                                    <p className="text-black font-weight-normal">The CEO of a Bangalore based IT firm recently spoke about the close call his company had, thanks to interview impersonation. He said, “If only I knew that this single case of candidate impersonation during the client interview would risk a US$ 100 million deal and put the whole business relationship at stake.” His story was about a bullet dodged.  Not everyone is that lucky.  </p>
                                    <p className="text-black font-weight-normal">The move to remote working, and consequently remote hiring, has been a boon for many companies. The ability to hire requisite expertise and skills are no longer limited by geography or even international boundaries. But, as with all things, there is a downside. The instances of impersonation during interviews have skyrocketed.   </p>
                                    <p className="text-black font-weight-bold mb-0">Growing instances of impersonation  </p>
                                    <p className="text-black font-weight-normal">In a recent article in The Economic Times, (<a href="https://economictimes.indiatimes.com/jobs/hiring-fraud-the-talented-mr-ripleys-plaguing-india-inc/articleshow/88484504.cms" target="_blank">https://economictimes.indiatimes.com/jobs/hiring-fraud-the-talented-mr-ripleys-plaguing-india-inc/articleshow/88484504.cms</a>), Arpinder Singh, global markets and India leader, forensic and integrity services, EY has been quoted as saying that "This is happening mostly in industries like IT, where people are being hired in bulk. The issue has got significantly accentuated with high attrition and the present remote work culture because of Covid. The number of such impersonation cases I've come across has doubled." </p>
                                    <p className="text-black font-weight-bold mb-0">Remote hiring comes with added risks </p>
                                    <p className="text-black font-weight-normal">The rise in impersonation has been partly enabled by the shift to virtual interviews and automation. The number of human resources people who would interact with the candidate has come down drastically with new hiring practices that involve automated filtering and bulk processing. What’s more, the absence of an in-person interview in most cases removes another potential opportunity to verify the candidate. The recent boom in recruiting, mostly in the IT and retail sectors after the pandemic-induced freeze, along with the fact that turnaround times have been shortened, has only made the problem more acute.  </p>
                                    <p className="text-black font-weight-bold mb-0">Affects all organizations, but not many are taking steps </p>
                                    <p className="text-black font-weight-normal">Falsification of employment or educational credentials, or skills and abilities is neither new nor limited to corporate workspaces. For example, this high-profile case from Australia made the news a few years ago (<a href="https://wgntv.com/news/a-woman-lied-on-her-resume-used-photo-of-kate-upton-to-land-a-185000-job-now-shes-going-to-jail/" target="_blank">https://wgntv.com/news/a-woman-lied-on-her-resume-used-photo-of-kate-upton-to-land-a-185000-job-now-shes-going-to-jail/</a>). However, remote work and the lack of face-to-face interactions has made the issue worse.  </p>
                                    <p className="text-black font-weight-normal">Companies around the world are becoming increasingly aware of the prevalence of impersonation. However, not many are equipping themselves to mitigate the problem. A recent study found that only 40% of employers have a mechanism to detect candidate impersonation. <a href="http://bwpeople.businessworld.in/article/Only-4-In-10-Employers-Have-Virtual-Hiring-Toolkit-That-Detects-Candidate-Impersonation-Study/28-10-2021-410171/" target="_blank">http://bwpeople.businessworld.in/article/Only-4-In-10-Employers-Have-Virtual-Hiring-Toolkit-That-Detects-Candidate-Impersonation-Study/28-10-2021-410171/</a>   </p>
                                    <p className="text-black font-weight-bold mb-0">The dangers of impersonation </p>
                                    <p className="text-black font-weight-normal">The dangers of impersonation can range from financial and reputation losses to legal ramifications. Every time a fake candidate bypasses the checks and balances and enters the workforce, the organization is opening itself to several risks. The most obvious effect entails the professional capabilities of the candidate. The final candidate will not have the required skills or capabilities to handle the responsibilities allocated. This leads to inefficiency or unproductivity, resulting in conflicts and lack of motivation from the larger teams.  </p>
                                    <p className="text-black font-weight-normal">The consequences also spill beyond the internal company dynamics. It can affect client deliveries and expectations. Especially in work-critical situations, the wrong decisions by the candidate can trigger disruptions that may have larger ramifications in financial or reputational terms. It bears thinking about that a candidate who has no qualms about using impersonation as a route to employment has questionable ethics and integrity. Bringing even more risk to the organization.  </p>
                                    <p className="text-black font-weight-bold mb-0">Detecting and preventing Interview Impersonation. </p>
                                    <p className="text-black font-weight-normal">The best way to mitigate the risks of impersonation is to nip it in the bud and ensure that it does not happen in the first place. Preventative solutions to identity fraud and impersonation are the first line of defence. </p>
                                    <p className="text-black font-weight-normal">Employers should implement on-demand digital identity verification, powered by Artificial Intelligence (AI) and a robust technical backend. These verifications can be triggered at various stages in the hiring process, including the video interview and other communication with the hiring team. </p>
                                    <p className="text-black font-weight-normal">If you are an organization – corporate, governmental or NGO – that conducts remote hiring or employs the services of remote employees, it is time you took a deeper look into how you can protect your organization (and other employees) from fraudulent candidates. </p>

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

                                   {/* <div className={'row mb-5'}>
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
