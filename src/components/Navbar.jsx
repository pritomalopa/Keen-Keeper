import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, Clock, LineChart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-100 shadow-sm">
      <Link to="/" className="text-xl font-bold text-gray-800">
        Keen<span className="text-[#2B5A44]">Keeper</span>
      </Link>
      
      <div className="flex space-x-6 text-sm font-medium">
        <NavLink to="/" className={({ isActive }) => `flex items-center gap-2 pb-1 ${isActive ? 'text-[#2B5A44] border-b-2 border-[#2B5A44]' : 'text-gray-500 hover:text-gray-800'}`}>
          <Home size={18} /> Home
        </NavLink>
        <NavLink to="/timeline" className={({ isActive }) => `flex items-center gap-2 pb-1 ${isActive ? 'text-[#2B5A44] border-b-2 border-[#2B5A44]' : 'text-gray-500 hover:text-gray-800'}`}>
          <Clock size={18} /> Timeline
        </NavLink>
        <NavLink to="/stats" className={({ isActive }) => `flex items-center gap-2 pb-1 ${isActive ? 'text-[#2B5A44] border-b-2 border-[#2B5A44]' : 'text-gray-500 hover:text-gray-800'}`}>
          <LineChart size={18} /> Stats
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;