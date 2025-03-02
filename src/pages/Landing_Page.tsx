import { useState } from 'react';
import './../css/Landing_Page.css';
import FindForm from '../components/FindForm';
import { HealthCareProvider } from '../interfaces/HealthCareProvider';

interface LandingPageProps {
  filteredProviders: HealthCareProvider[];
  setCurrentPage: (page: number) => void;
  setFilteredProviders: (providers: HealthCareProvider[]) => void;
}

function LandingPage({
  filteredProviders,
  setCurrentPage,
  setFilteredProviders,
}: LandingPageProps) {
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

  const [showForm, setShowForm] = useState<boolean>(false);

  // These are for setting filter options
  const [distance, setDistance] = useState<number>(0);
  const [zipCode, setzipCode] = useState<string>('');
  const [insurance, setInurance] = useState<string>('');
  const [type, setType] = useState<string>('');

  function formControl() {
    setShowForm(!showForm);
  }

  return (
    <div className="lp">
      <div className="lp-title">Welcome to your Health Care Portal</div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div onClick={formControl} className="lp-button">
          Find doctors with insurance
        </div>
      </div>
      {showForm && (
        <div style={{ position: 'fixed', zIndex: '1000' }}>
          <FindForm
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
            setShowForm={setShowForm}
            setCurrentPage={setCurrentPage}
            setFilteredProviders={setFilteredProviders}
          ></FindForm>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
