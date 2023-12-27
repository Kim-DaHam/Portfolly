import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import sectionSlice from './sectionSlice';

import loginSlice from '@/redux/loginSlice';

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['user'],
}

const rootReducer = combineReducers({
	auth: persistReducer(authPersistConfig, loginSlice.reducer),
	section: sectionSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type RootState = ReturnType<typeof store.getState>;