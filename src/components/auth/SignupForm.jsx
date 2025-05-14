import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { register } from '../../services/auth';

const SignupForm = () => {
  const { isDark, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(formData);
      login(data.user, data.token);
      navigate('/login');
    } catch (err) {
      setError(err.message || 'An error occurred');
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-dark-300' : 'bg-light-300'} py-12 px-4 sm:px-6 lg:px-8`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 p-2 rounded-lg ${isDark ? 'bg-dark-200 hover:bg-dark-100' : 'bg-light-200 hover:bg-light-100'}`}
      >
        {isDark ? (
          <SunIcon className="h-6 w-6 text-gray-400 hover:text-gray-100" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-600 hover:text-gray-900" />
        )}
      </button>

      <div className={`max-w-md w-full space-y-8 ${isDark ? 'bg-dark-200/50' : 'bg-light-200/50'} backdrop-blur-md p-8 rounded-lg border ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div>
          <h2 className={`mt-6 text-center text-3xl font-extrabold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-md bg-red-900/50 backdrop-blur-md p-4 border border-red-800">
              <div className="text-sm text-red-200">{error}</div>
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="text"
                name="name"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${isDark ? 'border-gray-700 bg-dark-100/50' : 'border-gray-300 bg-light-100/50'} ${isDark ? 'placeholder-gray-400 text-gray-100' : 'placeholder-gray-500 text-gray-900'} rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm`}
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${isDark ? 'border-gray-700 bg-dark-100/50' : 'border-gray-300 bg-light-100/50'} ${isDark ? 'placeholder-gray-400 text-gray-100' : 'placeholder-gray-500 text-gray-900'} focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${isDark ? 'border-gray-700 bg-dark-100/50' : 'border-gray-300 bg-light-100/50'} ${isDark ? 'placeholder-gray-400 text-gray-100' : 'placeholder-gray-500 text-gray-900'} rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;