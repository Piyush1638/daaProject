import React from "react";
import Itachi from "/itachi.png";

const Navbar = () => {
  return (
    <nav className="p-4 w-full  bg-black-indigo">
      <img className="h-30 w-40" src={Itachi} alt="brand logo" />
    </nav>
  );
};

export default Navbar;
