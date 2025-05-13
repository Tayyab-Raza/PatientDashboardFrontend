import { useState, useEffect } from 'react';
import { weightApi } from '../../services/api';
import Loading from '../common/Loading';

const DashboardOverview = () => {
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
      <div className="bg-dark-200/50 backdrop-blur-md overflow-hidden shadow-lg rounded-lg border border-gray-800">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-400 truncate">Latest Weight</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-100">
            {latestWeight ? `${latestWeight.weight} kg` : 'No data'}
          </dd>
        </div>
      </div>

      <div className="bg-dark-200/50 backdrop-blur-md overflow-hidden shadow-lg rounded-lg border border-gray-800">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-400 truncate">Next Appointment</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-100">June 15, 2025</dd>
        </div>
      </div>

      <div className="bg-dark-200/50 backdrop-blur-md overflow-hidden shadow-lg rounded-lg border border-gray-800">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-400 truncate">Active Prescriptions</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-100">3</dd>
        </div>
      </div>
    </div>
);
};

export default DashboardOverview;