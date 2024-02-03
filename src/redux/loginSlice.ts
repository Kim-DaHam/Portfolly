import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';

type InitialState = {
	id: number | null;
	isLogin: boolean;
	authority: 'expert' | 'client' | null;
}

const initialState: InitialState = {
	id: null,
	isLogin: false,
	authority: null,
};

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		login: (state, action) => {
			state.authority = action.payload;
			state.isLogin = true;
			state.id = action.payload === 'expert' ? 1 : 100;
		},
		logout: (state) => {
			state = initialState;
		},
	},
});

export const { login, logout } = loginSlice.actions;
export const userState = (state: RootState) => state.user;

export default loginSlice;