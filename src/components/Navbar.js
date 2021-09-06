import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { backHome } from "../redux/countries/countries";

const Navbar = () => {
  const dispatch = useDispatch();
  const countrySelected = useSelector(
    (state) => state.countries.countrySelected
  );
  return (
    <div>
      {countrySelected && (
        <Link
          to="/home"
          onClick={() => {
            dispatch(backHome());
          }}
        >
          back
        </Link>
      )}
      {countrySelected && (
        <>
          <h2>{countrySelected.name}</h2>
          <h3>Confirmed cases: {countrySelected.today_confirmed}</h3>
          <h3>Confirmed deaths: {countrySelected.today_deaths}</h3>
        </>
      )}
      {!countrySelected && <h1>Covid Today</h1>}
    </div>
  );
};

export default Navbar;
