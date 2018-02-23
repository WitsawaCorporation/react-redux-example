import {
  REGISTER
} from './constants';

const initialState = {
  isAuth: false,
  user: false,
  loading: false,
  error: false,
  registerResult: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case REGISTER.request:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case REGISTER.success:
      return {
        ...state,
        loading: false,
        error: false,
        registerResult: action.payload,
      };
    case REGISTER.failure:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
