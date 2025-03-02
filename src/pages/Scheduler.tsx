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
          <div className="sc-appts">
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
                {appointment.healthCareProvider.name}
              </div>
              <div style={{ fontSize: '18px' }}>
                {'Type: ' + appointment.healthCareProvider.type}
              </div>
              <div style={{ fontSize: '18px' }}>
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
              className="sc-cancel"
            >
              Cancel
            </div>
            <div className="sc-non-working">Reschedule</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scheduler;
