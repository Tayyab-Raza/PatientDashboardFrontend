import { useTheme } from '../context/ThemeContext';
import DashboardOverview from '../components/dashboard/DashboardOverview';
import WeightChart from '../components/dashboard/WeightChart';
import ShipmentTracker from '../components/dashboard/ShipmentTracker';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

const Dashboard = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-dark-300' : 'bg-light-300'}`}>
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
          <DashboardOverview />
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className={`${isDark ? 'bg-dark-200/50' : 'bg-light-200/50'} backdrop-blur-md p-6 rounded-lg shadow-lg border ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-4`}>Weight Progress</h3>
              <WeightChart />
            </div>
            <div className={`${isDark ? 'bg-dark-200/50' : 'bg-light-200/50'} backdrop-blur-md p-6 rounded-lg shadow-lg border ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-4`}>Recent Shipments</h3>
              <ShipmentTracker />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;