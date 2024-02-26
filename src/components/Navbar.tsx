import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between h-20 px-8 sticky top-8 rounded-xl mx-auto max-w-xl backdrop-blur border border-black/10 bg-white/15">
      <div>
        <a href="/" className="text-xl">
          on<span className="font-bold">ui</span>
        </a>
      </div>
      <a>
        <FaGithub />
      </a>
    </header>
  );
};

export default Navbar;
