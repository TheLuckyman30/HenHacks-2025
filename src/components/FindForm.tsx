import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import './../css/FindForms.css';

interface FindFormProps {
  insuranceProviders: string[];
  healthCareServices: string[];
  distance: number;
  zipCode: string;
  insurance: string;
  type: string;
  setDistance: (distance: number) => void;
  setZipCode: (zipCode: string) => void;
  setInsurance: (insurance: string) => void;
  setType: (type: string) => void;
}

function FindForm({
  insuranceProviders,
  healthCareServices,
  distance,
  zipCode,
  insurance,
  type,
  setDistance,
  setZipCode,
  setInsurance,
  setType,
}: FindFormProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField
        label="Distance"
        value={distance}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setDistance(Number(event.target.value))
        }
      ></TextField>
      <TextField
        label="Zip Code"
        value={zipCode}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setZipCode(event.target.value)
        }
      ></TextField>
      <FormControl>
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
      <FormControl>
        <InputLabel>Type</InputLabel>
        <Select
          value={type}
          label="Type"
          onChange={(event: SelectChangeEvent) =>
            setType(event.target.value as string)
          }
        >
          {healthCareServices.map((service: string) => (
            <MenuItem value={service}>{service}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="ff-submit">Submit</div>
    </div>
  );
}

export default FindForm;
