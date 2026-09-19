import React from "react";
import { IoMenuSharp } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className="text-white justify-between flex px-4">
      <h1 className="text-3xl font-bold text-[#00df9a] ">REACT.</h1>
      <div className="flex items-center">
      <ul className="flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resource</li>
        <li className="p-4">About</li>
        <li className="p-4">contact</li>
      </ul>
      <IoMenuSharp className="size-8" /></div>
    </div>
  );
};
