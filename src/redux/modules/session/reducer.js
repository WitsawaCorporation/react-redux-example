import {
  REGISTER,
  SET_DATA,
  GET_USER_ME,
} from './constants';

const initialState = {
  isAuth: false,
  user: false,
  loading: false,
  error: false,
  registerResult: false,
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
    case GET_USER_ME.request:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_USER_ME.success:
      return {
        ...state,
        loading: false,
        error: false,
        user: action.payload,
      };
    case GET_USER_ME.failure:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
