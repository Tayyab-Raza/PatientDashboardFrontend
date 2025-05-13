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