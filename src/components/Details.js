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
      <ul>
        {country.regions.map((r) => (
          <Region key={r.name} region={r} />
        ))}
      </ul>
    </div>
  );
};

export default Details;
