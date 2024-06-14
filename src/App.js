
import React from "react";
import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Buy from "./Components/Buy/Buy";
import BuySc from "./Components/Buy/BuySc";
import BuyScS from "./Components/Buy/BuyScS";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        {/* <ScrollRestoration autoRestore={true}> */}

        <Header />
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

    </div>
  );
}

export default App;
