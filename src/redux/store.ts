import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loginSlice from '@/redux/loginSlice';
import sectionSlice from '@/redux/sectionSlice';
import toastSlice from '@/redux/toastSlice';


const authPersistConfig = {
	key: 'user',
	storage,
	whitelist: ['id', 'isLogin', 'authority'],
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
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type RootState = ReturnType<typeof store.getState>;