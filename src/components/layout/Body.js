import React from "react";
import Profile from "../sections/Profile";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";

const Body = () => {
  return (
    <div className="">
      <div className="">
        <Profile />
        <About />
        <Experience />
        <Projects/>
      </div>
    </div>
  );
};

export default Body;
