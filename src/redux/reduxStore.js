import { createStore, combineReducers } from 'redux';
import { profileReduser } from './profileReduser';
import { dialogsReduser } from './dialogsReduser';

let redusers = combineReducers({
    profileReduser,
    dialogsReduser
});

let store = createStore(redusers);

export default store;