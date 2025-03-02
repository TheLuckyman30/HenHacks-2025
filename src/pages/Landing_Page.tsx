import { useState } from 'react';
import './../css/Landing_Page.css';
import FindForm from '../components/FindForm';
import { HealthCareProvider } from '../interfaces/HealthCareProvider';

interface LandingPageProps {
  allProviders: HealthCareProvider[];
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
  allProviders,
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
    <div className="lp">
      <div className="lp-title">Welcome to your Health Care Portal</div>
      <div className="lp-button-container">
        <div onClick={formControl} className="lp-button">
          Find doctors with insurance
        </div>
      </div>
      {showForm && (
        <div className="lp-ff-container">
          <FindForm
            allProviders={allProviders}
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
