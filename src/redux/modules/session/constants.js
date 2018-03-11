import generateType from '../../../utils/actionTypes';

export const NAME = 'session';

export const REGISTER = generateType(NAME, 'REGISTER');
export const GET_USER_ME = generateType(NAME, 'GET_USER_ME');
export const SET_DATA = `${NAME}/SET_DATA`;
