import React, { Component, useState } from "react";
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from "axios";
import swal from 'sweetalert';


const formData = { name: '', company: '', title: '', email: '', phone: '', city: '', message: '' }



const ContactUs = () => {
    const [formState, updateFormState] = useState(formData);
    const [validated, setValidated] = useState(false);
    const [contactValidity, updateContactValidity] = useState(false);
    const [emailValidity, updateEmailValidity] = useState(false);
    const navigate = useNavigate();
    async function Contactus(event) {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            event.preventDefault();
            event.stopPropagation();

            const { name, company, title, email, phone, city, message } = formState;
            const postData = { "name": name, "company": company, "title": title, "email": email, "phone": phone, "city": city, "message": message }
            
            // const response = await axios.post(
            //     "http://localhost:5000/contact-us",
            //     {
            //         name,
            //         email,
            //         phone,
            //         message,
            //     }
            // );
            const response = await axios.post(
                `${API_URL}/contact-us`,
                {
                    name,
                    email,
                    phone,
                    message,
                }
            );
            if (response.status === 200) {
                navigate('/thankyou');
                /*history.push('/thankyou');*/
                //     swal("We have sent your request to the right desk. You will be contacted shortly")
                //         .then((value) => {
                //             window.location.reload()
                //         });
            }

            setValidated(true);
        }
    }

    function onChange(e) {
        e.persist();

        updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }))



        if (e.target.name === 'email') {
            var email_regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
            if (e.target.value.match(email_regex)) {
                updateEmailValidity(false);
            }
            else {
                updateEmailValidity(true);
            }
        }

        if (e.target.name === 'phone') {

            if (e.target.value === '' || e.target.value.length === 10) {

                updateContactValidity(false);
            }
            else {
                updateContactValidity(true);

            }
        }
    }


    async function cityAuto() {
        let autocomplete = new window.google.maps.places.Autocomplete(
            document.getElementById('city'),
            { types: ['geocode'] }
        );
        console.log("geo ", autocomplete);
        autocomplete.addListener('place_changed', () => {
            let place = autocomplete.getPlace();
            updateFormState(() => ({ ...formState, city: place.formatted_address }))
        });
    }
    var { name, email } = formState;
    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Contact us</title>
            </Helmet>
            <div className="about-section contact-us-section bg-light-gray pt-100" id="getInTouch">
                <div className="container">
                    <div className="section-title section-title-left mb-3 pt-3 text-start">
                        <h3 className="text-black font-weight-bolder">Get in Touch</h3>
                        <p className="text-black mb-0">We will not sell or give away your personal information to any parties outside the organisation.</p>
                    </div>
                    <div className="about-section pt-4">
                        <div className="container">
                            <div className="row align-items-start">
                                <div className="col-md-8 pt-30">
                                    <Form noValidate validated={validated} onSubmit={Contactus}>
                                        <Form.Group className="mb-12" >
                                            <div className="row align-items-center ">
                                                <div className="col-lg-12 pb-3">
                                                    <Form.Control type="text"
                                                        required
                                                        className="shadow-lg"
                                                        name="name"
                                                        onChange={onChange}
                                                        placeholder="Name *" />
                                                    <Form.Control.Feedback type="invalid" className="mb-0">
                                                        Please provide your name.
                                                    </Form.Control.Feedback>
                                                </div>
                                            </div>
                                            {/* <div className="row align-items-center">
                                <div className="col-lg-12 pb-3">
                                    <Form.Control type="text"
                                        name="company"
                                        className="shadow-lg"
                                        onChange={onChange}
                                        placeholder="Company" />
                                </div>
                            </div> */}
                                            {/* <div className="row align-items-center">
                                <div className="col-lg-12 pb-3">
                                    <Form.Control type="text"
                                        name="title"
                                        className="shadow-lg"
                                        onChange={onChange}
                                        placeholder="Title" />
                                </div>
                            </div> */}
                                            <div className="row align-items-center">
                                                <div className="col-lg-12 pb-3">
                                                    <Form.Control type="email"
                                                        required
                                                        name="email"
                                                        className="shadow-lg"
                                                        onChange={onChange}
                                                        isInvalid={emailValidity}
                                                        placeholder="Email *" />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid email.
                                                    </Form.Control.Feedback>
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-lg-12 pb-3">
                                                    <Form.Control type="number"
                                                        name="phone"
                                                        className="shadow-lg"
                                                        onChange={onChange}
                                                        isInvalid={contactValidity}
                                                        placeholder="Phone" />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid contact number.
                                                    </Form.Control.Feedback>
                                                </div>
                                                {/* <div className="col-lg-6 pb-3">
                                    <Form.Control type="text"
                                        name="city"
                                        id="city"
                                        onFocus={cityAuto}
                                        className="shadow-lg"
                                        onChange={onChange}
                                        placeholder="City" />
                                </div> */}
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-lg-12 pb-3">
                                                    <textarea className="form-control shadow-lg"
                                                        name="message"
                                                        onChange={onChange}
                                                        style={{ maxHeight: '150px', height: '150px' }}
                                                        placeholder="Message/Query" />
                                                </div>
                                            </div>
                                            <div className="row align-items-center">
                                                <div className="col-lg-12 pb-30">
                                                    <Button type="submit"
                                                        className="btn btn-primary btn-red shadow-lg font-weight-bolder"
                                                        disabled={name === "" || emailValidity || email === ""}>
                                                        Submit
                                                    </Button>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </Form>
                                </div>
                                <div className="col-md-4">
                                    <div className="image-wrapper">
                                        <img
                                            src="images/contact-us/Image.jpg"
                                            alt="contact"
                                            className="contact-image"
                                        />
                                    </div>
                                </div>                  </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="about-section bg-white py-4">
                <div className="container pt-5">
                    <div className="row align-items-center">

                        <div className="col-lg-4 pb-30">
                            <div className="about-section-item text-start">

                                <h1 className="c-blue font-weight-bolder">
                                    We’d love to hear from you.
                                </h1>

                                <h5 className="text-black font-weight-bolder mt-4">
                                    Visit us in person at :
                                </h5>

                                <p className="text-black mb-0">
                                    <b>Aarohi Hospital</b><br />
                                    Site no. 81/2, Uttarahalli Main Rd,<br />
                                    Near Kodipalaya,<br />
                                    Kengeri, Bengaluru,<br />
                                    Karnataka 560060
                                </p>

                            </div>
                        </div>

                        <div className="col-lg-8 pb-30">
                            <iframe
                                className="map"
                                src="https://www.google.com/maps?q=Aarohi+Hospital,+Uttarahalli+Main+Road,+Kengeri,+Bengaluru,+Karnataka+560060&output=embed"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Aarohi Hospital Location"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
