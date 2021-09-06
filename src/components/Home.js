import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/countries/countries';
import Country from './Country';

const Home = () => {
  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.loading);
  const total = useSelector((state) => state.countries.total);
  const dispatch = useDispatch();

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchCountries());
    }
  }, []);

  return (
    <div>
      {total && (
        <>
          <h2>Covid in the World</h2>
          <h3>
            Confirmed cases:
            {total.today_confirmed || 'loading'}
          </h3>
          <h3>
            Confirmed deaths:
            {total.today_deaths || 'loading'}
          </h3>
        </>
      )}
      {loading && <h2>loading</h2>}
      <ul>
        {countries.map((country) => (
          <Country key={country.id} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
