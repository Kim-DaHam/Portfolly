import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import alertSlice from '@/redux/alertSlice';
import loginSlice from '@/redux/loginSlice';
import sectionSlice from '@/redux/sectionSlice';
import toastSlice from '@/redux/toastSlice';

import searchSlice from './searchSlice';

const authPersistConfig = {
	key: 'user',
	storage,
	whitelist: ['id', 'isLogin', 'authority', 'profileImage'],
};

const sectionPersistConfig = {
	key: 'section',
	storage,
	whitelist: ['section'],
}

const rootReducer = combineReducers({
	user: persistReducer(authPersistConfig, loginSlice.reducer),
	section: persistReducer(sectionPersistConfig, sectionSlice.reducer),
	toast: toastSlice.reducer,
	alert: alertSlice.reducer,
	search: searchSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type RootState = ReturnType<typeof store.getState>;