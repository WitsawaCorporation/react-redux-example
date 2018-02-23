import { UserAPI } from '../../../api'
import {
  REGISTER
} from './constants';

export const register = credentials => (dispatch) => {
  dispatch({ type: REGISTER.request });
  UserAPI.create(credentials)
    .then(response => dispatch({ type: REGISTER.success, payload: response }))
    .catch(error => dispatch({ type: REGISTER.failure, error }));
};
