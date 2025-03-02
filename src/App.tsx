import { useState } from 'react';
import LandingPage from './pages/Landing_Page';
import './App.css';
import { HealthCareProvider } from './interfaces/HealthCareProvider';
import FilteredResults from './pages/Filtered_Results';
import Scheduler from './pages/Scheduler';

function App() {
  const INSURANCE_PROVIDERS = [
    'VitalCare Insurance',
    'Harmony Health Plan',
    'EverTrust Medical',
    'NovaGuard Health',
    'BluePeak Coverage',
  ];

  const HEALTHCARE_SERVICES = [
    'Primary Care',
    'Dentistry',
    'Mental Health',
    'Pediatrics',
    'Cardiology',
    'Orthopedics',
    'Obstetrics & Gynecology',
    'Physical Therapy',
    'Psychiatry',
    'Ophthalmology',
    'Urgent Care',
    'Endocrinology',
    'Oncology',
  ];

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [filteredProviders, setFilteredProviders] = useState<
    HealthCareProvider[]
  >([]);
  const [selectedHcp, setSelectedHCP] = useState<
    HealthCareProvider | undefined
  >();

  // These are for setting filter options
  const [distance, setDistance] = useState<number>(0);
  const [zipCode, setzipCode] = useState<string>('');
  const [insurance, setInurance] = useState<string>('');
  const [type, setType] = useState<string>('');

  return (
    <div className="app">
      {currentPage === 0 && (
        <LandingPage
          insuranceProviders={INSURANCE_PROVIDERS}
          healthCareServices={HEALTHCARE_SERVICES}
          distance={distance}
          zipCode={zipCode}
          insurance={insurance}
          type={type}
          setDistance={setDistance}
          setZipCode={setzipCode}
          setInsurance={setInurance}
          setType={setType}
          setCurrentPage={setCurrentPage}
          setFilteredProviders={setFilteredProviders}
        ></LandingPage>
      )}
      {currentPage === 1 && (
        <FilteredResults
          filteredProviders={filteredProviders}
          insuranceProviders={INSURANCE_PROVIDERS}
          healthCareServices={HEALTHCARE_SERVICES}
          distance={distance}
          zipCode={zipCode}
          insurance={insurance}
          type={type}
          setDistance={setDistance}
          setZipCode={setzipCode}
          setInsurance={setInurance}
          setType={setType}
          setCurrentPage={setCurrentPage}
          setFilteredProviders={setFilteredProviders}
          setSelectedHcp={setSelectedHCP}
        ></FilteredResults>
      )}
      {currentPage === 2 && <Scheduler selectedHcp={selectedHcp}></Scheduler>}
    </div>
  );
}

export default App;
