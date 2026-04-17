import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import callIcon from '../assets/call.png';
import textIcon from '../assets/text.png';
import videoIcon from '../assets/video.png';

const FriendDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { friends, addTimelineEntry } = useContext(AppContext);

  const friend = friends.find(f => f.id === parseInt(id));

  if (!friend) return <div className="text-center py-20">Friend not found!</div>;

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Column */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
        <div className="text-center mb-6">
          <img src={friend.picture} alt={friend.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
          <h2 className="text-2xl font-bold">{friend.name}</h2>
          <p className="text-gray-500">{friend.email}</p>
        </div>
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Bio</h4>
          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{friend.bio}</p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded-lg text-sm font-medium transition">⏰ Snooze 2 Weeks</button>
          <button className="w-full bg-gray-100 hover:bg-gray-200 py-2 rounded-lg text-sm font-medium transition">📦 Archive</button>
          <button className="w-full bg-red-50 text-red-600 hover:bg-red-100 py-2 rounded-lg text-sm font-medium transition">🗑️ Delete</button>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
            <p className="text-gray-500 text-sm">Days Since Contact</p>
            <p className="text-2xl font-bold text-blue-600">{friend.days_since_contact}</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
            <p className="text-gray-500 text-sm">Goal (Days)</p>
            <p className="text-2xl font-bold text-purple-600">{friend.goal}</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center">
            <p className="text-gray-500 text-sm">Next Due Date</p>
            <p className="text-lg font-bold text-gray-800">{friend.next_due_date}</p>
          </div>
        </div>

        {/* Goal Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg">Relationship Goal</h3>
            <p className="text-gray-500 text-sm">Reach out every {friend.goal} days to keep the streak alive.</p>
          </div>
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">Edit</button>
        </div>

        {/* Quick Check-in Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg mb-4">Quick Check-In</h3>
          <div className="flex gap-4">
            <button onClick={() => addTimelineEntry('call', friend.name)} className="flex-1 flex flex-col items-center justify-center gap-2 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition">
              <img src={callIcon} alt="Call" className="w-8 h-8" />
              <span className="text-sm font-medium text-blue-800">Call</span>
            </button>
            <button onClick={() => addTimelineEntry('text', friend.name)} className="flex-1 flex flex-col items-center justify-center gap-2 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition">
              <img src={textIcon} alt="Text" className="w-8 h-8" />
              <span className="text-sm font-medium text-green-800">Text</span>
            </button>
            <button onClick={() => addTimelineEntry('video', friend.name)} className="flex-1 flex flex-col items-center justify-center gap-2 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition">
              <img src={videoIcon} alt="Video" className="w-8 h-8" />
              <span className="text-sm font-medium text-purple-800">Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;