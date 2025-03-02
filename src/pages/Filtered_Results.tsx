import { HealthCareProvider } from '../interfaces/HealthCareProvider';

interface FilteredResultsProps {
  filteredProviders: HealthCareProvider[];
}

function FilteredResults({ filteredProviders }: FilteredResultsProps) {
  return (
    <div>
      {filteredProviders.map((provider: HealthCareProvider) => (
        <div>{provider.name}</div>
      ))}
    </div>
  );
}

export default FilteredResults;
