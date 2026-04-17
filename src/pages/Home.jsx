import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/hero.png'; // Using the hero image from your assets

const Home = () => {
  const { friends, loading } = useContext(AppContext);
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    switch (status) {
      case 'overdue': return 'bg-red-100 text-red-700 border-red-300';
      case 'almost due': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'on-track': return 'bg-green-100 text-green-700 border-green-300';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div></div>;
  }

  return (
    <div className="bg-green-50/30 min-h-screen pb-10"> {/* Subtle green background for home */}
      {/* Banner Section (Green Theme) */}
      <div className="text-center bg-green-100 py-12 rounded-2xl mb-12 shadow-sm border border-green-200">
        {/* Added Hero Image */}
        <img src={heroImg} alt="KeenKeeper Hero" className="h-32 md:h-48 mx-auto mb-6 object-contain" />
        
        <h1 className="text-4xl font-extrabold text-green-900 mb-4">Keep Your Friendships Alive</h1>
        <p className="text-green-800 mb-6 max-w-xl mx-auto opacity-90">Never lose touch with the people who matter most. Track your connections and stay close.</p>
        
        <button className="bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition flex items-center gap-2 mx-auto shadow-md">
          <span className="text-xl leading-none">+</span> Add a Friend
        </button>
      </div>

      {/* Friends Grid */}
      <h2 className="text-2xl font-bold mb-6 text-green-950 px-2">Your Friends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
        {friends.map(friend => (
          <div 
            key={friend.id} 
            onClick={() => navigate(`/friend/${friend.id}`)}
            className="bg-white rounded-xl shadow-sm border border-green-100 p-5 cursor-pointer hover:shadow-md hover:border-green-300 transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={friend.picture} alt={friend.name} className="w-14 h-14 rounded-full object-cover border-2 border-gray-100" />
              <div>
                <h3 className="font-bold text-lg text-gray-800">{friend.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full border font-medium ${getStatusColor(friend.status)}`}>
                  {friend.status}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3 font-medium">Last contact: {friend.days_since_contact} days ago</p>
            <div className="flex flex-wrap gap-2">
              {friend.tags.map((tag, idx) => (
                <span key={idx} className="bg-green-50 text-green-700 border border-green-100 text-xs px-2 py-1 rounded-md">#{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;