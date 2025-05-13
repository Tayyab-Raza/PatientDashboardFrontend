import { useState } from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

const Appointments = () => {
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
    <div className="min-h-screen bg-dark-300">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-dark-200/50 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-lg font-medium text-gray-100 mb-6">Upcoming Appointments</h2>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="bg-dark-100/50 p-4 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-md font-medium text-gray-100">{appointment.doctorName}</h3>
                      <p className="text-sm text-gray-400">{appointment.specialty}</p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-600/50 text-primary-200">
                      {appointment.status}
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-300">Date</p>
                      <p className="text-sm text-gray-100">{appointment.date}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300">Time</p>
                      <p className="text-sm text-gray-100">{appointment.time}</p>
                    </div>
                  </div>
                  {appointment.notes && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <p className="text-sm font-medium text-gray-300">Notes</p>
                      <p className="text-sm text-gray-100">{appointment.notes}</p>
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

export default Appointments;