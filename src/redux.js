import {
  combineReducers,
  createStore,
} from 'redux';


export const LOGGIN_USER = "LOGGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";



// actions.js
export const loginUser = user => ({
  type: LOGGIN_USER,
  user
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});




// reducers.js
export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGGIN_USER:
            return action.user;
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
};

export const reducers = combineReducers({
  userReducer,
});




// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();