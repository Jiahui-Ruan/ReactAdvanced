import { combineReducers } from 'redux';
import UsersReduer from './users';

const rootReducer = combineReducers({
  users: UsersReduer
});

export default rootReducer;
