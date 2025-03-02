import { useState } from 'react';
import LandingPage from './pages/Landing_Page';
import './App.css';
import { HealthCareProvider } from './interfaces/HealthCareProvider';
import FilteredResults from './pages/Filtered_Results';
import Scheduler from './pages/Scheduler';
import healthCareProviders from './data/hcp.json';
import NavBar from './components/NavBar';
import { ProviderAndAppt } from './interfaces/ProviderAndAppt';

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

  const [allProviders, setAllProviders] =
    useState<HealthCareProvider[]>(healthCareProviders);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [filteredProviders, setFilteredProviders] = useState<
    HealthCareProvider[]
  >([]);
  const [selectedHcp, setSelectedHCP] = useState<
    HealthCareProvider | undefined
  >();
  const [appointments, setAppointments] = useState<ProviderAndAppt[]>([]);

  // These are for setting filter options
  const [distance, setDistance] = useState<number>(0);
  const [zipCode, setzipCode] = useState<string>('');
  const [insurance, setInurance] = useState<string>('');
  const [type, setType] = useState<string>('');

  return (
    <div className="app">
      <NavBar setCurrentPage={setCurrentPage}></NavBar>
      {currentPage === 0 && (
        <LandingPage
          allProviders={allProviders}
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
          appointments={appointments}
          allProviders={allProviders}
          filteredProviders={filteredProviders}
          insuranceProviders={INSURANCE_PROVIDERS}
          healthCareServices={HEALTHCARE_SERVICES}
          distance={distance}
          zipCode={zipCode}
          insurance={insurance}
          type={type}
          selectedHcp={selectedHcp}
          setDistance={setDistance}
          setZipCode={setzipCode}
          setInsurance={setInurance}
          setType={setType}
          setFilteredProviders={setFilteredProviders}
          setSelectedHcp={setSelectedHCP}
          setAllProviders={setAllProviders}
          setAppointments={setAppointments}
        ></FilteredResults>
      )}
      {currentPage === 2 && (
        <Scheduler
          allProviders={allProviders}
          appointments={appointments}
          setAllProviders={setAllProviders}
          setAppointments={setAppointments}
        ></Scheduler>
      )}
    </div>
  );
}

export default App;
