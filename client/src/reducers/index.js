import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer'; //"errorReducer" and "authReducer" CODE ADDED FOR LOGIN
import authReducer from './authReducer';

export default combineReducers({
    item: itemReducer,
    error: errorReducer,
    auth: authReducer
});