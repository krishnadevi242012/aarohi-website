import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Landing = () => {
  return (
    <section>
      <Helmet>
        <title>Aarohi Hospital: Thank You</title>
      </Helmet>
      <div className="service-section bg-light pt-130 pb-70">
        <div class="container shadow-sm">
          <div class="row content">
            <div class="jumbotron bg-white mb-0 text-center">
              <h1 class="display-3 font-weight-bold">Thank You!</h1>
              <p>
                Thank you for reaching out to <strong>Aarohi Hospital</strong>. We have received your enquiry successfully. One of our representatives will contact you soon to assist you with your request.
              </p>
              <hr />
              <p class="lead">
                You can continue exploring the website by{" "}
                <a href="/">clicking here</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Landing;
