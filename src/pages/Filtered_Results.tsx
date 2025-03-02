import { HealthCareProvider } from '../interfaces/HealthCareProvider';
import './../css/Filtered_Results.css';
import medOffice from './../assets/medOffice.jpg';
import SideBar from '../components/SideBar';

interface FilteredResultsProps {
  filteredProviders: HealthCareProvider[];
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

function FilteredResults({
  filteredProviders,
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
}: FilteredResultsProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <SideBar
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
          setCurrentPage={setCurrentPage}
          setFilteredProviders={setFilteredProviders}
        ></SideBar>
      </div>
      {filteredProviders.map((provider: HealthCareProvider) => (
        <div className="fr-box">
          <img src={medOffice}></img>
          <div>{provider.name}</div>
          <div>{provider.address}</div>
          <div>{provider.distance + ' miles'}</div>
          <div>{provider.zipCode}</div>
        </div>
      ))}
    </div>
  );
}

export default FilteredResults;
