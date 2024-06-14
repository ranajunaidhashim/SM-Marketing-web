import React from "react";
import "./Testimonial.css";
import YouTube from "react-youtube";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
// import shehzad from "../../img/tshahzad.jpg";
// import adnan from "../../img/testadnan.jpg";
// import saftain from "../../img/saftaincpy.jpg";
// import yasir from "../../img/yasircpy.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: img3,
      cname: "John S.",
      dsg: " Playerup Client",
      desc: "Thanks to SCBoost, my Snapchat presence has skyrocketed. The team's expertise and guidance helped me engage with my audience and increase my overall influence.",
    },
    {
      img: img2,
      cname: "Sarah",
      dsg: "Client",
      desc: "I highly recommend SCBoost for anyone looking to make an impact on Snapchat. Their professional team helped me achieve my goals on the platform.",
    },
    {
      img: img1,
      cname: "Andrew",
      dsg: "Client",
      desc: "If you're serious about growing your Snapchat presence, look no further than SCBoost. Their creative account setup and management services helped me stand out from the crowd and achieve success on the platform.",
    },
    // {
    //   videoId: "zrlAnAUVNng",
    // },
    // {
    //   video: (
    //     <div className="ratio ratio-16x9">
    //       <iframe
    //         src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
    //         title="YouTube video"
    //         allowFullScreen
    //       ></iframe>
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients </span>
        <span>Love </span>
        <span>Our Work</span>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        // autoHeight={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              {client.videoId ? (
                <div className="testimonial-video">
                  <div className="video-wrapper">
                    <YouTube videoId={client.videoId} />
                  </div>
                </div>
              ) : (
                <div className="testimonial">
                  <img src={client.img} alt="" />
                  <span>{client.cname}</span>
                  <span>{client.dsg}</span>
                  <span>{client.desc}</span>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
