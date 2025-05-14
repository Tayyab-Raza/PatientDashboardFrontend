import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { NavLink } from 'react-router-dom';
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', path: '/' },
    { name: 'Weight Progress', path: '/weight-progress' },
    { name: 'Prescriptions', path: '/prescriptions' },
    { name: 'Appointments', path: '/appointments' },
    { name: 'Medical History', path: '/medical-history' },
    { name: 'Lab Reports', path: '/lab-reports' },
    { name: 'Shipments', path: '/shipments' }
  ];

  return (
    <header className={`${isDark ? 'bg-dark-200/50' : 'bg-light-200/50'} backdrop-blur-md shadow-lg border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} fixed top-0 left-0 right-0 z-50 h-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Patient Dashboard</h1>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{user?.name}</span>
            
            <button
              onClick={logout}
              className={`px-3 py-1 rounded-md ${isDark ? 'text-gray-400 hover:text-red-600 hover:bg-dark-100' : 'text-gray-600 hover:text-red-600 hover:bg-gray-100'}`}
            >
              Logout
            </button>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDark ? 'hover:bg-dark-100' : 'hover:bg-gray-100'}`}
            >
              {isDark ? (
                <SunIcon className="h-5 w-5 text-gray-400 hover:text-gray-100" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${isDark ? 'hover:bg-dark-100' : 'hover:bg-gray-100'}`}
          >
            <Bars3Icon className={`h-6 w-6 ${isDark ? 'text-gray-400 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'}`} />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`${isMenuOpen ? 'block' : 'hidden'} absolute right-4 top-full mt-2 w-64 rounded-md shadow-lg ${isDark ? 'bg-dark-100' : 'bg-white'} ring-1 ring-black ring-opacity-5 z-[60]`}
          style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}
        >
          {/* User Info */}
          <div className={`px-4 py-2 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} sticky top-0 ${isDark ? 'bg-dark-100' : 'bg-white'}`}>
            <span className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{user?.name}</span>
          </div>

          {/* Navigation Links */}
          <nav className="py-2">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 ${isActive
                    ? 'bg-primary-600 text-white'
                    : isDark
                      ? 'text-gray-300 hover:bg-dark-200 hover:text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Theme and Logout */}
          <div className={`px-4 py-2 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} space-y-2 sticky bottom-0 ${isDark ? 'bg-dark-100' : 'bg-white'}`}>
            <button
              onClick={toggleTheme}
              className={`flex items-center w-full px-2 py-1 rounded-md ${isDark ? 'hover:bg-dark-200' : 'hover:bg-gray-100'}`}
            >
              {isDark ? (
                <>
                  <SunIcon className="h-5 w-5 text-gray-400 hover:text-gray-100 mr-2" />
                  <span className="text-gray-400 hover:text-gray-100">Light Mode</span>
                </>
              ) : (
                <>
                  <MoonIcon className="h-5 w-5 text-gray-600 hover:text-gray-900 mr-2" />
                  <span className="text-gray-600 hover:text-gray-900">Dark Mode</span>
                </>
              )}
            </button>
            <button
              onClick={logout}
              className={`w-full text-left px-2 py-1 rounded-md ${isDark ? 'text-gray-400 hover:text-red-600 hover:bg-dark-200' : 'text-gray-600 hover:text-red-600 hover:bg-gray-100'}`}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;