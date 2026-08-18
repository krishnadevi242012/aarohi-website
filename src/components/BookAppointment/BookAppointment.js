import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const formData = {
    name: "",
    phone: "",
    email: "",
    doctor: "",
    speciality: "",
    appointmentDate: ""
};

const BookAppointment = () => {
    const [formState, updateFormState] = useState(formData);
    const [validated, setValidated] = useState(false);
    const [contactValidity, updateContactValidity] = useState(false);
    const [emailValidity, updateEmailValidity] = useState(false);
    const [showCareOptions, setShowCareOptions] = useState(false);
    const navigate = useNavigate();

    async function BookAppointment(event) {
        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === false || contactValidity || emailValidity) {
            setValidated(true);
            return;
        }

        const { name, phone, email, speciality, appointmentDate } = formState;

        // Convert date from YYYY-MM-DD to DD-MMM-YYYY
        const formatDate = (dateValue) => {
            if (!dateValue) return "";

            const dateObject = new Date(dateValue + "T00:00:00");

            const day = String(dateObject.getDate()).padStart(2, "0");
            const month = dateObject.toLocaleString("en-US", {
                month: "short"
            });
            const year = dateObject.getFullYear();

            return `${day}-${month}-${year}`;
        };

        const formattedDate = formatDate(appointmentDate);

        try {
            const response = await axios.post(
                "https://api.aarohihospital.in/send-appointment",
                {
                    name,
                    phone,
                    email,
                    doctor: "", // Doctor field is not used in the form, so sending an empty string
                    speciality,
                    appointmentDate: formattedDate
                }
            );

            if (response.status === 200) {
                navigate("/appointment-thankyou");
            }
        } catch (error) {
            console.error("Error booking appointment:", error);
        }

        setValidated(true);
    }

    function onChange(e) {
        const { name, value } = e.target;

        updateFormState((prevState) => ({
            ...prevState,
            [name]: value
        }));

        // Phone validation
        if (name === "phone") {
            const phoneRegex = /^[0-9]{10}$/;

            if (phoneRegex.test(value)) {
                updateContactValidity(false);
            } else {
                updateContactValidity(true);
            }
        }

        // Email validation - only validate when entered
        if (name === "email") {
            if (value === "") {
                updateEmailValidity(false);
            } else {
                const emailRegex =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (emailRegex.test(value)) {
                    updateEmailValidity(false);
                } else {
                    updateEmailValidity(true);
                }
            }
        }
    }

    return (
        <section>
            <Helmet>
                <title>Aarohi Hospital: Book Appointment</title>
            </Helmet>

            <div
                className="about-section contact-us-section bg-light-gray pt-100"
                id="getInTouch"
            >
                <div className="container">

                    <div className="section-title section-title-left mb-3 pt-3 text-start">
                        <h3 className="text-black font-weight-bolder">
                            Book Appointment
                        </h3>
                    </div>

                    <div className="about-section pt-4">
                        <div className="container">

                            <div className="row align-items-start">

                                <div className="col-md-8 pt-30">

                                    <Form
                                        noValidate
                                        validated={validated}
                                        onSubmit={BookAppointment}
                                    >

                                        {/* NAME */}
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="text"
                                                required
                                                className="shadow-lg"
                                                name="name"
                                                value={formState.name}
                                                onChange={onChange}
                                                placeholder="Name *"
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                Please provide your name.
                                            </Form.Control.Feedback>
                                        </Form.Group>


                                        {/* PHONE */}
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="tel"
                                                required
                                                className="shadow-lg"
                                                name="phone"
                                                value={formState.phone}
                                                onChange={onChange}
                                                isInvalid={contactValidity}
                                                placeholder="Phone *"
                                                maxLength="10"
                                                inputMode="numeric"
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid 10 digit contact number.
                                            </Form.Control.Feedback>
                                        </Form.Group>


                                        {/* EMAIL - OPTIONAL */}
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                className="shadow-lg"
                                                value={formState.email}
                                                onChange={onChange}
                                                isInvalid={emailValidity}
                                                placeholder="Email"
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid email address.
                                            </Form.Control.Feedback>
                                        </Form.Group>


                                        {/* AREA OF CARE */}
                                        <Form.Group className="mb-3 position-relative">
                                            <div
                                                className="form-control shadow-lg"
                                                onMouseDown={(e) => e.preventDefault()}
                                                onClick={() => setShowCareOptions(!showCareOptions)}
                                                style={{
                                                    cursor: "pointer",
                                                    backgroundColor: "#fff",
                                                    height: "64px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    userSelect: "none",
                                                    WebkitUserSelect: "none",
                                                    caretColor: "transparent"
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        color: formState.areaOfCare ? "#405577" : "#405577"
                                                    }}
                                                >
                                                    {formState.areaOfCare || "Select Area of Care *"}
                                                </span>

                                                <span
                                                    style={{
                                                        userSelect: "none",
                                                        caretColor: "transparent",
                                                        pointerEvents: "none"
                                                    }}
                                                >
                                                    ▾
                                                </span>
                                            </div>

                                            {showCareOptions && (
                                                <div
                                                    className="area-care-dropdown shadow-lg"
                                                    style={{
                                                        position: "absolute",
                                                        top: "100%",
                                                        left: 0,
                                                        right: 0,
                                                        zIndex: 1000,
                                                        backgroundColor: "#fff",
                                                        border: "1px solid #ddd",
                                                        borderRadius: "8px",
                                                        maxHeight: "220px",
                                                        overflowY: "auto"
                                                    }}
                                                >
                                                    {[
                                                        "General Medicine",
                                                        "Orthopedics",
                                                        "Preventive Health Check-ups & Wellness Care",
                                                        "Paediatrics",
                                                        "Gastroenterology",
                                                        "Gynaecology",
                                                        "Dermatology",
                                                        "ENT (Ear, Nose & Throat)",
                                                        "Neurology",
                                                        "Nephrology & Dialysis",
                                                        "Urology",
                                                        "Oncology",
                                                        "Pulmonology (Chest Medicine)",
                                                        "Cardiology"
                                                    ].map((area) => (
                                                        <div
                                                            key={area}
                                                            onClick={() => {
                                                                updateFormState((prevState) => ({
                                                                    ...prevState,
                                                                    areaOfCare: area
                                                                }));
                                                                setShowCareOptions(false);
                                                            }}
                                                            style={{
                                                                padding: "10px 15px",
                                                                cursor: "pointer",
                                                                color: "#405577",
                                                                fontSize: "16px"
                                                            }}
                                                        >
                                                            {area}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {!formState.areaOfCare && validated && (
                                                <div className="invalid-feedback d-block">
                                                    Please select an area of care.
                                                </div>
                                            )}
                                        </Form.Group>

                                        {/* DATE */}
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="date"
                                                required
                                                name="appointmentDate"
                                                value={formState.appointmentDate}
                                                onChange={onChange}
                                                className="shadow-lg"
                                                min={
                                                    new Date()
                                                        .toISOString()
                                                        .split("T")[0]
                                                }
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                Please select a date.
                                            </Form.Control.Feedback>
                                        </Form.Group>


                                        {/* SUBMIT */}
                                        <div className="row align-items-center">
                                            <div className="col-lg-12 pb-30">

                                                <Button
                                                    type="submit"
                                                    className="btn btn-primary btn-red shadow-lg font-weight-bolder"
                                                    disabled={
                                                        formState.name === "" ||
                                                        formState.phone === "" ||
                                                        formState.speciality === "" ||
                                                        formState.appointmentDate === "" ||
                                                        contactValidity ||
                                                        emailValidity
                                                    }
                                                >
                                                    Book Appointment
                                                </Button>

                                            </div>
                                        </div>

                                    </Form>

                                </div>


                                {/* IMAGE */}
                                <div className="col-md-4">
                                    <div className="image-wrapper">
                                        <img
                                            src="images/appointment/appointment-img.png"
                                            alt="Book Appointment"
                                            className="contact-image"
                                        />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


            {/* HOSPITAL LOCATION */}
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
                                    <b>Aarohi Hospital</b>
                                    <br />
                                    Site no. 81/2, Uttarahalli Main Rd,
                                    <br />
                                    Near Kodipalaya,
                                    <br />
                                    Kengeri, Bengaluru,
                                    <br />
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

export default BookAppointment;