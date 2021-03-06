import { UserAPI } from '../../../api';
import {
  REGISTER,
  SET_DATA,
  GET_USER_ME,
} from './constants';

export const register = credentials => (dispatch) => {
  dispatch({ type: REGISTER.request });
  UserAPI.create(credentials)
    .then(response => dispatch({ type: REGISTER.success, payload: response }))
    .catch(error => dispatch({ type: REGISTER.failure, error }));
};

export const getUserMe = () => (dispatch) => {
  dispatch({ type: GET_USER_ME.request });
  const { userId } = localStorage.getItem('accessToken');
  UserAPI.findById({ id: userId })
    .then(response => dispatch({ type: GET_USER_ME.success, payload: response }))
    .catch(error => dispatch({ type: GET_USER_ME.failure, error }));
};

export const setData = data => (dispatch) => {
  dispatch({ type: SET_DATA, data });
};
