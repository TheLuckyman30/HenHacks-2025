import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { HealthCareProvider } from '../interfaces/HealthCareProvider';
import { useState } from 'react';
import './../css/ClinicForm.css';
import checkmark from './../assets/checkmark.png';
import redX from './../assets/Red_X.png';

interface ClinicFormProps {
  allProviders: HealthCareProvider[];
  insuranceProviders: string[];
  insurance: string;
  setInsurance: (insurance: string) => void;
  setShowClinicForm: (showClinicForm: boolean) => void;
}

function ClinicForm({
  allProviders,
  insuranceProviders,
  insurance,
  setInsurance,
  setShowClinicForm,
}: ClinicFormProps) {
  const [name, setName] = useState<string>('');
  const [takesInsurance, setTakesInsurance] = useState<number>(0);

  function checker() {
    const test: HealthCareProvider | undefined = allProviders.find(
      (provider) => provider.name === name
    );
    if (test) {
      if (
        test.healthInsurance.some(
          (pInsurance: string) => pInsurance === insurance
        )
      ) {
        setTakesInsurance(1);
      } else {
        setTakesInsurance(2);
      }
    }
  }

  return (
    <div className="cf">
      <div onClick={() => setShowClinicForm(false)} className="ff-x">
        x
      </div>
      <div className="cf-input-container">
        <div className="cf-input">
          <FormControl fullWidth>
            <InputLabel>Clinic</InputLabel>
            <Select
              value={name}
              label="Clinic"
              onChange={(event: SelectChangeEvent) =>
                setName(event.target.value as string)
              }
            >
              {allProviders.map((provider: HealthCareProvider) => (
                <MenuItem value={provider.name}>{provider.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="cf-input">
          <FormControl fullWidth>
            <InputLabel>Insurance</InputLabel>
            <Select
              value={insurance}
              label="Insurance"
              onChange={(event: SelectChangeEvent) =>
                setInsurance(event.target.value as string)
              }
            >
              {insuranceProviders.map((provider: string) => (
                <MenuItem value={provider}>{provider}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div
          className={insurance && name ? 'cf-check' : 'cf-disabled'}
          onClick={checker}
        >
          Check
        </div>
        {takesInsurance === 1 && (
          <div style={{ marginTop: '2rem' }}>
            <div>This place takes your insurance!</div>
            <img className="cf-img" src={checkmark}></img>
          </div>
        )}
        {takesInsurance === 2 && (
          <div style={{ marginTop: '2rem' }}>
            <div>This place does not take your insurance!</div>
            <img className="cf-img" src={redX}></img>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClinicForm;
