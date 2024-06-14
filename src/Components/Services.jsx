import React from "react";

const Services = () => {
  return (
    <>
      <div id="services" className="our-services section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 align-self-center  wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="left-image s-img">
                <img src="assets/images/services-left-image.png" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="section-heading">
                <h2>
                <em>Boost</em> Your <span className="s-snapchat">Snapchat</span> Presence with Our <span>Services</span>
                </h2>
                <p>
                Our team offers a range of services to help you increase your presence on Snapchat.Our experienced team can help you build a strong Snapchat presence that engages your audience and increases your overall influence. In addition, we can provide you with creative Snapchat account setup and management services, helping you stand out from the crowd and achieve your goals on the platform. Contact us today to learn more about our services and how we can help you grow your Snapchat presence.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="first-bar progress-skill-bar">
                    <h4>Optimizations</h4>
                    <span>90%</span>
                    <div className="filled-bar"></div>
                    <div className="full-bar"></div>
                  </div>
                </div>
                {/* <div className="col-lg-12">
                  <div className="second-bar progress-skill-bar">
                    <h4>Organic Growth</h4>
                    <span>84%</span>
                    <div className="filled-bar"></div>
                    <div className="full-bar"></div>
                  </div>
                </div> */}
                <div className="col-lg-12">
                  <div className="third-bar progress-skill-bar">
                    <h4>Organic Growth</h4>
                    <span>100%</span>
                    <div className="filled-bar"></div>
                    <div className="full-bar"></div>
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

export default Services;
