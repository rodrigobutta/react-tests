import {
    USERS_REQUEST,
    USERS_RESPONSE
} from '../Actions/types';



const INITIAL_STATE = {

  users: null

};

export default ( state=INITIAL_STATE, action ) => {
  switch (action.type) {

    case USERS_REQUEST:
       return { ...state, token: null }

    case USERS_RESPONSE:
       return { ...state, users: action.payload }

    default:
      return state

  }
};
