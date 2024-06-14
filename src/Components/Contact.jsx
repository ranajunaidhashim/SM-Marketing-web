import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let whatsappLink = `https://api.whatsapp.com/send?phone=+923036509737&text=${encodeURIComponent(
      `Hello, My details are below: ${JSON.stringify({ name, email, message })}`
    )}`;
    window.open(whatsappLink, "_blank");
    e.target.reset();
  };

  return (
    <>
      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 align-self-center wow fadeInLeft"
              data-wow-duration="0.5s"
              data-wow-delay="0.25s"
            >
              <div className="section-heading">
                <h2>Feel Free To Send Us a Message About Your Needs</h2>
                <p>
                  If you are interested in growing your Snapchat presence or
                  need help managing your Snapchat account, our team is here to
                  help.
                </p>
                <div className="phone-info">
                  <h4>
                    For any enquiry, Call Us:
                    <span>
                      <i className="fa fa-phone"></i>
                      <a href="tel:+923036509737">+923036509737</a>
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInRight"
              data-wow-duration="0.5s"
              data-wow-delay="0.25s"
            >
              <form id="contact" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name*"
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        type="surname"
                        name="surname"
                        placeholder="Surname(Optional)"
                        autoComplete="on"
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email*"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        type="text"
                        className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message*"
                        required=""
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="main-button "
                      >
                        Send Message
                      </button>
                    </fieldset>
                  </div>
                </div>
                <div className="contact-dec">
                  <img src="assets/images/contact-decoration.png" alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
