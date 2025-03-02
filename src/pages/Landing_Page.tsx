import { useState } from 'react';
import './../css/Landing_Page.css';
import FindForm from '../components/FindForm';
import Footer from '../components/Footer';
import { HealthCareProvider } from '../interfaces/HealthCareProvider';
import { Row, Col, Container } from 'react-bootstrap';
import medicine3 from '../assets/medicine3.jpg';
import MyNavBar from '../components/navBar';

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

  function formControl() {
    setShowForm(!showForm);
  }

  return (
    <div>
      <div className=" background">
        <section style={{ backgroundColor: 'white', minHeight: '20px' }}>
          <MyNavBar></MyNavBar>
        </section>
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
                <div></div>
                <div onClick={formControl} className="lp-button blueish">
                  Find out insurances for specific Clinics
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <div></div>
                <div onClick={formControl} className="lp-button">
                  Check appointments
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default LandingPage;
