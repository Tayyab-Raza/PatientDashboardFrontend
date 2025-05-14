import React from 'react'
import { useTheme } from '../context/ThemeContext'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'
import BMICalculator from "../components/dashboard/BMICalculator"

const BMICalci = () => {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-dark-300' : 'bg-light-300'}`}>
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className={`${isDark ? 'bg-dark-200/50' : 'bg-light-200/50'} backdrop-blur-md p-6 rounded-lg shadow-lg border ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <h2 className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'} mb-6`}>BMI Calculator</h2>
            <BMICalculator />
          </div>
        </main>
      </div>
    </div>
  );
};

export default BMICalci