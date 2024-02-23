import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';

type InitialState = {
	searchKeyword: string,
}

const initialState: InitialState = {
	searchKeyword: '',
};


export const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setKeyword: (state, action) => {
			state.searchKeyword = action.payload;
		},
	},
});

export const searchKeyword = (state: RootState) => state.search.searchKeyword;
export const { setKeyword } = searchSlice.actions;

export default searchSlice;