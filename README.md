# Patient Health Dashboard

A comprehensive React-based frontend application for managing patient health records and medical information.

## Features

- **Authentication System**
  - User login and registration
  - Secure token-based authentication

- **Dashboard Overview**
  - Centralized view of patient health information
  - Quick access to all medical records

- **Health Tracking**
  - Weight progress monitoring
  - Medical history records
  - Lab reports management
  - Prescription tracking

- **Appointment Management**
  - View and manage medical appointments
  - Shipment tracking for medical supplies

## Tech Stack

- React + Vite
- Tailwind CSS for styling
- Axios for API communication

## Project Structure

```plaintext
src/
  ├── components/
  │   ├── auth/        # Authentication components
  │   ├── common/      # Shared components
  │   ├── dashboard/   # Dashboard components
  │   └── layout/      # Layout components
  ├── context/
  │   └── AuthContext  # Authentication context
  ├── pages/
  │   ├── Appointments.jsx
  │   ├── Dashboard.jsx
  │   ├── LabReports.jsx
  │   ├── Login.jsx
  │   ├── MedicalHistory.jsx
  │   ├── Prescriptions.jsx
  │   ├── Shipments.jsx
  │   └── WeightProgress.jsx
  └── services/
      ├── api.js       # API configuration
      └── auth.js      # Authentication services
```


## Getting Started
1. Clone the repository
2. Install dependencies:
```json
bash
1 npm install
```
3. Create a .env file in the root directory with:
```json
VITE_BASE_URL=your_backend_api_url
```
4. Start the development server:
```json
bash
1 npm run dev
```

## Environment Variables
- VITE_BASE_URL : Backend API URL
## Deployment
The application is configured for deployment on Netlify.

## Backend Integration
The frontend integrates with a REST API backend for:

- User authentication
- Medical records management
- Appointment scheduling
- Shipment tracking