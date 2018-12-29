/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2018-12-25 10:33:42 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2018-12-29 10:16:33
 */

import { createStore,applyMiddleware  } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import { combineReducers } from "redux";

import coreReducer from "../app/reducers/common/CoreReducer";
import coreUIReducer from "../app/reducers/common/CoreUIReducer";
import authReducer from "../app/reducers/auth/AuthReducer";

const rootReducer = combineReducers({  
    coreReducer,
    coreUIReducer,
    authReducer
})

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(logger,thunk,promise())
    );
}