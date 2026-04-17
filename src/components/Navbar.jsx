import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; // Small logo for Navbar

const Navbar = () => {
  // Updated to green theme for active links
  const activeStyle = "text-green-700 font-bold border-b-2 border-green-600 pb-1";
  const normalStyle = "text-gray-600 hover:text-green-600 pb-1 transition";

  return (
    <nav className="bg-white shadow-sm border-b border-green-100 py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img src={logo} alt="KeenKeeper Logo" className="h-8 w-8 object-contain" />
        <span className="text-xl font-extrabold text-green-900 tracking-wide">KeenKeeper</span>
      </div>
      <div className="flex gap-6 font-medium">
        <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : normalStyle}>
          Home
        </NavLink>
        <NavLink to="/timeline" className={({ isActive }) => isActive ? activeStyle : normalStyle}>
          Timeline
        </NavLink>
        <NavLink to="/stats" className={({ isActive }) => isActive ? activeStyle : normalStyle}>
          Stats
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;