import { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import { useTheme } from '../context/ThemeContext';

const Appointments = () => {
  const { isDark } = useTheme();
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctorName: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: '2024-03-15',
      time: '10:00 AM',
      status: 'Scheduled',
      notes: 'Regular checkup'
    }
  ]);

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-dark-300' : 'bg-light-300'}`}>
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className={`${isDark ? 'bg-dark-200/50' : 'bg-light-200/50'} backdrop-blur-md p-6 rounded-lg shadow-lg border ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <h2 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-6`}>Upcoming Appointments</h2>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className={`${isDark ? 'bg-dark-100/50' : 'bg-light-100/50'} p-4 rounded-lg border ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`text-md font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{appointment.doctorName}</h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{appointment.specialty}</p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-600/50 text-primary-200">
                      {appointment.status}
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Date</p>
                      <p className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{appointment.date}</p>
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Time</p>
                      <p className={`text-sm ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{appointment.time}</p>
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

export default Appointments;