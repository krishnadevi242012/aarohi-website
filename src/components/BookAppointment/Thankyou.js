import React from "react";
import { Helmet } from "react-helmet";

const Thankyou = () => {
  return (
    <section>
      <Helmet>
        <title>Aarohi Hospital: Thank You</title>
      </Helmet>

      <div className="service-section bg-light pt-130 pb-70">
        <div className="container shadow-sm">
          <div className="row content">
            <div className="jumbotron bg-white mb-0 text-center">

              <h1 className="display-3 font-weight-bold">
                Thank You!
              </h1>

              <p>
                Thank you for booking an appointment with{" "}
                <strong>Aarohi Hospital</strong>. We have received your
                request successfully. Our team will contact you soon with
                the doctor's availability and appointment timing.
              </p>

              <hr />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thankyou;