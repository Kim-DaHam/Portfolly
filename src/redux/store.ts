import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loginSlice from '@/redux/loginSlice';
import sectionSlice from '@/redux/sectionSlice';
import toastSlice from '@/redux/toastSlice';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'section'],
}

const rootReducer = combineReducers({
	user: persistReducer(persistConfig, loginSlice.reducer),
	section: persistReducer(persistConfig, sectionSlice.reducer),
	toast: toastSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export type RootState = ReturnType<typeof store.getState>;