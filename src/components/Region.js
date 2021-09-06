import React from "react";

const Region = ({ region }) => {
  return (
    <li>
      <h2>{region.name}</h2>
      <h3>Confirmed cases: {region.today_confirmed}</h3>
      <h3>Confirmed deaths: {region.today_deaths}</h3>
    </li>
  );
};

export default Region;
