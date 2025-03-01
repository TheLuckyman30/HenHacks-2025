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
  setShowForm: (show: boolean) => void;
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
  setShowForm,
}: FindFormProps) {
  return (
    <div className="form">
      <div
        onClick={() => setShowForm(false)}
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '1rem',
          fontSize: '20px',
          cursor: 'pointer',
        }}
      >
        x
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center ',
        }}
      >
        <div className="ff-input">
          <TextField
            label="Distance"
            value={distance}
            fullWidth
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setDistance(Number(event.target.value))
            }
          ></TextField>
        </div>
        <div className="ff-input">
          <TextField
            label="Zip Code"
            value={zipCode}
            fullWidth
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setZipCode(event.target.value)
            }
          ></TextField>
        </div>
        <div className="ff-input">
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
        <div className="ff-input">
          <FormControl fullWidth>
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
        </div>
        <div className="ff-submit">Submit</div>
      </div>
    </div>
  );
}

export default FindForm;
