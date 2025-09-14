import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const Icons = () => {
  return (
    <div className="flex items-center justify-center mt-6">
      <ul className="flex text-xl text-neutral-400">
        <li className="mr-5">
          <a
            href="https://github.com/lorenmiller-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-neutral-300" />
          </a>
        </li>
        <li className="mr-5">
          <a
            href="https://www.linkedin.com/in/lorenmiller-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-neutral-300" />
          </a>
        </li>
        <li className="mr-5">
          <a
            href="mailto:lorenmiller.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="hover:text-neutral-300" />
          </a>
        </li>
        <li className="">
          <a
            href="https://github.com/lorenmiller-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-neutral-300" />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Icons;
