import { Appointment } from '../interfaces/Appointment';
import { HealthCareProvider } from '../interfaces/HealthCareProvider';

interface ScheduleFormProps {
  selectedHcp: HealthCareProvider | undefined;
  setShowScheduleForm: (showScheduleForm: boolean) => void;
}

function ScheduleForm({ selectedHcp, setShowScheduleForm }: ScheduleFormProps) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        border: '1px solid black',
      }}
    >
      <div>
        <div
          onClick={() => setShowScheduleForm(false)}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingRight: '1rem',
            fontSize: '20px',
            cursor: 'pointer',
          }}
        >
          X
        </div>
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
    </div>
  );
}

export default ScheduleForm;
