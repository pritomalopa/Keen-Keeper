import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages Import
import Home from './pages/Home';
// Niche amra onno page gulao import korbo jokhon file gula banabo
const Timeline = () => <div className="py-20 text-center text-2xl font-bold">Timeline Page Coming Soon...</div>;
const Stats = () => <div className="py-20 text-center text-2xl font-bold">Stats Page (Recharts) Coming Soon...</div>;
const FriendDetails = () => <div className="py-20 text-center text-2xl font-bold">Friend Details Page Coming Soon...</div>;
const NotFound = () => <div className="py-20 text-center text-4xl font-bold text-red-500">404 - Page Not Found</div>;

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          {/* Requirement 1: Navbar */}
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              {/* Requirement 4: Home Page Route */}
              <Route path="/" element={<Home />} />
              
              {/* Requirement 5 & 6: Friend Details Route */}
              <Route path="/friend/:id" element={<FriendDetails />} />
              
              {/* Requirement 7 & C2: Timeline Route */}
              <Route path="/timeline" element={<Timeline />} />
              
              {/* Requirement C1: Stats Route */}
              <Route path="/stats" element={<Stats />} />
              
              {/* Requirement 10.1: 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Requirement 8: Footer */}
          <Footer />
          
          {/* Requirement 10.3: Toast Notifications */}
          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;