import React from "react";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="our-portfolio section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div
                className="section-heading  wow bounceIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <h2>
                  See What Our Agency <em>Offers</em> &amp; What We{" "}
                  <span>Provide</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <span>
                <div
                  className="item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s"
                >
                  <div className="hidden-content">
                    <h4>Privacy and Safety</h4>
                    <p>
                      We use secure checkout processes to protect our
                      transactions. Plus, we’ll never share your details with
                      anyone else. Check out our privacy policy to learn more.
                    </p>
                  </div>
                  <div className="showed-content">
                    <img src="assets/images/featureP.png" alt="" />
                    <h5>Privacy & Safety</h5>
                  </div>
                </div>
              </span>
            </div>
            <div className="col-lg-3 col-sm-6">
              <span>
                <div
                  className="item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  <div className="hidden-content">
                    <h4>Refill Guarantee</h4>
                    <p>
                      we successfully delivered your order, but it drops below
                      your ordered amount after our delivery. Contact us, and we
                      will refill your order for, free of charge. This guarantee
                      is for 30 days.
                    </p>
                  </div>
                  <div className="showed-content">
                    <img src="assets/images/featureR.png" alt="" />
                    <h5>Refill Guarantee</h5>
                  </div>
                </div>
              </span>
            </div>

            <div className="col-lg-3 col-sm-6">
              <span>
                <div
                  className="item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.6s"
                >
                  <div className="hidden-content">
                    <h4>Safe & Secure</h4>
                    <p>
                      Our system featuresPayPal-grde encryption, which always
                      keeps your payments and orders 100% secure. We will never
                      ask your account password at any time
                    </p>
                  </div>
                  <div className="showed-content">
                    <img src="assets/images/featureS.png" alt="" />
                    <h5>Safe & Secure</h5>
                  </div>
                </div>
              </span>
            </div>
            <div className="col-lg-3 col-sm-6">
              <span>
                <div
                  className="item wow bounceInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <div className="hidden-content">
                    <h4>Affordable Pricing</h4>
                    <p>
                      Find the best plan that fits your requirement. We offer
                      multiple packages to meet big and small businesses’ needs.
                      We support multiple payment gateways, credit card and
                      paypal.
                    </p>
                  </div>
                  <div className="showed-content">
                    <img src="assets/images/featureA.png" alt="" />
                    <h5>Affordable Pricing</h5>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
