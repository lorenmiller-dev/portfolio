import React, { useEffect, useRef } from "react";
import anime from "animejs";

const HelloJapanese = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll("path");

    // Animation for drawing paths
    paths.forEach((path, index) => {
      anime({
        targets: path,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "linear",
        delay: index * 600,
        duration: 400,
        direction: "normal",
        loop: false,
        complete: () => {
          // Animation for fading out paths
          const fadeOutAnimation = anime({
            targets: paths,
            opacity: 0,
            easing: "linear",
            duration: 500,
            delay: 900, // Wait for 1 second before fading out
          });
        },
      });
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-950">
      <svg
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
        <style type="text/css">
          {`.st0{fill:none;stroke:#f0f0f0;stroke-width:16;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}`}
        </style>
        <path class="st0" d="M590.5,422.5c0,0,120,7,58,45" />
        <path
          class="st0"
          d="M595.5,499.5c0,0-41.96,42.69,0,53.47c41,10.53,73-6.47,76-8.47"
        />
        <path
          class="st0"
          d="M762,415c0,0-47,98-55,144c0,0,15-60,51-56s2.33,52.84,40.5,54.5c23,1,36-29,42-38"
        />
        <path class="st0" d="M894.57,415c0,0-20.57,112-16.57,148" />
        <path class="st0" d="M930.5,440.5c0,0,104-7,48,34" />
        <path
          class="st0"
          d="M934.5,504.5c0,0-38.47,41.11,6,50c35,7,53-6,59-9"
        />
        <path
          class="st0"
          d="M1039.21,440.05c0,0,49.18,30.75,91.29,8.45c32.09-17,2-47-24-29c-39,27-40,55-57,87c0,0,65.03-32.81,96-7 c12,10,11,54-36,60c-48.77,6.23-60-8-60-8"
        />
        <path class="st0" d="M1219.5,417.5c0,0-23.85,107.15-16.92,143.58" />
        <path class="st0" d="M1251.5,450.5c0,0,67,3,92-3" />
        <path
          class="st0"
          d="M1300.42,413.94c0,0,3.08,105.56-6.12,126.06c0,0-9.74,18.32-29.8,19.5c-34,2-32-40,1-40s64,28,71,36"
        />
        <text
          x="50%"
          y="115%"
          textAnchor="middle"
          fill="#f0f0f0"
          fontSize="20"
          style={{ animation: "fadeInOutText 7.1s ease forwards" }}
        >
          Inspired by Apple Inc. ©
        </text>
      </svg>
    </div>
  );
};

export default HelloJapanese;
