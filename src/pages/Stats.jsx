import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stats = () => {
  const { timeline } = useContext(AppContext);

  const callCount = timeline.filter(t => t.type === 'call').length;
  const textCount = timeline.filter(t => t.type === 'text').length;
  const videoCount = timeline.filter(t => t.type === 'video').length;

  const data = [
    { name: 'Calls', value: callCount, color: '#3B82F6' },
    { name: 'Texts', value: textCount, color: '#10B981' },
    { name: 'Videos', value: videoCount, color: '#8B5CF6' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Friendship Analytics</h1>
      
      {timeline.length === 0 ? (
        <p className="text-center text-gray-500">No data available yet. Start logging interactions!</p>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Stats;