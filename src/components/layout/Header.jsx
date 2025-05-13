import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-dark-200/50 backdrop-blur-md shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-100">Patient Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">{user?.name}</span>
            <button
              onClick={logout}
              className="text-sm text-gray-400 hover:text-gray-100"
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