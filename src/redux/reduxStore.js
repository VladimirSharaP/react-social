import { createStore, combineReducers } from 'redux';
import { profileReduser } from './profileReduser';
import { dialogsReduser } from './dialogsReduser';
import { findUsersReduser } from './findUsersReduser';

let redusers = combineReducers({
    profileReduser,
    dialogsReduser,
    findUsersReduser
});

let store = createStore(redusers);

export default store;