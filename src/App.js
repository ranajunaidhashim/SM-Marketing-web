// import React from "react";
// import "./App.css";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import Home from "./Components/Home";
// import Portfolio from "./Components/Portfolio";
// import Buy from "./Components/Buy/Buy";
// import BuySc from "./Components/Buy/BuySc";
// import BuyScS from "./Components/Buy/BuyScS";
// import Pservices from "./Components/Pservices";
// import Services from "./Components/Services";
// import Testimonial from "./Components/Testimonial";
// function App() {
//   return (
//     <div>
//       <Header />
//       <Buy/>
//       <BuySc />
//       <BuyScS />
//       <Home />
//       <About />
//       <Services />
//       <Portfolio />
//       <Pservices />
//       <Testimonial />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Buy from "./Components/Buy/Buy";
import BuySc from "./Components/Buy/BuySc";
import BuyScS from "./Components/Buy/BuyScS";
import Pservices from "./Components/Pservices";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        {/* <ScrollRestoration autoRestore={true}> */}

        <Header />
        {/* <Pservices/> */}
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/snapchat" element={<BuySc />} />
            <Route exact path="/snapchatsub" element={<BuyScS />} />
            <Route exact path="/instagram" element={<Buy />}></Route>
          </Routes>
        </Fragment>
        <Footer />
        {/* </ScrollRestoration> */}
      </Router>

      
      {/* <Buy/>
      <BuySc />
      <BuyScS />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Pservices />
      <Testimonial />
      <Contact /> */}
    </div>
  );
}

export default App;
