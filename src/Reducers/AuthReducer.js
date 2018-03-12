import {
  USER_LOGIN,
  USER_LOGOUT,
  TOKEN_LOAD,
  TOKEN_RELEASE
} from '../Actions/types';


const USER_EMPTY_OBJECT = {
    id: null,
    name: null
};

const INITIAL_STATE = {

  user: USER_EMPTY_OBJECT,

  token: null

};

export default ( state=INITIAL_STATE, action ) => {
  switch (action.type) {

    case USER_LOGIN:
       return { ...state, user: action.payload }

    case USER_LOGOUT:
       return { ...state, user: USER_EMPTY_OBJECT }

    case TOKEN_LOAD:
      return { ...state, token: action.payload }

   case TOKEN_RELEASE:
      return { ...state, token: null }

    default:
      return state

  }
};
