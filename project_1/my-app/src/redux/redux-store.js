import {createStore, combineReducers} from 'redux'
import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'

let reducers = combineReducers({
  profileReducer: profileReducer,
  dialogsReducer: dialogsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
