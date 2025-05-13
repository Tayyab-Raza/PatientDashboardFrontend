import { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { weightApi } from '../../services/api';
import Loading from '../common/Loading';

const WeightChart = () => {
  const [weights, setWeights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeights = async () => {
      try {
        const response = await weightApi.getWeights();
        setWeights(response.data);
      } catch (error) {
        console.error('Error fetching weights:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeights();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const data = weights.map(w => ({
    date: new Date(w.date).toLocaleDateString(),
    weight: w.weight
  }));

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="date" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1a1b1e',
              border: '1px solid #374151',
              borderRadius: '0.5rem',
              color: '#f3f4f6'
            }}
          />
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <Line type="monotone" dataKey="weight" stroke="#0ea5e9" strokeWidth={2} dot={{ fill: '#0ea5e9' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeightChart;