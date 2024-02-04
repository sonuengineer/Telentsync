import React from "react";
import Logo from "./Logo";
import arrowdown from "../assets/icons/arrow-down.icon.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center m-8 p-2 rounded-full bg-gray-100 border border-gray-300">
      <Logo />

      <ul className="flex gap-8 list-none pl-12 mx-auto">
        <NavItem title="Products" />
        <NavItem title="Solutions" />
        <NavItem title="Resources" />
        <NavItem title="Pricing" />
      </ul>

      <div className="flex gap-4">
        <button className="px-6 py-4 rounded-full border border-gray-300 bg-white">Talk to sales</button>
        <button className="px-6 py-4 rounded-full border-none text-white bg-blue">Sign up for free</button>
      </div>
    </div>
  );
};

const NavItem = ({ title }) => (
  <li className="flex gap-2">
    <a href="#" className="text-black no-underline">{title}</a>
    <img src={arrowdown} alt="arrow" className="w-4" />
  </li>
);

export default Navbar;
