import React from "react";
import { Link } from "react-router-dom";
import "./Pservices.css";
import snap from "../img/snapchat.webp";
import insta from "../img/insta.png";
import snap2 from "../img/Snapchatico.png";
const Pservices = () => {


  return (
    <>
      <section
        id="pservices"
        className="pricing-area section our-portfolio gray-bg pt-125 pb-130"
      >
        <div className="container">
          {/* <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center pb-25">
                <h2 className="title">My Pricing Plans</h2>
                <p>
                  Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam
                  tempus, nunc id efficitur sagittis, urna est ultricies eros,
                  ac porta sem turpis quis leo.
                </p>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-lg-6 offset-lg-3 ">
              <div
                className="section-heading  pheading  wow bounceIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <h2>
                  <span>Social</span> <em>Media</em> Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center containerps">
            <div className="col-lg-4 col-md-8 col-sm-9 pborder">
              <div className="single-pricing active text-center mt-30">
                <div className="pricing-package">
                  <img src={snap} alt="Snapchat" className="buypic"></img>
                  <h4 className="package-title">
                    Buy SnapChat Subscribers Account
                  </h4>
                </div>
                <div className="pricing-body">
                  <div className="pricing-text">
                    <p>
                      Our Snapchat Premium services will helps you to grow your
                      business or your profile. We are offering snapchat
                      accounts & Subscribers with refill guarantee.
                    </p>
                    <Link to="/snapchatsub">
                    <button type="button" className="btnpa" >
                      View Details
                    </button>
                    </Link>
                    
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-9 pborder">
              <div className="single-pricing active text-center mt-30">
                <div className="pricing-package">
                  <img src={snap2} alt="Snapchat" className="buypic"></img>
                  <h4 className="package-title">Buy SnapScore</h4>
                </div>
                <div className="pricing-body">
                  <div className="pricing-text">
                    <p>
                      Our Snapchat Premium services will helps you to grow your
                      business or your profile. We are offering snapchat
                      SnapScore with refill guarantee.
                    </p>
                    <Link to="/snapchat">

                    <button type="button" className="btnpa">
                      View Details
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 col-sm-9 pborder">
              <div className="single-pricing active text-center mt-30">
                <div className="pricing-package">
                  <img src={insta} alt="Instagram" className="buypic"></img>
                  <h4 className="package-title">Buy Instagram Followers</h4>
                </div>
                <div className="pricing-body">
                  <div className="pricing-text">
                    <p>
                      Our Instagram Premium services will helps you to grow your
                      Instagram business or your profile. We are offering
                      Instagram Followers, Likes Comments & Views with refill
                      guarantee.
                    </p>
                    <Link to="/instagram">

                    <button type="button" className="btnpa" >
                      View Details
                    </button>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pservices;
