import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { friends, loading, timeline } = useContext(AppContext);
  const navigate = useNavigate();

  // Summary logic
  const totalFriends = friends.length;
  const onTrack = friends.filter(f => f.status === 'on-track').length;
  const needAttention = friends.filter(f => f.status !== 'on-track').length;

  if (loading) return <div className="text-center py-20 font-bold">Loading...</div>;

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Banner Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Friends to keep close in your life</h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="bg-green-900 text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 mx-auto hover:bg-green-800 transition">
          <span className="text-xl">+</span> Add a Friend
        </button>
      </div>

      {/* 4 Summary Cards (Exact Figma Look) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 px-4">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">{totalFriends}</h2>
          <p className="text-gray-500 font-medium">Total Friends</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">{onTrack}</h2>
          <p className="text-gray-500 font-medium">On Track</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">{needAttention}</h2>
          <p className="text-gray-500 font-medium">Need Attention</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">{timeline.length}</h2>
          <p className="text-gray-500 font-medium">Interactions This Month</p>
        </div>
      </div>

      {/* Friends Cards Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map(friend => (
            <div 
              key={friend.id} 
              onClick={() => navigate(`/friend/${friend.id}`)}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition group"
            >
              <img src={friend.picture} alt="" className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-bold mb-1">{friend.name}</h3>
              <p className="text-gray-500 text-sm mb-4">Contacted {friend.days_since_contact} days ago</p>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {friend.tags.slice(0, 1).map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">#{tag}</span>
                  ))}
                </div>
                <div className={`h-3 w-3 rounded-full ${friend.status === 'overdue' ? 'bg-red-500' : 'bg-green-500'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;