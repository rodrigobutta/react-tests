import { combineReducers } from 'redux';

import TextReducer from './TextReducer';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  // the keys here are going to be the property of state that we are producing.
  text_reducer: TextReducer,
  auth_reducer: AuthReducer,
  user_reducer: UserReducer
});
