import React from "react";
import Contact from "../Contact";
import "./Buy.css";
import "./BuySc.css";

const Buy = () => {
  const packages = [
    {
      id: 1,
      name: "5k - 10k SnapScore",
      price: "$1.30  -  $2.99",
      features: [
        "Name Changeable",
        "100% Safe",
        "Non Drop",
        "High Quality",
        "Lifetime Refill Guarantee",
        "Delivery Time : 24-72 Hours",
      ],
    },
    {
      id: 2,
      name: "30k - 50k SnapScore",
      price: "$6.99 - $7.99",
      features: [
        "Name Changeable",
        "100% Safe",
        "Non Drop",
        "High Quality",
        "Lifetime Refill Guarantee",
        "Delivery Time : 24-72 Hours",
      ],
    },
    {
      id: 3,
      name: "100k - 500k SnapScore",
      price: "$10 - $40",
      features: [
        "Name Changeable",
        "100% Safe",
        "Non Drop",
        "High Quality",
        "Lifetime Refill Guarantee",
        "Delivery Time : 24-72 Hours",
      ],
    },
    {
      id: 4,
      name: "1 Million - 5 Million SnapScore",
      price: "$50 - $199.99",
      features: [
        "Name Changeable",
        "100% Safe",
        "Non Drop",
        "High Quality",
        "Lifetime Refill Guarantee",
        "Delivery Time : 24-72 Hours",
      ],
    },
    {
      id: 4,
      name: "10 Million SnapScore",
      price: "$349.99",
      features: [
        "Name Changeable",
        "100% Safe",
        "Non Drop",
        "High Quality",
        "Lifetime Refill Guarantee",
        "Delivery Time : 24-72 Hours",
      ],
    },
  ];

  return (
    <>
      <div id="buy">
        <section className="bsccontainer">
          <div className="bshape">
            <div className="custom-shape-divider-bottom-1679453232">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                  opacity=".25"
                  className="shape-fill"
                ></path>
                <path
                  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                  opacity=".5"
                  className="shape-fill"
                ></path>
                <path
                  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>

            <div className="container">
              <div className=" bfont wow fadeIn">
                <h3 className="text-center">MARKETING EXPERT</h3>
                <h1 className="text-center">Buy SnapChat SnapScore</h1>
                <h5 className="text-center">
                  Marketing Expert is the best site to buy SnapChat SnapScore
                  for your profile. We offer high-quality SnapScore with a 100%
                  safe transaction and refill guarantee.
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="bcont">
          <div className="container">
            <h3 className="text-center wow bounceIn">Pricing</h3>

            <div className="row justify-content-center containerps">
              {packages.map((pkg) => (
                <div key={pkg.id} className="col-lg-4 col-md-8 col-sm-9">
                  <div className="single-pricing pborder active text-center mt-30">
                    <div className="pricing-package">
                      <h4 className="package-title">{pkg.name}</h4>
                    </div>
                    <div className="pricing-body">
                      <div className="pricing-text">
                        <span className="price">{pkg.price}</span>
                      </div>
                      <div className="pricing-text wow fadeIn">
                        <ul>
                          {pkg.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                        <a href="#contact">
                        <button type="button" className="btnba">Order Now
                          {/* Order Now */}
                        </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Contact/>
    </>
  );
};

export default Buy;
