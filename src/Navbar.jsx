import React from "react";
import logo from "./assets/Netflix.png"

const Navbar = () => {
  return (
    <header className="bg-[#101010] flex justify-between items-center px-[50px] py-[25px]">
      <a href="/">
        <img src={logo} alt="logo" className="h-[60px]" />
      </a>
      <input
        type="search"
        placeholder="Search here!"
        className="bg-[#525073] px-[15px] py-[10px] rounded-md w-[350px]"
      />
    </header>
  );
};

export default Navbar;
