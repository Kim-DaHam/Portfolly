import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';

type InitialState = {
	authority: 'expert' | 'client',
	isLogin: boolean,
}

const initialState: InitialState = {
	authority: 'expert',
	isLogin: true,
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

export default loginSlice;