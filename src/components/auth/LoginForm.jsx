import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { login } from '../../services/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      authLogin(data.user, data.token);
      navigate('/');
    } catch (err) {
      setError(err.message || 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-dark-200/50 backdrop-blur-md p-8 rounded-lg border border-gray-800">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
            Sign in to your account
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
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 bg-dark-100/50 placeholder-gray-400 text-gray-100 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 bg-dark-100/50 placeholder-gray-400 text-gray-100 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Sign in
            </button>
          </div>
          <div className="text-sm text-center mt-4">
            <span className="text-gray-400">Don't have an account? </span>
            <a href="/signup" className="font-medium text-primary-500 hover:text-primary-400">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;