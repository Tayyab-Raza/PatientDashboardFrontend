import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import WeightChart from '../components/dashboard/WeightChart';
import { weightApi } from '../services/api';

const WeightProgress = () => {
  const { isDark } = useTheme();
  const [weight, setWeight] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await weightApi.addWeight({ weight: parseFloat(weight), notes });
      setWeight('');
      setNotes('');
      // Refresh the chart
      window.location.reload();
    } catch (error) {
      console.error('Error adding weight:', error);
    }
  };

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-dark-300' : 'bg-light-300'}`}>
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className={`${isDark ? 'bg-dark-200/50' : 'bg-light-200/50'} backdrop-blur-md p-6 rounded-lg shadow-lg border ${isDark ? 'border-gray-800' : 'border-gray-200'} mb-8`}>
            <h2 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-4`}>Add Weight Record</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="weight" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Weight (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  step="0.1"
                  required
                  className={`mt-1 block w-full rounded-md ${isDark ? 'border-gray-700 bg-dark-100/50 text-gray-100 placeholder-gray-400' : 'border-gray-300 bg-light-100/50 text-gray-900 placeholder-gray-500'} shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="notes" className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Notes
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  className={`mt-1 block w-full rounded-md ${isDark ? 'border-gray-700 bg-dark-100/50 text-gray-100 placeholder-gray-400' : 'border-gray-300 bg-light-100/50 text-gray-900 placeholder-gray-500'} shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Add Record
              </button>
            </form>
          </div>
          <div className={`${isDark ? 'bg-dark-200/50' : 'bg-light-200/50'} backdrop-blur-md p-6 rounded-lg shadow-lg border ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <h2 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-4`}>Weight History</h2>
            <WeightChart />
          </div>
        </main>
      </div>
    </div>
  );
};

export default WeightProgress;