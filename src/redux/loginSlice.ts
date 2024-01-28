import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';

type InitialState = {
	authority: 'expert' | 'client',
	isLogin: boolean,
	userId: number,
}

const initialState: InitialState = {
	authority: 'client',
	isLogin: true,
	userId: 100,
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state, action) => {
            state = action.payload;
        },
				logout: (state) => {
					state = initialState;
				},
    },
});

export const { actions, reducer } = loginSlice;
export const isLogin = (state: RootState) => state.auth.isLogin;
export const userId = (state: RootState) => state.auth.userId;
export const authority = (state: RootState) => state.auth.authority;

export default loginSlice;