import { Appointment } from "./Appointment";
import { HealthCareProvider } from "./HealthCareProvider";

export interface ProviderAndAppt {
    healthCareProvider: HealthCareProvider
    appts: Appointment;
}