import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // Figma design er exact dark green theme
  const activeLink = "flex items-center gap-2 bg-[#1a3a32] text-white px-4 py-2 rounded-lg font-medium transition-all shadow-md";
  const normalLink = "flex items-center gap-2 text-gray-500 hover:text-[#1a3a32] px-4 py-2 font-medium transition-all";

  return (
    <nav className="bg-white py-4 px-10 flex justify-between items-center border-b border-gray-100 sticky top-0 z-50">
      {/* Left: Branding (Only Green Text like Figma) */}
      <div className="flex items-center">
        <span className="text-2xl font-bold text-[#1a3a32] tracking-tight">
          Keen<span className="text-[#3c6e47]">Keeper</span>
        </span>
      </div>
      
      {/* Right: Nav Links with Icons */}
      <div className="flex gap-2">
        <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Home
        </NavLink>

        <NavLink to="/timeline" className={({ isActive }) => isActive ? activeLink : normalLink}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Timeline
        </NavLink>

        <NavLink to="/stats" className={({ isActive }) => isActive ? activeLink : normalLink}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
          </svg>
          Stats
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;