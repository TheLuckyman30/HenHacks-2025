import { Appointment } from '../interfaces/Appointment';
import { HealthCareProvider } from '../interfaces/HealthCareProvider';
import './../css/ScheduleForm.css';

interface ScheduleFormProps {
  selectedHcp: HealthCareProvider | undefined;
  setShowScheduleForm: (showScheduleForm: boolean) => void;
}

function ScheduleForm({ selectedHcp, setShowScheduleForm }: ScheduleFormProps) {
  return (
    <div className="sf">
      <div>
        <div onClick={() => setShowScheduleForm(false)} className="sf-x">
          X
        </div>
        <div className="sf-container">
          <div>Available Appoitments:</div>
          {selectedHcp &&
            selectedHcp.appointments.map((appointment: Appointment) => (
              <div className="sf-appointment-container">
                <div className="sf-appointment">
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
