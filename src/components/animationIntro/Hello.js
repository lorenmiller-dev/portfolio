import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import anime from "animejs";
import "../../styles/intro.css";

const Hello = ({ onComplete }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll("path");

    // Animation for drawing paths
    const drawAnimation = anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "linear",
      duration: 4000,
      direction: "normal",
      loop: false,
      complete: () => {
        // Animation for fading out paths
        const fadeOutAnimation = anime({
          targets: paths,
          opacity: 0,
          easing: "linear",
          duration: 900,
          delay: 600, // Wait for 1 second before fading out
          complete: onComplete,
        });
      },
    });
  }, [onComplete]);

  return (
    <div className="flex bg-[#111111] justify-center items-center">
      <div className="relative">
        <svg
          className="mx-auto h-screen"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="1200px"
          height="1200px"
          viewBox="0 0 1920 1080"
          style={{ enableBackground: "new 0 0 1920 1080" }}
          xmlSpace="preserve"
          ref={svgRef}
        >
          <style>
            {`.st0{fill:none;stroke:#f0f0f0;stroke-width:16;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}`}
          </style>
          <path
            className="st0"
            d="M685.09,540c0,0,94.41-67.5,98.41-110.5c3.51-37.78-21-39-31-21c-10.99,19.78-30,142-28,152
            c0,0,8-89,50.45-81.63c45.35,7.87-9.7,69.63,26.93,81.63s83.63-24,92.63-49s-10.12-38.6-27-34c-16.5,4.5-29.5,32.5-16,67
            c15.57,39.78,88.85,13.7,118-34c33-54,42-96,28-107c-28-22-49.26,69.6-47,108c2,34,14,49.99,40,51c38.5,1.5,98.5-101.5,100-131
            c1.88-36.97-26.87-46.08-44,4c-13,38-20,127,24,127c61,0,39.99-86,89-86c51,0,39,91-5,89c-54.98-2.5-35-91,5-89
            c37.95,1.9,39,39,78,4"
            style={{
              stroke: "#f0f0f0",
              strokeWidth: 16,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 10,
            }}
          />
          <text
            x="50%"
            y="115%"
            textAnchor="middle"
            fill="#f0f0f0"
            fontSize="20"
            style={{ animation: "fadeInOutText 6s ease forwards" }}
          >
            Inspired by Apple Inc. ©
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Hello;
