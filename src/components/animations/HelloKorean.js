import React, { useEffect, useRef } from "react";
import anime from "animejs";

const HelloKorean = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll("path, line");

    // Animation for drawing paths
    paths.forEach((path, index) => {
      anime({
        targets: path,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "linear",
        delay: index * 450,
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
    <div className="flex justify-center items-center h-screen bg-neutral-200">
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
          {`.st0{fill:none;stroke:#000000;stroke-width:14;stroke-linecap:round;stroke-miterlimit:10;}
	        .st1{fill:none;stroke:#000000;stroke-width:16;stroke-linecap:round;stroke-miterlimit:10;}
	        .st2{fill:none;stroke:#000000;stroke-width:16;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}`}
        </style>
        <path
          class="st0"
          d="M509.5,447.5c0,0,9.38,22.74-10,24c-46,3-52,82,2,82c50,0,53-82-2-82"
        />
        <path
          class="st1"
          d="M607,433c0,0-4.02,101-18,156c-7.5,29.5-49.5,6.5-8.5-47.5C612.72,499.06,636,501,636,501"
        />
        <path class="st1" d="M517,587c0,0-9,54,13,60s49,2,63-2" />
        <path
          class="st2"
          d="M694,463c0,0-22.21,76.95,11,85c33,8,55.6-8.93,55.62-8"
        />
        <line class="st2" x1="760.62" y1="474.75" x2="813.09" y2="474.75" />
        <line class="st2" x1="758.5" y1="504.5" x2="810" y2="504.5" />
        <path
          class="st2"
          d="M817.81,433L806.5,537.5c0,0-6.26,33.3-23,40c-16.53,6.61-34.59,10.27-38,41c-3,27,28,34,35,34
	        c20,0,36.62-15.96,37.31-36.48c0.69-20.52-19.31-37.52-34.31-38.52"
        />
        <path class="st2" d="M895,445c0,0,33.51-5,46.76,0" />
        <path
          class="st2"
          d="M884.16,474.75c0,0,65.34-5.37,75.84,5.19c10.5,10.56,1.34,26.49-26.5,26.56c-30.51,0.08-38,2-49.34,19.13
	        c-13.97,21.09-0.66,55.87,27.34,56.87c32.99,1.18,41-29,41-38c0-18-7-31-25-38"
        />
        <path
          class="st2"
          d="M1020.5,436.5c0,0-16,186-30,206s-30-5.09-14-40.54s38.7-65.54,69.35-74"
        />
        <path
          class="st2"
          d="M1150.87,445c0,0-20.37,91.5-43.37,118.5s-31-12-13-30s56-59,75,33c0,0,4.37-54.26,34.69-57.63
	        s18.98,69.54,13.15,93.09"
        />
        <path class="st2" d="M1268.26,436.5c0,0-7.76,170-24.76,206" />
        <path
          class="st2"
          d="M1387.5,432.5c0,0,1,15-10,20s-38,10-38,45c0,26,18,37,37,37c15.03,0,41-7,41-38c0-25-18-44-40-44"
        />
        <path class="st2" d="M1360.5,563.5c0,0,2,31,6,37" />
        <path
          class="st2"
          d="M1398.24,563.5c0,0-10.78,65.9-68.74,63c-60-3-11-24,0-24.54c15.99-0.79,55-9.46,130,19.54"
        />
      </svg>
    </div>
  );
};

export default HelloKorean;
