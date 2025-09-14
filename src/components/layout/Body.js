import React from "react";
import Profile from "../bodyContent/Profile";
import About from "../bodyContent/About";
import Experience from "../bodyContent/Experience";
import Portfolio from "../bodyContent/portfolio/Portfolio";

const Body = () => {
  return (
    <div className="">
      <div className="">
        <Profile />
        <About />
        <Experience />
        <Portfolio/>
      </div>
    </div>
  );
};

export default Body;
