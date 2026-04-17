import logoXl from '../assets/logo-xl.png'; // Using the XL logo for footer

const Footer = () => {
  return (
    <footer className="bg-green-950 text-green-50 py-10 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <img src={logoXl} alt="KeenKeeper Large Logo" className="h-12 object-contain" />
          <p className="text-green-200 text-sm">Keeping friendships alive, one check-in at a time.</p>
        </div>
        
        <div className="flex gap-6 text-sm text-green-200">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </div>
      <div className="text-center text-green-400 text-xs mt-8 border-t border-green-800 pt-4">
        &copy; {new Date().getFullYear()} KeenKeeper. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;