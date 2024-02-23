import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';

type InitialState = {
	keyword: string,
}

const initialState: InitialState = {
	keyword: '',
};


export const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setKeyword: (state, action) => {
			state.keyword = action.payload;
		},
	},
});

export const keyword = (state: RootState) => state.search.keyword;
export const { setKeyword } = searchSlice.actions;

export default searchSlice;