import { combineReducers } from 'redux';
import posts from './posts';
import users from './auth';
export default combineReducers({ posts, users });
