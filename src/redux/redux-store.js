import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import searchReducer from './SearchReducer';

const reducers = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   searchData:searchReducer,
});

const store = createStore(reducers);

export default store;