import React from 'react';
import { useSelector } from 'react-redux';
import Region from './Region';

const Details = ({ match }) => {
  const countries = useSelector((state) => state.countries.countries);

  const country = countries.find(
    (country) => country.id.toString() === match.params.id.toString(),
  );
  return (
    <div>
      <h2>{country.name}</h2>
      <h3>
        Confirmed cases:
        {country.today_confirmed}
      </h3>
      <h3>
        Confirmed deaths:
        {country.today_deaths}
      </h3>
      <ul>
        {country.regions.map((r) => (
          <Region key={r.name} region={r} />
        ))}
      </ul>
    </div>
  );
};

export default Details;
