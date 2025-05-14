import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const ShipmentTracker = () => {
  const { isDark } = useTheme();
  const [shipments, setShipments] = useState([
    {
      id: 1,
      trackingNumber: 'MED-2024-001',
      medication: 'Monthly Prescription Bundle',
      status: 'In Transit',
      estimatedDelivery: '2024-03-10',
      currentLocation: 'Local Distribution Center',
      updates: [
        { date: '2024-03-07', status: 'Package picked up', location: 'Pharmacy Warehouse' },
        { date: '2024-03-08', status: 'In Transit', location: 'Local Distribution Center' }
      ]
    }
  ]);

  return (
    <div className="space-y-4">
      {shipments.map((shipment) => (
        <div key={shipment.id} className={`${isDark ? 'bg-dark-100/50' : 'bg-light-100/50'} p-4 rounded-lg border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`text-md font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{shipment.medication}</h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Tracking: {shipment.trackingNumber}</p>
            </div>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-600/50 text-primary-200">
              {shipment.status}
            </span>
          </div>
          
          <div className="mt-4">
            <div className="relative">
              <div className={`absolute left-2 top-0 bottom-0 w-0.5 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
              <div className="space-y-6 relative">
                {shipment.updates.map((update, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary-600 relative z-10 mt-1"></div>
                    <div className="ml-4">
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{update.status}</p>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{update.location}</p>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{update.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className={`mt-4 pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
            <div className="flex justify-between text-sm">
              <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Estimated Delivery:</span>
              <span className={`${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{shipment.estimatedDelivery}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShipmentTracker;