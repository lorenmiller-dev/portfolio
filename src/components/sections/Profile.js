import React from "react";
import PFPImage from "../../assets/myself.JPG";
import Resume from "../../assets/docs/Loren_Miller_resume.pdf";
import { FaFileArrowDown } from "react-icons/fa6";
import Icons from "../common/Icons";

const Profile = () => {
  return (
    <section className="relative" id="profile">
      <div className="flex justify-center items-center min-h-screen bg-[#111111]">
        <div className="text-white text-center z-10">
          <img
            src={PFPImage}
            alt="Profile"
            loading="lazy"
            decoding="async"
            className="w-[16rem] h-[16rem] max-w-full rounded-full mx-auto mb-6 will-change-transform"
          />

          <div className="text-3xl mb-1 font-seriff font-normal">
            Loren Miller
          </div>

          <div className="text-[#b9b9b9] text-xl font-sans">
            CS <span>@</span>
            <span className="font-bold text-[#C5BC42]"> WGU</span>
          </div>

          <Icons />

          <div className="flex justify-center mt-8">
            <a
              className="text-gray-600 text-md px-3 radius-2 rounded-lg flex border py-2 items-center text-center hover:bg-neutral-800 transition duration-500 ease-in-out delay-100"
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileArrowDown className="text-white text-sm" />
              <span className="font-sans text-sm text-white font-semibold ml-2">
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

