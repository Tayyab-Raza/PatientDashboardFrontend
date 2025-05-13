import DashboardOverview from '../components/dashboard/DashboardOverview';
import WeightChart from '../components/dashboard/WeightChart';
import ShipmentTracker from '../components/dashboard/ShipmentTracker';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-dark-300">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <DashboardOverview />
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-dark-200/50 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-800">
              <h3 className="text-lg font-medium text-gray-100 mb-4">Weight Progress</h3>
              <WeightChart />
            </div>
            <div className="bg-dark-200/50 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-800">
              <h3 className="text-lg font-medium text-gray-100 mb-4">Shipments</h3>
              <ShipmentTracker />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;