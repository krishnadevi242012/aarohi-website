import React, { Component, useState } from "react";
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from "axios";
import swal from 'sweetalert';


const formData = { name: '', company: '', title: '', email: '', phone: '', doctor: '', speciality: '', appointmentDate: '' }



const BookAppointment = () => {
    const [formState, updateFormState] = useState(formData);
    const [validated, setValidated] = useState(false);
    const [contactValidity, updateContactValidity] = useState(false);
    const [emailValidity, updateEmailValidity] = useState(false);
    const navigate = useNavigate();
    async function handleSubmit(event) {
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
            let logContact = await axios.post("http://localhost:5000/contact-us", postData);
            if (logContact.status === 200) {
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
    var { name, email, doctor, speciality, appointmentDate } = formState;
    return (
        <section>
            <Helmet>
                <title>Aarohi: Book Appointment</title>
            </Helmet>
            <div className="about-section contact-us-section bg-light-gray pt-100" id="getInTouch">
                <div className="container">
                    <div className="section-title section-title-left mb-3 pt-3 text-start">
                        <h3 className="text-black font-weight-bolder">Book an Appointment</h3>
                        <p className="text-black mb-0">Please fill in the form below to schedule your appointment with us.</p>
                    </div>
                    <div className="about-section pt-4">
                        <div className="container">
                            <div className="row align-items-start">
                                <div className="col-md-8 pt-30">
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                                            </div>

                                            {/* Doctor Dropdown */}
                                            <div className="row align-items-center">
                                                <div className="col-lg-12 pb-3">
                                                    <Form.Control
                                                        as="select"
                                                        required
                                                        name="speciality"
                                                        className="shadow-lg"
                                                        onChange={onChange}
                                                    >
                                                        <option value="">Select Doctor *</option>
                                                        <option value="Dr.Arun Kumar J">Dr.Arun Kumar J</option>
                                                        <option value="Dr.Snehashree M">Dr.Snehashree M</option>
                                                        <option value="Dr.Vivek Anand">Dr.Vivek Anand</option>
                                                        <option value="Dr. S. Soundharyaa Moorthi">Dr. S. SoundharyaaMoorthi</option>
                                                        <option value="Dr.Pavan Prasad BK">Dr.Pavan Prasad BK</option>
                                                        <option value="Dr.Darshan Gowda P V">Dr.Darshan Gowda P V</option>
                                                        <option value="Dr.Prahlad ST">Dr.Prahlad ST</option>
                                                        <option value="Dr.Ranjitha Vivek">Dr.Ranjitha Vivek</option>
                                                        <option value="Dr.Mandla Mounika">Dr.Mandla Mounika</option>
                                                        <option value="Dr.Shivaswamy B M">Dr.Shivaswamy B M</option>
                                                        <option value="Dr.Priya C S">Dr.Priya C S</option>
                                                        <option value="Dr.Prajwal Gowda C">Dr.Prajwal Gowda C</option>
                                                        <option value="Dr.Amruth S R">Dr.Amruth S R</option>
                                                        <option value="Dr.Chaitra Narayan">Dr.Chaitra Narayan</option>
                                                        <option value="Dr.Adarsh Mahadevappa Sudhirkumar">Dr.Adarsh Mahadevappa Sudhirkumar</option>
                                                        <option value="Dr.MadhuKiran B T">Dr.MadhuKiran B T</option>
                                                        <option value="Dr.Karthik Kumar S">Dr.Karthik Kumar S</option>
                                                        <option value="Dr.Jayanth D H">Dr.Jayanth D H</option>
                                                        <option value="Dr. Sam Koshy">Dr. Sam Koshy</option>
                                                        <option value="Dr. Raja Reddy">Dr. Raja Reddy</option>
                                                        <option value="Dr. Sagar P Kabadi">Dr. Sagar P Kabadi</option>
                                                        <option value="Dr. Prajwal K C">Dr. Prajwal K C</option>
                                                    </Form.Control>
                                                    <Form.Control.Feedback type="invalid">
                                                        Please select a doctor.
                                                    </Form.Control.Feedback>
                                                </div>
                                            </div>

                                            {/* Speciality Dropdown */}
                                            <div className="row align-items-center">
                                                <div className="col-lg-12 pb-3">
                                                    <Form.Control
                                                        as="select"
                                                        required
                                                        name="speciality"
                                                        className="shadow-lg"
                                                        onChange={onChange}
                                                    >
                                                        <option value="">Select Speciality *</option>
                                                        <option value="General Medicine">General Medicine & Cardiac Care</option>
                                                        <option value="Orthopedics">Orthopedics</option>
                                                        <option value="Cardiology">Cardiology</option>
                                                        <option value="Obstetrics & Gynaecology">Obstetrics & Gynaecology</option>
                                                        <option value="Paediatrics">Paediatrics</option>
                                                        <option value="Neurology">Neurology</option>
                                                        <option value="Dermatology">Dermatology</option>
                                                        <option value="ENT (Ear, Nose & Throat)">ENT (Ear, Nose & Throat)</option>
                                                        <option value="Urology">Urology</option>
                                                        <option value="Gastroenterology">Gastroenterology</option>
                                                        <option value="Oncology">Oncology</option>
                                                        <option value="Pulmonology (Chest Medicine)">Pulmonology (Chest Medicine)</option>
                                                        <option value="Cosmetology & Aesthetic Medicine">Cosmetology & Aesthetic Medicine</option>
                                                    </Form.Control>
                                                    <Form.Control.Feedback type="invalid">
                                                        Please select a speciality.
                                                    </Form.Control.Feedback>
                                                </div>
                                            </div>

                                            {/* Appointment Date */}
                                            <div className="row align-items-center">
                                                <div className="col-lg-12 pb-3">
                                                    <Form.Control
                                                        type="date"
                                                        required
                                                        name="appointmentDate"
                                                        className="shadow-lg"
                                                        onChange={onChange}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please select appointment date.
                                                    </Form.Control.Feedback>
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
                                            src="images/appointment/appointment.webp"
                                            alt="contact"
                                            className="contact-image"
                                        />
                                    </div>
                                </div>                  </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default BookAppointment;
