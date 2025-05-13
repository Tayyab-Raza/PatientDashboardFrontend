import { NavLink } from 'react-router-dom';

const Sidebar = () => {
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
    <div className="h-full bg-dark-200/50 backdrop-blur-md shadow-lg w-64 fixed left-0 top-0 bottom-0 border-r border-gray-800">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-100">Menu</h2>
        <nav className="mt-4 space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md ${isActive
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-300 hover:bg-dark-100/50 hover:text-white'}`
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