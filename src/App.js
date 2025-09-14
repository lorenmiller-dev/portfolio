import React, { useState } from "react";
import Hello from "./components/animationIntro/Hello";
import Body from "./components/layout/Body";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import "./styles/App.css";

const App = () => {
  const [currentComponent, setCurrentComponent] = useState("intro");

  return (
    <p>
      {currentComponent === "intro" && (
        <Hello onComplete={() => setCurrentComponent("webpage")} />
      )}
      {currentComponent === "webpage" && (
        <div className="fade-in">
          <div className="fixed z-10">
            <Navbar/>
          </div>
          <div className="body w-screen">
            <Body />
            <Footer />
          </div>
        </div>
      )}
    </p>
  );
};

export default App;
