import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';

type InitialState = {
	id: string | null;
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
			state.id = action.payload === 'expert' ? 'expert1' : 'client1';
			state.profileImage = action.payload === 'expert' ?
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg'
			:
				'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F82NGq%2FbtsCsv2n9fS%2Fb9VYv7jz81krLrKgSW1K40%2Fimg.jpg';
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