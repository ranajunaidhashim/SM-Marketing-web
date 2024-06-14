import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <>
      <section
        id="pricing"
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
                  My <em>Pricing</em> Plans
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8 col-sm-9 pborder">
              <div className="single-pricing active text-center mt-30">
                <div className="pricing-package">
                  <h4 className="package-title">SnapScore</h4>
                </div>
                <div className="pricing-body">
                  {/* <div className="pricing-text">
                    <p>
                      Simple project management for teams and small businesses.
                    </p>
                    <span className="price">$19.00</span>
                  </div> */}
                  <div
                    className=" pricing-list  wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.25s"
                  >
                    <ul class="container align-items-center">
                      <div class="row">
                        <li className="col-6">5k</li>
                        <li className="col-6 pcl">$1.30</li>
                      </div>
                      <div class="row">
                        <li className="col-6">10k</li>
                        <li className="col-6 pcl">$2.99</li>
                      </div>
                      <div class="row">
                        <li className="col-6">30k</li>
                        <li className="col-6 pcl">$6.99</li>
                      </div>
                      <div class="row">
                        <li className="col-6">50k</li>
                        <li className="col-6 pcl">$7.99</li>
                      </div>
                      <div class="row">
                        <li className="col-6">100k</li>
                        <li className="col-6 pcl">$10.99</li>
                      </div>
                      <div class="row">
                        <li className="col-6">200k</li>
                        <li className="col-6 pcl">$18.99</li>
                      </div>
                      <div class="row">
                        <li className="col-6">300k</li>
                        <li className="col-6 pcl">$25.99</li>
                      </div>
                      <div class="row">
                        <li className="col-6">400k</li>
                        <li className="col-6 pcl">$25.99</li>
                      </div>
                      <div class="row">
                        <li className="col-6">500k</li>
                        <li className="col-6 pcl">$40.99</li>
                      </div>
                      <div class="row">
                        <li className="col-6">1 Million</li>
                        <li className="col-6 pcl">$50.99</li>
                      </div>
                      <div class="row">
                        <li className="col-6">5 Million</li>
                        <li className="col-6 pcl">$199.99</li>
                      </div>
                      <div class="row">
                        <li className="col-6">10 Million</li>
                        <li className="col-6 pcl">$349.99</li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="ppading col-lg-4 col-md-8 col-sm-9">
              <div className="single-pricing active text-center mt-30">
                <div className="pricing-package">
                  <h4 className="package-title">Subscribers Account</h4>
                </div>
                <div className="pricing-body">
                  {/* <div className="pricing-text">
                    <p>
                      Simple project management for teams and small businesses.
                    </p>
                    <span className="price">$39.00</span>
                  </div> */}
                  <div
                    className="pricing-list  wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.3s"
                  >
                    <ul className="container">
                      <div class="row">
                        <li className="col-6">5k</li>
                        <li className="col-6 pcl">$20</li>
                      </div>
                      <div class="row">
                        <li className="col-6">10k</li>
                        <li className="col-6 pcl">$35</li>
                      </div>
                      <div class="row">
                        <li className="col-6">15k</li>
                        <li className="col-6 pcl">$45</li>
                      </div>
                      <div class="row">
                        <li className="col-6">20k</li>
                        <li className="col-6 pcl">$50</li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-8 col-sm-9">
              <div className="single-pricing text-center mt-30">
                <div className="pricing-package">
                  <h4 className="package-title">Premium</h4>
                </div>
                <div className="pricing-body">
                  <div className="pricing-text">
                    <p>
                      Simple project management for teams and small businesses.
                    </p>
                    <span className="price">$29.00</span>
                  </div>
                  <div className="pricing-list">
                    <ul>
                      <li>Unlimited Tasks</li>
                      <li>Unlimited Public</li>
                      <li>Private Projects</li>
                      <li>Unlimited Teams</li>
                      <li>All Integrations</li>
                      <li>Public API</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
