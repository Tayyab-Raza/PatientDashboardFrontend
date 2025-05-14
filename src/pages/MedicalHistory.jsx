import { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import { useTheme } from '../context/ThemeContext';

const MedicalHistory = () => {
  const { isDark } = useTheme();
  const [medicalHistory, setMedicalHistory] = useState([
    {
      id: 1,
      condition: 'Hypertension',
      diagnosedDate: '2023-10-15',
      doctor: 'Dr. Michael Brown',
      status: 'Ongoing',
      medications: ['Lisinopril 10mg', 'Amlodipine 5mg'],
      notes: 'Blood pressure to be monitored regularly'
    },
    {
      id: 2,
      condition: 'Type 2 Diabetes',
      diagnosedDate: '2023-08-20',
      doctor: 'Dr. Emily White',
      status: 'Managed',
      medications: ['Metformin 500mg'],
      notes: 'Diet control and regular exercise recommended'
    }
  ]);

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-dark-300' : 'bg-light-300'}`}>
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className={`${isDark ? 'bg-dark-200/50' : 'bg-light-200/50'} backdrop-blur-md p-6 rounded-lg shadow-lg border ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <h2 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-6`}>Medical History</h2>
            <div className="space-y-6">
              {medicalHistory.map((record) => (
                <div key={record.id} className={`${isDark ? 'bg-dark-100/50' : 'bg-light-100/50'} p-4 rounded-lg border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`text-md font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{record.condition}</h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Diagnosed by {record.doctor}</p>
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

export default MedicalHistory;