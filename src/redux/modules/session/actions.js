import { UserAPI } from '../../../api';
import {
  REGISTER,
  SET_DATA,
} from './constants';

export const register = credentials => (dispatch) => {
  dispatch({ type: REGISTER.request });
  UserAPI.create(credentials)
    .then(response => dispatch({ type: REGISTER.success, payload: response }))
    .catch(error => dispatch({ type: REGISTER.failure, error }));
};

export const setData = data => (dispatch) => {
  dispatch({ type: SET_DATA, data });
};
