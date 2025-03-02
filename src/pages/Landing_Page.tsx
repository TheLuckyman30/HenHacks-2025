import { useState } from 'react';
import './../css/Landing_Page.css';
import FindForm from '../components/FindForm';
import Footer from '../components/Footer';
import { HealthCareProvider } from '../interfaces/HealthCareProvider';
import { Row, Col, Container } from 'react-bootstrap';
import medicine3 from '../assets/medicine3.jpg';
import myChart from '../assets/mychart.png';
import stLuke from '../assets/stLuke.png';
import ClinicForm from '../components/ClincForm';

interface LandingPageProps {
  allProviders: HealthCareProvider[];
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
  setCurrentPage: (page: number) => void;
  setFilteredProviders: (providers: HealthCareProvider[]) => void;
}

function LandingPage({
  allProviders,
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
  setCurrentPage,
  setFilteredProviders,
}: LandingPageProps) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showClinicForm, setshowClinicForm] = useState<boolean>(false);

  function formControl() {
    setShowForm(!showForm);
  }

  function clinicFormControl() {
    setshowClinicForm(!showClinicForm);
  }

  return (
    <div>
      <div className=" background">
        <Container
          style={{ width: '100%', height: '100%', justifyContent: 'center' }}
        >
          <Row style={{ display: 'flex', height: 'fit-content' }}>
            <Col
              style={{
                backgroundColor: '#ADD9E6',
                minWidth: '40%',
                margin: '5%',
                borderRadius: '15%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden', // Prevents content from overflowing
                padding: '20px',
                border: '4px solid white',
              }}
            >
              <img
                src={medicine3}
                alt="Medicine"
                style={{
                  width: '100%',
                  minWidth: '400px',
                  borderRadius: '15px',
                  backgroundSize: 'cover',
                }}
              />
            </Col>
            <Col
              style={{
                backgroundColor: 'white',
                minWidth: '35%',
                margin: '5%',
                borderRadius: '15%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <div></div>
                <div onClick={formControl} className="lp-button pinkish">
                  Find doctors with insurance
                </div>
              </div>
              {showForm && (
                <div
                  style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)' /* Centers the form */,
                    zIndex: 1000,
                    background: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
                  }}
                >
                  <FindForm
                    allProviders={allProviders}
                    insuranceProviders={insuranceProviders}
                    healthCareServices={healthCareServices}
                    distance={distance}
                    zipCode={zipCode}
                    insurance={insurance}
                    type={type}
                    setDistance={setDistance}
                    setZipCode={setZipCode}
                    setInsurance={setInsurance}
                    setType={setType}
                    setShowForm={setShowForm}
                    setCurrentPage={setCurrentPage}
                    setFilteredProviders={setFilteredProviders}
                  ></FindForm>
                </div>
              )}

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <div onClick={clinicFormControl} className="lp-button blueish">
                  Find out insurances for specific Clinics
                </div>
              </div>
              {showClinicForm && (
                <div
                  style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)' /* Centers the form */,
                    zIndex: 1000,
                    background: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
                  }}
                >
                  <ClinicForm
                    allProviders={allProviders}
                    insuranceProviders={insuranceProviders}
                    insurance={insurance}
                    setInsurance={setInsurance}
                    setShowClinicForm={setshowClinicForm}
                  ></ClinicForm>
                </div>
              )}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <div onClick={() => setCurrentPage(2)} className="lp-button">
                  Check appointments
                </div>
              </div>
            </Col>
          </Row>

          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Row
              style={{
                backgroundColor: 'white',
                minWidth: '40%',
                minHeight: '300px',
                margin: '5%',
                borderRadius: '15%',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden', // Prevents content from overflowing
                padding: '20px',
                border: '4px solid white',
                textAlign: 'center', // Ensures the text inside the Row is centered
              }}
            >
              <h2
                style={{
                  color: 'brown',
                  textAlign: 'center',
                }}
              >
                My Portals
              </h2>
              <hr
                style={{
                  backgroundColor: 'brown',
                  width: '50%',
                  margin: '20px auto',
                  height: '2px',
                  border: 'none',
                }}
              />
              <button
                className="lp-button"
                style={{
                  borderRadius: '50%',
                  backgroundColor: 'brown',
                  color: 'white',
                  border: 'none',
                  display: 'inline',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  overflow: 'hidden',
                  minWidth: '20%',
                  minHeight: '20%',
                }}
                onClick={() =>
                  (window.location.href = 'https://www.mychart.org/')
                }
              >
                <img
                  src={myChart} // Replace with your image path
                  alt="My Image"
                  style={{
                    width: '100%', // Ensure the image takes up the entire button
                    height: '100%',
                    backgroundSize: 'contain',

                    // Ensures the image covers the button area without distortion
                  }}
                />
              </button>
              <button
                className="lp-button"
                style={{
                  borderRadius: '50%', // This makes the button round
                  backgroundColor: '#003F78',
                  color: 'white',
                  border: 'none',
                  display: 'inline',
                  justifyContent: 'center', // Center the image inside the button
                  alignItems: 'center', // Vertically center the image
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  overflow: 'hidden',
                  minWidth: '20%',
                  minHeight: '20%',
                }}
                onClick={() =>
                  (window.location.href = 'https://www.slhn.org/mychart/login')
                }
              >
                <img
                  src={stLuke} // Replace with your image path
                  alt="My Image"
                  style={{
                    width: '100%', // Ensure the image takes up the entire button
                    height: '100%',
                    backgroundSize: 'contain',
                    // Ensures the image covers the button area without distortion
                  }}
                />
              </button>
            </Row>
            <Col></Col>
            <Row></Row>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default LandingPage;
