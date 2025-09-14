import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-container flex justify-center items-center h-screen">
      <nav className="nav container">
        <ul className="px-20 text-neutral-400 opacity-80 text-lg">
          <li className="py-1">
            <a className="transition-all duration-300 hover:text-xl hover:text-white">Profile</a>
          </li>
          <li className="py-1">
            <a className="transition-all duration-300 hover:text-xl hover:text-white">About</a>
          </li>
          <li className="py-1">
            <a className="transition-all duration-300 hover:text-xl hover:text-white">Experience</a>
          </li>
          <li className="py-1">
            <a className="transition-all duration-300 hover:text-xl hover:text-white">Portfolio</a>
          </li>
          <li className="py-1">
            <a className="transition-all duration-300 hover:text-xl hover:text-white">Articles</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
