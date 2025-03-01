import { useState } from 'react';
import LandingPage from './pages/Landing_Page';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  return (
    <div className="app">
      {currentPage === 0 && <LandingPage></LandingPage>}
    </div>
  );
}

export default App;
