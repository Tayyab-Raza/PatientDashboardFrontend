import { useTheme } from '../context/ThemeContext';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import { React, useState } from 'react';

const LabReports = () => {
  const { isDark } = useTheme();
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
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-dark-300' : 'bg-light-300'}`}>
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className={`${isDark ? 'bg-dark-200/50' : 'bg-light-200/50'} backdrop-blur-md p-6 rounded-lg shadow-lg border ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <h2 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-6`}>Lab Reports</h2>
            <div className="space-y-6">
              {labReports.map((report) => (
                <div key={report.id} className={`${isDark ? 'bg-dark-100/50' : 'bg-light-100/50'} p-4 rounded-lg border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`text-md font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{report.testName}</h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{report.laboratory}</p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-600/50 text-primary-200">
                      {report.status}
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Date</p>
                      <p className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{report.date}</p>
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Referring Doctor</p>
                      <p className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{report.doctor}</p>
                    </div>
                  </div>
                  {/* Results section */}
                  <div className="mt-6">
                    <h4 className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-3`}>Test Results</h4>
                    <div className="space-y-2">
                      {report.results.map((result, index) => (
                        <div key={index} className={`grid grid-cols-4 gap-4 ${index !== 0 ? 'border-t' : ''} ${isDark ? 'border-gray-700' : 'border-gray-300'} pt-2`}>
                          <div className="col-span-1">
                            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{result.parameter}</p>
                          </div>
                          <div className="col-span-1 text-right">
                            <p className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{result.value}</p>
                          </div>
                          <div className="col-span-1 text-center">
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{result.unit}</p>
                          </div>
                          <div className="col-span-1 text-right">
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{result.range}</p>
                          </div>
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

export default LabReports;