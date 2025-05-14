import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Loading = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-dark-300' : 'bg-light-300'}`}>
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent"></div>
    </div>
  );
};

export default Loading;