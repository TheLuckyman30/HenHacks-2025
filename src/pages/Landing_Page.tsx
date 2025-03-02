import { useState } from 'react';
import './../css/Landing_Page.css';
import FindForm from '../components/FindForm';
import AddWave from '../components/wave';
import zIndex from '@mui/material/styles/zIndex';
import { Box } from '@mui/material';
//import '../assets/backgroundImage.png';

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

  // These are for setting filter options
  const [distance, setDistance] = useState<number>(0);
  const [zipCode, setzipCode] = useState<string>('');
  const [insurance, setInurance] = useState<string>('');
  const [type, setType] = useState<string>('');

  function formControl() {
    setShowForm(!showForm);
  }

  return (
      <div className="lp background" >
        
        <section>
        
        <div className= "parent" style={{ display: 'flex', flexDirection: 'row' }}>
        <div className= "child">

example box 
<Box></Box>
</div>
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
            ></FindForm>
          </div>
        )}
        </section>
      </div>
      
  );
}

export default LandingPage;
