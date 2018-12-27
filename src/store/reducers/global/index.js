import { combineReducers } from 'redux';
import { globalDataReducer as globalData } from './global-data';
import { userInfoReducer as userInfo } from './user-info';

export default combineReducers({ globalData, userInfo });
