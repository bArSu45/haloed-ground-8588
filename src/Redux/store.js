import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk"
import { reducer as AppReducer } from './AppReducer/reducer'
import { reducer as AuthReducer } from './AuthReducer/reducer'
// AppReducer,AuthReducer
const rootReducer = combineReducers({ AppReducer, AuthReducer })
const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
