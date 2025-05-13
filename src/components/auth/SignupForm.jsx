import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { register } from '../../services/auth';

const SignupForm = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-dark-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-dark-200/50 backdrop-blur-md p-8 rounded-lg border border-gray-800">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 bg-dark-100/50 placeholder-gray-400 text-gray-100 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 bg-dark-100/50 placeholder-gray-400 text-gray-100 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 bg-dark-100/50 placeholder-gray-400 text-gray-100 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
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