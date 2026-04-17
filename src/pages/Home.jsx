import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { UserPlus, Users, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const Home = () => {
  const { friends, loading } = useContext(AppContext);

  // Summary logic
  const overdueCount = friends.filter(f => f.status === 'overdue').length;
  const trackCount = friends.filter(f => f.status === 'on-track').length;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-40">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#2B5A44]"></div>
        <p className="mt-4 text-gray-600 font-medium">Fetching Friends...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* 2. Banner Section (Requirement 2) */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Nurture Your Friendships.</h1>
        <p className="text-gray-500 text-lg mb-8">Never lose touch with the people who matter most.</p>
        <button className="bg-[#2B5A44] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-[#1f4232] transition-all">
          <UserPlus size={20} /> Add a Friend
        </button>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <Users className="text-blue-500 mb-2" />
            <p className="text-2xl font-bold">{friends.length}</p>
            <p className="text-gray-500 text-sm">Total Friends</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <AlertCircle className="text-red-500 mb-2" />
            <p className="text-2xl font-bold">{overdueCount}</p>
            <p className="text-gray-500 text-sm">Overdue</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <Clock className="text-orange-500 mb-2" />
            <p className="text-2xl font-bold">{friends.length - overdueCount - trackCount}</p>
            <p className="text-gray-500 text-sm">Almost Due</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <CheckCircle className="text-green-500 mb-2" />
            <p className="text-2xl font-bold">{trackCount}</p>
            <p className="text-gray-500 text-sm">On Track</p>
          </div>
        </div>
      </section>

      {/* 4. Your Friends Section (Requirement 4) */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <Link key={friend.id} to={`/friend/${friend.id}`} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-50 group">
              <div className="relative">
                <img src={friend.picture} alt={friend.name} className="w-full h-48 object-cover" />
                <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase ${
                  friend.status === 'overdue' ? 'bg-red-100 text-red-600' : 
                  friend.status === 'almost due' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                }`}>
                  {friend.status}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold group-hover:text-[#2B5A44] transition-colors">{friend.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{friend.days_since_contact} days since contact</p>
                <div className="flex gap-2 mt-4">
                  {friend.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-bold uppercase">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;