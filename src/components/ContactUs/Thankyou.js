import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Landing = () => {
    return (
      <section>
        <Helmet>
          <title>Evaluationz: Thank You</title>
          <meta
            name="description"
            content="get in touch"
          />
          <meta
            name="keywords"
            content="get-in-touch, thank-you"
          />
          <meta
            property="og:description"
            content="get in touch"
          />
          <meta
            property="og:url"
            content="https://www.evaluationz.com/thankyou"
          />
          <meta
            property="og:image"
            content="https://www.evaluationz.com/images/favicon.jpg"
          />
          <meta
            property="og:image:secure_url"
            content="https://www.evaluationz.com/images/favicon.jpg"
          />
          <meta
            name="twitter:image"
            content="https://www.evaluationz.com/images/favicon.jpg"
          />
        </Helmet>
        <div className="service-section bg-light pt-130 pb-70">
            <div class="container shadow-sm">
              <div class="row content">
                <div class="jumbotron bg-white mb-0 text-center">
                  <h1 class="display-3 font-weight-bold">Thank You!</h1>
                  <p class="lead">
                    Thank you for your interest in Evaluationz. One of our team
                    members will get in touch with you soon.
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
