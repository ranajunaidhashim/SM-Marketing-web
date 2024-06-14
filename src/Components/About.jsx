import React from "react";

const About = () => {
  return (
    <>
      <div id="about" className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="left-image wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <img
                  src="assets/images/about-left-image.png"
                  alt="person graphic"
                />
              </div>
            </div>
            <div className="col-lg-8 align-self-center">
              <div className="services">
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className="item wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0.5s"
                    >
                      <div className="icon">
                        <img
                          src="assets/images/service-icon-01.png"
                          alt="reporting"
                        />
                      </div>
                      <div className="right-text">
                        <h4>NO INSTALLATION</h4>
                        <p>You do not need to download or install anything</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="item wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0.7s"
                    >
                      <div className="icon">
                        <img src="assets/images/service-icon-02.png" alt="" />
                      </div>
                      <div className="right-text">
                        <h4>EXCELLENT SERVICE</h4>
                        <p>
                          You will be awestruck by how effective and beneficial
                          our service goes to enhance your account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="item wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0.9s"
                    >
                      <div className="icon">
                        <img src="assets/images/service-icon-03.png" alt="" />
                      </div>
                      <div className="right-text">
                        <h4>MOBILE FRIENDLY</h4>
                        <p>
                          Our site works perfectly on mobile devices too. Now
                          you can access and supervise your activity anytime!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="item wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="1.1s"
                    >
                      <div className="icon">
                        <img src="assets/images/service-icon-04.png" alt="" />
                      </div>
                      <div className="right-text">
                        <h4>CUSTOMIZED PACKAGES</h4>
                        <p>
                          We have a variety of packages designed for
                          individuals, celebrities and businesses separately.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
