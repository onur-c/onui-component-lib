import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="shadow-xl flex items-center justify-between h-20 px-8 sticky top-8 z-50 rounded-xl  backdrop-blur border border-black/10 bg-white/25">
      <div>
        <a href="/" className="text-xl hover:opacity-70 transition">
          on.<span className="font-bold">ui</span>
        </a>
      </div>
      <a
        href="https://github.com/onur-c/onui-component-lib"
        target="_blank"
        className="hover:opacity-70 transition"
      >
        <FaGithub size={25} />
      </a>
    </header>
  );
};

export default Navbar;
