import React from "react";
import Profile from "../sections/Profile";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Portfolio from "../sections/Portfolio";

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
