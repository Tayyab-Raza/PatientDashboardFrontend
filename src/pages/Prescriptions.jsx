import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

const Prescriptions = () => {
  const { isDark } = useTheme();
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
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-dark-300' : 'bg-light-300'}`}>
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className={`${isDark ? 'bg-dark-200/50' : 'bg-light-200/50'} backdrop-blur-md p-6 rounded-lg shadow-lg border ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <h2 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-6`}>Current Prescriptions</h2>
            <div className="space-y-6">
              {prescriptions.map((prescription) => (
                <div key={prescription.id} className={`${isDark ? 'bg-dark-100/50' : 'bg-light-100/50'} p-4 rounded-lg border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className={`text-md font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{prescription.doctor}</h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Prescribed on {prescription.date}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {prescription.medications.map((medication, index) => (
                      <div key={index} className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-300'} pt-4`}>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Medication</p>
                            <p className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{medication.name}</p>
                          </div>
                          <div>
                            <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Dosage</p>
                            <p className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{medication.dosage}</p>
                          </div>
                          <div>
                            <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Frequency</p>
                            <p className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{medication.frequency}</p>
                          </div>
                          <div>
                            <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Duration</p>
                            <p className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{medication.duration}</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Special Instructions</p>
                          <p className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{medication.instructions}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {prescription.notes && (
                    <div className={`mt-4 pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Doctor's Notes</p>
                      <p className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{prescription.notes}</p>
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