import { useState, useEffect } from 'react';
import { weightApi } from '../../services/api';
import Loading from '../common/Loading';
import { useTheme } from '../../context/ThemeContext';

const DashboardOverview = () => {
  const { isDark } = useTheme();
  const [latestWeight, setLatestWeight] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestWeight = async () => {
      try {
        const response = await weightApi.getWeights();
        if (response.data.length > 0) {
          setLatestWeight(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching latest weight:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestWeight();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className={`${isDark ? 'bg-dark-200/50' : 'bg-light-200/50'} backdrop-blur-md overflow-hidden shadow-lg rounded-lg border ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="px-4 py-5 sm:p-6">
          <dt className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'} truncate`}>Latest Weight</dt>
          <dd className={`mt-1 text-3xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            {latestWeight ? `${latestWeight.weight} kg` : 'No data'}
          </dd>
        </div>
      </div>

      <div className={`${isDark ? 'bg-dark-200/50' : 'bg-light-200/50'} backdrop-blur-md overflow-hidden shadow-lg rounded-lg border ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="px-4 py-5 sm:p-6">
          <dt className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'} truncate`}>Next Appointment</dt>
          <dd className={`mt-1 text-3xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>June 15, 2025</dd>
        </div>
      </div>

      <div className={`${isDark ? 'bg-dark-200/50' : 'bg-light-200/50'} backdrop-blur-md overflow-hidden shadow-lg rounded-lg border ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="px-4 py-5 sm:p-6">
          <dt className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'} truncate`}>Active Prescriptions</dt>
          <dd className={`mt-1 text-3xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>3</dd>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;