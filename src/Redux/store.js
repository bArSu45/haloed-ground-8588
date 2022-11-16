import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import { reducer as AppReducer } from './AppReducer/reducer'
import { reducer as AuthReducer } from './AuthReducer/reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const rootReducer = combineReducers({ AppReducer, AuthReducer })

export const store = legacy_createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)