import { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      date: '2025-03-20',
      medications: [
        {
          name: 'Amoxicillin',
          dosage: '500mg',
          frequency: 'Twice daily',
          duration: '7 days',
          instructions: 'Take with food'
        }
      ],
      notes: 'Follow up in 1 week'
    }
  ]);

  return (
    <div className="min-h-screen bg-dark-300">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-dark-200/50 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-lg font-medium text-gray-100 mb-6">Current Prescriptions</h2>
            <div className="space-y-6">
              {prescriptions.map((prescription) => (
                <div key={prescription.id} className="bg-dark-100/50 p-4 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-md font-medium text-gray-100">{prescription.doctor}</h3>
                      <p className="text-sm text-gray-400">Prescribed on {prescription.date}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {prescription.medications.map((medication, index) => (
                      <div key={index} className="border-t border-gray-700 pt-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-300">Medication</p>
                            <p className="text-sm text-gray-100">{medication.name}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-300">Dosage</p>
                            <p className="text-sm text-gray-100">{medication.dosage}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-300">Frequency</p>
                            <p className="text-sm text-gray-100">{medication.frequency}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-300">Duration</p>
                            <p className="text-sm text-gray-100">{medication.duration}</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm font-medium text-gray-300">Special Instructions</p>
                          <p className="text-sm text-gray-100">{medication.instructions}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {prescription.notes && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <p className="text-sm font-medium text-gray-300">Doctor's Notes</p>
                      <p className="text-sm text-gray-100">{prescription.notes}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Prescriptions;