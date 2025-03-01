import { useState } from 'react';
import './../css/Landing_Page.css';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import healthCareProviders from './../data/hcp.json';
import FindForm from '../components/FindForm';
import { HealthCareProvider } from '../interfaces/HealthCareProvider';

function LandingPage() {
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
  const [selectedHcp, setSelectedHcp] = useState<string>('');
  const [hcpInRange, sethcpInRange] = useState<HealthCareProvider[]>([]);

  // These are for setting filter options
  const [distance, setDistance] = useState<number>(0);
  const [zipCode, setzipCode] = useState<string>('');
  const [insurance, setInurance] = useState<string>('');
  const [type, setType] = useState<string>('');

  function formControl() {
    setShowForm(!showForm);
  }

  function filterHcpInRange() {
    sethcpInRange(
      healthCareProviders.filter((hcp: HealthCareProvider) => {
        if (hcp.zipCode === zipCode) {
          return hcp;
        }
      })
    );
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
        <div>
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
          ></FindForm>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
