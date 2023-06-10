import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import appSlice from './reducers/App/app';

const rootReducer = combineReducers({
    app: appSlice,
});
export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;