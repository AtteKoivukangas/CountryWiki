import { useSelector } from 'react-redux';

export const useCountry = alpha2Code => {
  const countries = useSelector(state => state.countries.data);

  return countries.find(country => 
    country.alpha2Code === alpha2Code
  );
};

export const useFilteredCountries = () => {
  const countries = useSelector(state => state.countries.data);
  const filter = useSelector(state => state.filter);

  return countries.filter(country => {
    const name = country.name.toLowerCase();
    const subregion = country.subregion.toLowerCase();
    const loweredFilter = filter.toLowerCase();

    return name.includes(loweredFilter) || subregion.includes(loweredFilter);
  });
};