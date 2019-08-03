import user from './user';
import repository from './repository';
import { combineReducers } from 'redux';

export default combineReducers({
    user,
    repository
})