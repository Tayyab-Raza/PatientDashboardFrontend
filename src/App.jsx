import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import WeightProgress from './pages/WeightProgress';
import SignupForm from './components/auth/SignupForm';
import Prescriptions from './pages/Prescriptions';
import Appointments from './pages/Appointments';
import MedicalHistory from './pages/MedicalHistory';
import LabReports from './pages/LabReports';
import Shipments from './pages/Shipments';
import { ThemeProvider } from './context/ThemeContext';
import BMICalci from './pages/BMICalci';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/weight-progress" element={<WeightProgress />} />
              <Route path="/prescriptions" element={<Prescriptions />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/medical-history" element={<MedicalHistory />} />
              <Route path="/lab-reports" element={<LabReports />} />
              <Route path="/shipments" element={<Shipments />} />
              <Route path="/bmicalc" element={<BMICalci />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;