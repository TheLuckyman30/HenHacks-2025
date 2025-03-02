import { useState } from 'react';
import LandingPage from './pages/Landing_Page';
import './App.css';
import { HealthCareProvider } from './interfaces/HealthCareProvider';
import FilteredResults from './pages/Filtered_Results';

function App() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [filteredProviders, setFilteredProviders] = useState<
    HealthCareProvider[]
  >([]);

  return (
    <div className="app">
      {currentPage === 0 && (
        <LandingPage
          filteredProviders={filteredProviders}
          setCurrentPage={setCurrentPage}
          setFilteredProviders={setFilteredProviders}
        ></LandingPage>
      )}
      {currentPage}
      {currentPage === 1 && (
        <FilteredResults
          filteredProviders={filteredProviders}
        ></FilteredResults>
      )}
    </div>
  );
}

export default App;
