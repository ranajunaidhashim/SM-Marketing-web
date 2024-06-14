import React from "react";

const PreLoader = () => {
  return (
    <>
      {/* //    <!-- ***** Preloader Start ***** --> */}
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/* <!-- ***** Preloader End ***** --> */}
    </>
  );
};

export default PreLoader;
