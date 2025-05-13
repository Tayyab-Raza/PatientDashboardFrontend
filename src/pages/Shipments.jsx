import { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

const Shipments = () => {
  const [shipments, setShipments] = useState([
    {
      id: 1,
      trackingNumber: 'MED-2024-001',
      medication: 'Monthly Prescription Bundle',
      status: 'In Transit',
      estimatedDelivery: '2025-06-10',
      currentLocation: 'Local Distribution Center',
      carrier: 'MedExpress',
      updates: [
        { date: '2024-03-07', status: 'Package picked up', location: 'Pharmacy Warehouse' },
        { date: '2024-03-08', status: 'In Transit', location: 'Local Distribution Center' }
      ]
    }
  ]);

  return (
    <div className="min-h-screen bg-dark-300">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-dark-200/50 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-lg font-medium text-gray-100 mb-6">Medication Shipments</h2>
            <div className="space-y-6">
              {shipments.map((shipment) => (
                <div key={shipment.id} className="bg-dark-100/50 p-6 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-md font-medium text-gray-100">{shipment.medication}</h3>
                      <p className="text-sm text-gray-400">Tracking: {shipment.trackingNumber}</p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-600/50 text-primary-200">
                      {shipment.status}
                    </span>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-300">Carrier</p>
                      <p className="text-sm text-gray-100">{shipment.carrier}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300">Estimated Delivery</p>
                      <p className="text-sm text-gray-100">{shipment.estimatedDelivery}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-300 mb-4">Tracking History</h4>
                    <div className="relative">
                      <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-700"></div>
                      <div className="space-y-6 relative">
                        {shipment.updates.map((update, index) => (
                          <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary-600 relative z-10 mt-1"></div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-100">{update.status}</p>
                              <p className="text-xs text-gray-400">{update.location}</p>
                              <p className="text-xs text-gray-500">{update.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shipments;