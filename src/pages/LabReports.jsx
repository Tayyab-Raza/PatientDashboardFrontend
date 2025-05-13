import { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

const LabReports = () => {
  const [labReports, setLabReports] = useState([
    {
      id: 1,
      testName: 'Complete Blood Count',
      date: '2024-02-10',
      laboratory: 'Central Lab Services',
      doctor: 'Dr. Sarah Johnson',
      status: 'Completed',
      results: [
        { parameter: 'Hemoglobin', value: '14.5', unit: 'g/dL', range: '13.5-17.5' },
        { parameter: 'White Blood Cells', value: '7.8', unit: 'K/µL', range: '4.5-11.0' },
        { parameter: 'Platelets', value: '250', unit: 'K/µL', range: '150-450' }
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
            <h2 className="text-lg font-medium text-gray-100 mb-6">Lab Reports</h2>
            <div className="space-y-6">
              {labReports.map((report) => (
                <div key={report.id} className="bg-dark-100/50 p-4 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-md font-medium text-gray-100">{report.testName}</h3>
                      <p className="text-sm text-gray-400">{report.laboratory}</p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-600/50 text-primary-200">
                      {report.status}
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-300">Date</p>
                      <p className="text-sm text-gray-100">{report.date}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300">Referring Doctor</p>
                      <p className="text-sm text-gray-100">{report.doctor}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <table className="min-w-full divide-y divide-gray-700">
                      <thead>
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-300">Parameter</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-300">Result</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-300">Unit</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-300">Reference Range</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700">
                        {report.results.map((result, index) => (
                          <tr key={index}>
                            <td className="px-3 py-2 text-sm text-gray-100">{result.parameter}</td>
                            <td className="px-3 py-2 text-sm text-gray-100">{result.value}</td>
                            <td className="px-3 py-2 text-sm text-gray-100">{result.unit}</td>
                            <td className="px-3 py-2 text-sm text-gray-100">{result.range}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default LabReports;