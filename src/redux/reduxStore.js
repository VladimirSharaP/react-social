import { createStore, combineReducers } from 'redux';
import { profileReducer } from './profileReducer';
import { dialogsReducer } from './dialogsReducer';
import { findUsersReducer } from './findUsersReducer';
import { authReducer } from './authReducer';

let redusers = combineReducers({
    profileReducer,
    dialogsReducer,
    findUsersReducer,
    authReducer
});

let store = createStore(redusers);

export default store;