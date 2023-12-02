import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import {api} from './reducers/apiSlice'
import {setupListeners} from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
    [api.reducerPath]:api.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk, api.middleware),
})

setupListeners(store.dispatch);
