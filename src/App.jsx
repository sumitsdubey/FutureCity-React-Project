import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Cursor from "./components/Cursor";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./components/Main";
import Carousel from "./components/Carousel";

export default function () {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900">
        <Router>
          <Navbar />
          <Carousel />
          <Cursor />
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route
              path="https://sumitdubey.netlify.app/"
              element={"https://sumitdubey.netlify.app/"}
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}
