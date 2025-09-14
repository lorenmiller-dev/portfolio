import React from "react";
import PFPImage from "../../assets/myself.JPG";
import Resume from "../../assets/Loren_Miller_resume.pdf"
import { FaFileArrowDown } from "react-icons/fa6";
import Icons from "../common/Icons";

const Profile = () => {
  return (
    <>
      <div className="relative">
        <div className="flex justify-center items-center h-screen bg-[#111111]">
          <div className="text-white text-center z-10">
            <img
              src={PFPImage}
              alt="Profile"
              className="w-[16rem] h-[16rem] max-w-full rounded-full mx-auto mb-6"
            />

            <div className="text-3xl mb-1 font-seriff font-normal">
              Loren Miller
            </div>
            <div className="text-[#b9b9b9] text-xl font-sans">
              CS <span className="">@</span> 
              <span className="font-bold text-[#C5BC42]"> WGU</span>
            </div>
            <Icons/>
            <div className="flex justify-center mt-8">
              <a
                className="text-gray-600 py-1 text-center items-center text-md px-3 radius-2 rounded-lg flex border py-2 hover:bg-neutral-800 transition duration-500 ease-in-out delay-100"
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="">
                  <FaFileArrowDown className="text-white text-sm" />
                </div>
                <div className="font-sans text-sm text-white flex items-center font-semibold ml-2">
                  Resume
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
