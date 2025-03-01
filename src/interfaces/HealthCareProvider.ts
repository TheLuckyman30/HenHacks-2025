export interface HealthCareProvider {
  name: string;
  address: string;
  distance: number;
  zipCode: string;
  healthInsurance: string[];
  type: string;
}