import { HealthCareProvider } from '../interfaces/HealthCareProvider';

interface FilteredResultsProps {
  filteredProviders: HealthCareProvider[];
}

function FilteredResults({ filteredProviders }: FilteredResultsProps) {
  return <div>test</div>;
}

export default FilteredResults;
