import generateType from '../../../utils/actionTypes';

export const NAME = 'session';

export const REGISTER = generateType(NAME, 'REGISTER');
export const SET_DATA = `${NAME}/SET_DATA`;
