import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';

import { Section } from '@/types/portfolio';

type InitialState = {
	section: Section,
}

const initialState: InitialState = {
	section: 'Android/iOS',
};


export const sectionSlice = createSlice({
	name: "section",
	initialState,
	reducers: {
		setSection: (state, action) => {
			state.section = action.payload;
		},
	},
});

export const { actions, reducer } = sectionSlice;
export const section = (state: RootState) => state.section.section;
export const { setSection } = sectionSlice.actions;

export default sectionSlice;