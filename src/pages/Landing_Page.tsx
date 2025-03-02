import { useState } from 'react';
import './../css/Landing_Page.css';
import FindForm from '../components/FindForm';
import { HealthCareProvider } from '../interfaces/HealthCareProvider';

interface LandingPageProps {
  insuranceProviders: string[];
  healthCareServices: string[];
  distance: number;
  zipCode: string;
  insurance: string;
  type: string;
  setDistance: (distance: number) => void;
  setZipCode: (zipCode: string) => void;
  setInsurance: (insurance: string) => void;
  setType: (type: string) => void;
  setCurrentPage: (page: number) => void;
  setFilteredProviders: (providers: HealthCareProvider[]) => void;
}

function LandingPage({
  insuranceProviders,
  healthCareServices,
  distance,
  zipCode,
  insurance,
  type,
  setDistance,
  setZipCode,
  setInsurance,
  setType,
  setCurrentPage,
  setFilteredProviders,
}: LandingPageProps) {
  const [showForm, setShowForm] = useState<boolean>(false);

  function formControl() {
    setShowForm(!showForm);
  }

  return (
      <div className="lp background" >
        
        <div className= "parent" style={{ display: 'flex', flexDirection: 'row' }}>
        <div className= "child">
      </div>
          <div onClick={formControl} className="lp-button">
            Find doctors with insurance
          </div>
        </div>
      {showForm && (
        <div style={{ position: 'fixed', zIndex: '1000' }}>
          <FindForm
            insuranceProviders={insuranceProviders}
            healthCareServices={healthCareServices}
            distance={distance}
            zipCode={zipCode}
            insurance={insurance}
            type={type}
            setDistance={setDistance}
            setZipCode={setZipCode}
            setInsurance={setInsurance}
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
