import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';

type InitialState = {
	id: number | null;
	isLogin: boolean;
	authority: 'expert' | 'client' | null;
	profileImage: string | null,
}

const initialState: InitialState = {
	id: null,
	isLogin: false,
	authority: null,
	profileImage: null,
};

export const loginSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			state.authority = action.payload;
			state.isLogin = true;
			state.id = action.payload === 'expert' ? 1 : 100;
			state.profileImage = 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FL1CyJ%2FbtsEliBIlFI%2FyxkummQTr4hNMBMceXTSJ0%2Fimg.png';
		},
		logout: (state) => {
			state.authority = null;
			state.isLogin = false;
			state.id = null;
			state.profileImage = null;
		},
	},
});

export const { login, logout } = loginSlice.actions;
export const userState = (state: RootState) => state.user;

export default loginSlice;