import React from "react";
// import Contact from "../Contact";
import Contact from "../Contact";
import "./Buy.css";

const BuyPrice = () => {
  const packages = [
    {
      id: 1,
      name: "500 followers",
      price: "$1.00",
      features: [
        "Start Within Hours",
        "100% Safe",
        "Non Drop",
        "High Quality",
        "Lifetime Refill Guarantee",
        "Delivery Time : 24-72 Hours",
      ],
    },
    {
      id: 2,
      name: "1000 followers",
      price: "$2.00",
      features: [
        "Start Within Hours",
        "100% Safe",
        "Non Drop",
        "High Quality",
        "Lifetime Refill Guarantee",
        "Delivery Time : 24-72 Hours",
      ],
    },
    {
      id: 3,
      name: "10000 Followers",
      price: "$19.50",
      features: [
        "Start Within Hours",
        "100% Safe",
        "Non Drop",
        "High Quality",
        "Lifetime Refill Guarantee",
        "Delivery Time : 24-72 Hours",
      ],
    },
    {
      id: 4,
      name: "100000  followers",
      price: "$200.00",
      features: [
        "Start Within Hours",
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
                        <button type="button" className="btnba">
                          Order Now
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
      <Contact />
    </>
  );
};

export default BuyPrice;
