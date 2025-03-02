import { Appointment } from '../interfaces/Appointment';
import { HealthCareProvider } from '../interfaces/HealthCareProvider';

interface ScheduleFormProps {
  selectedHcp: HealthCareProvider | undefined;
}

function ScheduleForm({ selectedHcp }: ScheduleFormProps) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        border: '1px solid black',
      }}
    >
      <div
        style={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div>Available Appoitments:</div>
        {selectedHcp &&
          selectedHcp.appointments.map((appointment: Appointment) => (
            <div style={{ margin: '1rem', display: 'flex' }}>
              <div
                style={{
                  padding: '1rem',
                  border: '1px solid black',
                  borderRadius: '15px',
                }}
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
  );
}

export default ScheduleForm;
