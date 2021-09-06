import axios from 'axios';

const LOAD = 'react-capstone/countries/LOAD';
const REQUEST = 'react-capstone/countries/REQUEST';
const LOAD_COUNTRY = 'react-capstone/countries/LOAD_COUNTRY';
const BACK_HOME = 'react-capstone/countries/BACK_HOME';

const initialState = {
  loading: false,
  countries: [],
  total: {},
  countrySelected: undefined,
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: false,
        countries: action.payload.countries,
        total: action.payload.total,
      };

    case REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOAD_COUNTRY:
      return {
        ...state,
        countrySelected: action.payload,
      };

    case BACK_HOME:
      return {
        ...state,
        countrySelected: undefined,
      };

    default:
      return state;
  }
};

export const loadCountries = (payload) => ({
  type: LOAD,
  payload,
});

export const requestCountries = () => ({
  type: REQUEST,
});

export const loadCountry = (payload) => ({
  type: LOAD_COUNTRY,
  payload,
});

export const backHome = () => ({
  type: BACK_HOME,
});

export const fetchCountries = () => (dispatch) => {
  dispatch(requestCountries());
  axios
    .get('https://api.covid19tracking.narrativa.com/api/2021-9-4')
    .then((res) => {
      const countries = Object.entries(res.data.dates['2021-09-04'].countries);
      const filtered = countries.filter(
        (country) => country[1].regions.length !== 0,
      );
      const mapped = filtered.map((country) => country[1]);
      const obj = {
        countries: mapped,
        total: res.data.total,
      };
      dispatch(loadCountries(obj));
    });
};

export default countriesReducer;
