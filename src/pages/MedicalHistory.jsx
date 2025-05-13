import { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

const MedicalHistory = () => {
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
    <div className="min-h-screen bg-dark-300">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-dark-200/50 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-lg font-medium text-gray-100 mb-6">Medical History</h2>
            <div className="space-y-6">
              {medicalHistory.map((record) => (
                <div key={record.id} className="bg-dark-100/50 p-4 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-md font-medium text-gray-100">{record.condition}</h3>
                      <p className="text-sm text-gray-400">Diagnosed by {record.doctor}</p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-600/50 text-primary-200">
                      {record.status}
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-300">Diagnosed Date</p>
                      <p className="text-sm text-gray-100">{record.diagnosedDate}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300">Current Medications</p>
                      <ul className="list-disc list-inside text-sm text-gray-100">
                        {record.medications.map((med, index) => (
                          <li key={index}>{med}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {record.notes && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <p className="text-sm font-medium text-gray-300">Notes</p>
                      <p className="text-sm text-gray-100">{record.notes}</p>
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

export default MedicalHistory;