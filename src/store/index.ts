import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import {api} from './reducers/apiSlice'
import {setupListeners} from "@reduxjs/toolkit/query";
import postReducer from "./reducers/postSlice";

const rootReducer = combineReducers({
    [api.reducerPath]:api.reducer,
    posts: postReducer
})

export type RootState = {
    posts: ReturnType<typeof postReducer>;
    [api.reducerPath]: ReturnType<typeof api.reducer>;
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk, api.middleware),
})

export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
