import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Timeline = () => {
  const { timeline } = useContext(AppContext);
  const [filter, setFilter] = useState('all');

  const filteredTimeline = filter === 'all' 
    ? timeline 
    : timeline.filter(entry => entry.type === filter);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Timeline</h1>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm focus:outline-none"
        >
          <option value="all">All Interactions</option>
          <option value="call">Calls Only</option>
          <option value="text">Texts Only</option>
          <option value="video">Videos Only</option>
        </select>
      </div>

      {filteredTimeline.length === 0 ? (
        <div className="text-center py-12 text-gray-500 bg-white rounded-2xl border border-gray-100">
          No interactions yet. Go to a friend's profile to log a check-in!
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTimeline.map(entry => (
            <div key={entry.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold
                  ${entry.type === 'call' ? 'bg-blue-500' : entry.type === 'text' ? 'bg-green-500' : 'bg-purple-500'}`}>
                  {entry.type.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{entry.title}</h3>
                  <p className="text-sm text-gray-500">{entry.type} logged</p>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                📅 {entry.date}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;