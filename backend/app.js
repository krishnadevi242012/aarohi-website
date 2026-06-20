require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(bodyParser.json());

/* EMAIL TRANSPORT CONFIG */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* =========================================
   CONTACT US API
========================================= */

app.post("/contact-us", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Request",
      html: `
        <h2>New Contact Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Contact email sent successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});

/* =========================================
   BOOK APPOINTMENT API
========================================= */

app.post("/send-appointment", async (req, res) => {
  const {
    name,
    email,
    phone,
    doctor,
    speciality,
    appointmentDate,
  } = req.body;

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Appointment Request",
      html: `
        <h2>Appointment Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Doctor:</b> ${doctor}</p>
        <p><b>Speciality:</b> ${speciality}</p>
        <p><b>Appointment Date:</b> ${appointmentDate}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Appointment email sent successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});

/* =========================================
   HEALTH CHECK
========================================= */

app.get("/", (req, res) => {
  res.send("Aarohi Hospital Backend Running");
});

/* =========================================
   SERVER START
========================================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});