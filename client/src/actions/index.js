import axios            from 'axios';

import { FETCH_USER, FETCH_SURVEYS }   from './types';

// This line is equivalent to
// export function fetchUser() {
//   return async function (dispatch) {
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');


  dispatch({ type: FETCH_USER, payload: res.data });
};

export const saksham =()=> async dispatch => {};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');

  dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
}
