import React from 'react';
import { Instagram, Facebook, X } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2B5A44] text-white py-12 px-6 mt-10">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold">KeenKeeper</h2>
        <p className="text-sm text-gray-200">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        
        <div className="pt-4">
          <p className="text-sm mb-3">Social Links</p>
          <div className="flex justify-center gap-4">
            <div className="bg-white text-[#2B5A44] p-2 rounded-full cursor-pointer hover:bg-gray-200"><Instagram size={20} /></div>
            <div className="bg-white text-[#2B5A44] p-2 rounded-full cursor-pointer hover:bg-gray-200"><Facebook size={20} /></div>
            <div className="bg-white text-[#2B5A44] p-2 rounded-full cursor-pointer hover:bg-gray-200"><X size={20} /></div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-[#3b7156] flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">
        <p>© 2026 KeenKeeper. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;