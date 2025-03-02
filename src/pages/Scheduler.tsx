import { ProviderAndAppt } from '../interfaces/ProviderAndAppt';
import './../css/Scheduler.css';

interface SchedulerProps {
  appointments: ProviderAndAppt[];
}

function Scheduler({ appointments }: SchedulerProps) {
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
            <div style={{ margin: '5rem', padding: '1rem' }}>Cancel</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scheduler;
