import { HealthCareProvider } from '../interfaces/HealthCareProvider';
import './../css/Filtered_Results.css';
import medOffice from './../assets/medOffice.jpg';
import SideBar from '../components/SideBar';
import ScheduleForm from '../components/ScheduleForm';
import { useState } from 'react';
import { Appointment } from '../interfaces/Appointment';

interface FilteredResultsProps {
  appointments: Appointment[];
  allProviders: HealthCareProvider[];
  filteredProviders: HealthCareProvider[];
  insuranceProviders: string[];
  healthCareServices: string[];
  distance: number;
  zipCode: string;
  insurance: string;
  type: string;
  selectedHcp: HealthCareProvider | undefined;
  setDistance: (distance: number) => void;
  setZipCode: (zipCode: string) => void;
  setInsurance: (insurance: string) => void;
  setType: (type: string) => void;
  setFilteredProviders: (providers: HealthCareProvider[]) => void;
  setSelectedHcp: (selectedHcp: HealthCareProvider) => void;
  setAllProviders: (allProviders: HealthCareProvider[]) => void;
  setAppointments: (appointments: Appointment[]) => void;
}

function FilteredResults({
  appointments,
  allProviders,
  filteredProviders,
  insuranceProviders,
  healthCareServices,
  distance,
  zipCode,
  insurance,
  type,
  selectedHcp,
  setDistance,
  setZipCode,
  setInsurance,
  setType,
  setFilteredProviders,
  setSelectedHcp,
  setAllProviders,
  setAppointments,
}: FilteredResultsProps) {
  const [showScheduleForm, setShowScheduleForm] = useState<boolean>(false);
  return (
    <div className="fr">
      <div className="fr-side-bar">
        <SideBar
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
          setFilteredProviders={setFilteredProviders}
        ></SideBar>
      </div>
      <div className="fr-container">
        {filteredProviders.map((provider: HealthCareProvider) => (
          <div className="fr-box">
            <img className="fr-image" src={medOffice}></img>
            <div className="fr-margin-left">
              <div>{'Name: ' + provider.name}</div>
              <div>{'Address: ' + provider.address}</div>
              <div>{'Distance: ' + provider.distance + ' miles'}</div>
              <div>{'Zipcode: ' + provider.zipCode}</div>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setShowScheduleForm(true);
                  setSelectedHcp(provider);
                }}
              >
                Schedule
              </div>
            </div>
          </div>
        ))}
      </div>
      {showScheduleForm && (
        <div className="fr-sf-container">
          <ScheduleForm
            appointments={appointments}
            allProviders={allProviders}
            filteredProviders={filteredProviders}
            selectedHcp={selectedHcp}
            setShowScheduleForm={setShowScheduleForm}
            setAllProviders={setAllProviders}
            setAppointments={setAppointments}
            setSelectedHCP={setSelectedHcp}
            setFilteredProviders={setFilteredProviders}
          ></ScheduleForm>
        </div>
      )}
    </div>
  );
}

export default FilteredResults;
