import genClinic from '../assets/genClinic.png';
import './../css/NavBar.css';

interface NavBarProps {
  setCurrentPage: (page: number) => void;
}

const PAGES = [
  { name: 'Home', number: 0 },
  { name: 'Schedule', number: 2 },
  { name: 'My Appts.', number: 2 },
];
//const SETTINGS = ['Profile', 'Account', 'myAppts', 'Logout'];

function NavBar({ setCurrentPage }: NavBarProps) {
  return (
    <div className="nav">
      <img src={genClinic} style={{ width: '50px' }}></img>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div className="nav-bt-container">
          {PAGES.map((page) => (
            <div onClick={() => setCurrentPage(page.number)} className="nav-bt">
              {page.name}
            </div>
          ))}
        </div>
      </div>
      <div className="nav-bt">More HealthCare</div>
    </div>
  );
}
export default NavBar;
