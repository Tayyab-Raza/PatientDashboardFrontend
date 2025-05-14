import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const Sidebar = () => {
  const { isDark } = useTheme();

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
    <div className={`hidden lg:block fixed left-0 top-0 bottom-0 w-64 pt-20 ${isDark ? 'bg-dark-200/50' : 'bg-light-200/50'} backdrop-blur-md shadow-lg border-r ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="p-4">
        <h2 className={`text-lg font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Menu</h2>
        <nav className="mt-4 space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md ${isActive
                  ? 'bg-primary-600 text-white'
                  : isDark
                    ? 'text-gray-300 hover:bg-dark-100/50 hover:text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;