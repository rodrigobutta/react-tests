import {
  USERS_REQUEST,
  USERS_RESPONSE,
  USERS_FAIL
} from './types';


export const usersRequest = (user) => {
  return {
    type: USERS_REQUEST,
    payload: user
  };
}

export const usersResponse = (payload) => {
  return {
    type: USERS_RESPONSE,
    payload: payload
  };
}

export const usersFail = () => {
  return {
    type: USERS_FAIL
  };
}







export function fetchUsersWithRedux() {
    return (dispatch) => {
    dispatch(usersRequest());
    return fetchUsers().then(([response, json]) =>{
        if(response.status === 200){
        dispatch(usersResponse(json))
      }
      else{
        console.log('adssadasdasdasdads')
        dispatch(usersFail())
      }
    })
  }
}

function fetchUsers() {
  const URL = "http://cowork.localhost.com/api/user/all";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}

