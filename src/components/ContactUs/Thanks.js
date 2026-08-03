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
                  <p class="lead">
                      Thank you for filling out our form. Your document has been sent to your respective email address. Check your inbox shortly for the download link.
                  </p>

                </div>
              </div>
            </div>
          
        </div>
      </section>
    );
};

export default Landing;
