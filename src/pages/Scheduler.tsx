import { Appointment } from '../interfaces/Appointment';
import { HealthCareProvider } from '../interfaces/HealthCareProvider';
import { ProviderAndAppt } from '../interfaces/ProviderAndAppt';
import './../css/Scheduler.css';

interface SchedulerProps {
  allProviders: HealthCareProvider[];
  appointments: ProviderAndAppt[];
  setAllProviders: (allProviders: HealthCareProvider[]) => void;
  setAppointments: (appointments: ProviderAndAppt[]) => void;
}

function Scheduler({
  allProviders,
  appointments,
  setAllProviders,
  setAppointments,
}: SchedulerProps) {
  function cancel(healthCareProvider: HealthCareProvider, appt: Appointment) {
    setAllProviders(
      allProviders.map((provider: HealthCareProvider) => {
        if (provider.name === healthCareProvider.name) {
          provider.appointments.push(appt);
        }
        return provider;
      })
    );
    setAppointments(
      appointments.filter(
        (appointment: ProviderAndAppt) => appointment.appts !== appt
      )
    );
  }

  return (
    <div className="sc">
      <div className="sc-container">
        {appointments.map((appointment: ProviderAndAppt) => (
          <div
            style={{ display: 'flex', margin: '1rem', alignItems: 'center' }}
          >
            <div>
              <div style={{ fontWeight: 'bold' }}>
                {appointment.healthCareProvider.name}
              </div>
              <div>
                {appointment.appts.day +
                  ' ' +
                  appointment.appts.month +
                  ' ' +
                  appointment.appts.year +
                  ' ' +
                  appointment.appts.time}
              </div>
            </div>
            <div
              onClick={() =>
                cancel(appointment.healthCareProvider, appointment.appts)
              }
              style={{ margin: '5rem', padding: '1rem' }}
            >
              Cancel
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scheduler;
