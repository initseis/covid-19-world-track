import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCountry } from '../redux/countries/countries';

const Country = ({ country }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <Link
        key={country.id}
        to={`/details/${country.id}`}
        onClick={() => {
          dispatch(loadCountry(true));
        }}
        value={country.id}
      >
        <h2>{country.name}</h2>
        <h3>
          Confirmed cases:
          {country.today_confirmed}
        </h3>
        <h3>
          Confirmed deaths:
          {country.today_deaths}
        </h3>
      </Link>
    </li>
  );
};

export default Country;
