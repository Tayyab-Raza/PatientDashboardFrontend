import { useTheme } from '../context/ThemeContext';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import {React, useState } from 'react';

const Shipments = () => {
  const { isDark } = useTheme();
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
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-dark-300' : 'bg-light-300'}`}>
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className={`${isDark ? 'bg-dark-200/50' : 'bg-light-200/50'} backdrop-blur-md p-6 rounded-lg shadow-lg border ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <h2 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-6`}>Medication Shipments</h2>
            <div className="space-y-6">
              {shipments.map((shipment) => (
                <div key={shipment.id} className={`${isDark ? 'bg-dark-100/50' : 'bg-light-100/50'} p-6 rounded-lg border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`text-md font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{shipment.medication}</h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Tracking: {shipment.trackingNumber}</p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-600/50 text-primary-200">
                      {shipment.status}
                    </span>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Carrier</p>
                      <p className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{shipment.carrier}</p>
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Estimated Delivery</p>
                      <p className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{shipment.estimatedDelivery}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-3`}>Shipment Updates</h4>
                    <div className="space-y-3">
                      {shipment.updates.map((update, index) => (
                        <div key={index} className={`${index !== 0 ? 'border-t' : ''} ${isDark ? 'border-gray-700' : 'border-gray-300'} pt-3`}>
                          <div className="flex justify-between">
                            <p className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{update.status}</p>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{update.date}</p>
                          </div>
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1`}>{update.location}</p>
                        </div>
                      ))}
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