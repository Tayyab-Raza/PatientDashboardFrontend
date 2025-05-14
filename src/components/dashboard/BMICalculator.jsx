import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const BMICalculator = () => {
  const { isDark } = useTheme();
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBMI = () => {
    if (!weight || !height || !age) return;

    // Convert height from cm to meters
    const heightInMeters = height / 100;
    // Calculate basic BMI
    let bmi = weight / (heightInMeters * heightInMeters);
    
    // Apply gender-specific adjustments
    if (gender === 'female') {
      // Women generally have higher body fat percentage
      bmi = bmi * 0.95;
    }

    // Round to 1 decimal place
    bmi = Math.round(bmi * 10) / 10;
    
    setBmiResult(bmi);
    
    // Determine BMI category
    if (bmi < 18.5) {
      setBmiCategory('Underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setBmiCategory('Normal weight');
    } else if (bmi >= 25 && bmi < 29.9) {
      setBmiCategory('Overweight');
    } else {
      setBmiCategory('Obese');
    }
  };

  return (
    <div className={`p-6 rounded-lg ${isDark ? 'bg-dark-200' : 'bg-light-200'} shadow-lg`}>
      <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
        BMI Calculator
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Gender
          </label>
          <div className="flex space-x-4">
            <button
              onClick={() => setGender('male')}
              className={`px-4 py-2 rounded ${gender === 'male' ? 'bg-primary-600 text-white' : isDark ? 'bg-dark-100 text-gray-300' : 'bg-light-100 text-gray-700'}`}
            >
              Male
            </button>
            <button
              onClick={() => setGender('female')}
              className={`px-4 py-2 rounded ${gender === 'female' ? 'bg-primary-600 text-white' : isDark ? 'bg-dark-100 text-gray-300' : 'bg-light-100 text-gray-700'}`}
            >
              Female
            </button>
          </div>
        </div>

        <div>
          <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Age (years)
          </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={`w-full p-2 rounded border ${isDark ? 'bg-dark-100 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`}
            placeholder="Enter your age"
          />
        </div>

        <div>
          <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Weight (kg)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className={`w-full p-2 rounded border ${isDark ? 'bg-dark-100 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`}
            placeholder="Enter your weight"
          />
        </div>

        <div>
          <label className={`block mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Height (cm)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className={`w-full p-2 rounded border ${isDark ? 'bg-dark-100 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'}`}
            placeholder="Enter your height"
          />
        </div>

        <button
          onClick={calculateBMI}
          className="w-full py-2 px-4 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
        >
          Calculate BMI
        </button>

        {bmiResult && (
          <div className={`mt-6 p-4 rounded ${isDark ? 'bg-dark-100' : 'bg-light-100'}`}>
            <h3 className={`text-xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
              Your BMI Results
            </h3>
            <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              BMI: <span className="font-bold">{bmiResult}</span>
            </p>
            <p className={`mt-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Category: <span className="font-bold">{bmiCategory}</span>
            </p>
            <p className={`mt-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Note: This BMI calculation includes gender-specific adjustments for more accurate results.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;