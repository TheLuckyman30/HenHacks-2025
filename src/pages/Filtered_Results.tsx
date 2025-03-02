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
    <div className="fr">
      <div className="fr-side-bar">
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {filteredProviders.map((provider: HealthCareProvider) => (
          <div className="fr-box">
            <img
              style={{ width: '300px', height: '300px' }}
              src={medOffice}
            ></img>
            <div style={{ marginLeft: '1rem' }}>
              <div>{'Name: ' + provider.name}</div>
              <div>{'Address: ' + provider.address}</div>
              <div>{'Distance: ' + provider.distance + ' miles'}</div>
              <div>{'Zipcode: ' + provider.zipCode}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilteredResults;
