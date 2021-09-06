import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { backHome } from '../redux/countries/countries';

const Navbar = () => {
  const dispatch = useDispatch();
  const countrySelected = useSelector(
    (state) => state.countries.countrySelected,
  );
  return (
    <div>
      {countrySelected && (
        <>
          <Link
            to="/home"
            onClick={() => {
              dispatch(backHome());
            }}
          >
            back
          </Link>
          <h1>Covid World Track</h1>
        </>
      )}
      {!countrySelected && <h1>Covid World Track</h1>}
    </div>
  );
};

export default Navbar;
