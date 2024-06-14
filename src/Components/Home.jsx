import React, { useEffect } from 'react';
import WOW from 'wowjs';
const Home = () => {

  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: 'wow', // default value
      animateClass: 'animated', // default value
      offset: 0, // default value
      mobile: true, // default value
      live: true // default value
    });
    wow.init();
  }, []);


  return (
    <>
<div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="left-content header-text pfont wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
              <h6>We Make</h6>
              <h2><em>Snapchat</em>  score Boosting Accounts &amp; <span>Social Media</span> Marketing</h2>
              {/* <h2>We Make <em>Digital Ideas</em> &amp; <span>Social Media</span> Marketing</h2> */}
              <p>⭐We sell Premade Snapchat Accounts with High scores from 5k to 10Million.</p>
              <p>⭐We can Boost your Personal account from 10k to 10Million. Email, Username and Everything else can be changed.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
              <img src="assets/images/banner-right-image.png" alt="team meeting"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Home