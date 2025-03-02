import { Appointment } from '../interfaces/Appointment';
import { HealthCareProvider } from '../interfaces/HealthCareProvider';
import { ProviderAndAppt } from '../interfaces/ProviderAndAppt';
import './../css/ScheduleForm.css';

interface ScheduleFormProps {
  appointments: ProviderAndAppt[];
  allProviders: HealthCareProvider[];
  filteredProviders: HealthCareProvider[];
  selectedHcp: HealthCareProvider | undefined;
  setShowScheduleForm: (showScheduleForm: boolean) => void;
  setAllProviders: (allProviders: HealthCareProvider[]) => void;
  setAppointments: (appointments: ProviderAndAppt[]) => void;
  setSelectedHCP: (selectedHcp: HealthCareProvider) => void;
  setFilteredProviders: (filteredProviders: HealthCareProvider[]) => void;
}

function ScheduleForm({
  appointments,
  allProviders,
  filteredProviders,
  selectedHcp,
  setShowScheduleForm,
  setAllProviders,
  setAppointments,
  setSelectedHCP,
  setFilteredProviders,
}: ScheduleFormProps) {
  function changeAppointments(appointment: Appointment) {
    if (selectedHcp) {
      selectedHcp = {
        ...selectedHcp,
        appointments: selectedHcp.appointments.filter(
          (providerApp: Appointment) => {
            if (providerApp !== appointment) {
              return true;
            }
            return false;
          }
        ),
      };
      setSelectedHCP(selectedHcp);
      setAllProviders(
        allProviders.map((provider: HealthCareProvider) =>
          provider.name !== selectedHcp?.name ? provider : selectedHcp
        )
      );
    }
    setFilteredProviders(
      filteredProviders.map((filtered: HealthCareProvider) =>
        filtered.name !== selectedHcp?.name ? filtered : selectedHcp
      )
    );
    selectedHcp
      ? setAppointments([
          ...appointments,
          { healthCareProvider: selectedHcp, appts: appointment },
        ])
      : 0;
  }

  return (
    <div className="sf ">
      <div>
        <div onClick={() => setShowScheduleForm(false)} className="sf-x">
          X
        </div>
        <div className="sf-container">
          <div>Available Appoitments:</div>
          {selectedHcp &&
            selectedHcp.appointments.map((appointment: Appointment) => (
              <div className="sf-appointment-container">
                <div
                  onClick={() => changeAppointments(appointment)}
                  className="sf-appointment"
                >
                  {appointment.day +
                    ' ' +
                    appointment.month +
                    ' ' +
                    appointment.year +
                    ' ' +
                    appointment.time}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ScheduleForm;
