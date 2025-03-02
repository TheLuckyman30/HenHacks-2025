import { HealthCareProvider } from '../interfaces/HealthCareProvider';

interface SchedulerProps {
  selectedHcp: HealthCareProvider | undefined;
}

function Scheduler({ selectedHcp }: SchedulerProps) {
  return (
    <div>
      {selectedHcp && (
        <div>
          <div>{selectedHcp.name}</div>
          <div>{selectedHcp.address}</div>
          <div>{selectedHcp.zipCode}</div>
          <div>{selectedHcp.healthInsurance}</div>
        </div>
      )}
    </div>
  );
}

export default Scheduler;
