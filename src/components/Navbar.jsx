import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md">
      <div className="text-2xl font-bold text-[#2B5A44]">KeenKeeper</div>
      <div className="flex gap-6 font-semibold">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-[#2B5A44]" : "text-gray-500"}>Home</NavLink>
        <NavLink to="/timeline" className={({ isActive }) => isActive ? "text-[#2B5A44]" : "text-gray-500"}>Timeline</NavLink>
        <NavLink to="/stats" className={({ isActive }) => isActive ? "text-[#2B5A44]" : "text-gray-500"}>Stats</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;