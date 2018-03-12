import {
  USER_LOGIN,
  USER_LOGOUT,
  TOKEN_LOAD,
  TOKEN_RELEASE
} from './types';


export const userLogin = (user) => {
  return {
    type: USER_LOGIN,
    payload: user
  };
}

export const userLogout = () => {
  return {
    type: USER_LOGOUT
  };
}


export const tokenLoad = (token) => {
  return {
    type: TOKEN_LOAD,
    payload: token
  };
}

export const tokenRelease = () => {
  return {
    type: TOKEN_RELEASE
  };
}


