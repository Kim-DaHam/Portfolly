import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';

import type { Section } from '@/types';

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

export const section = (state: RootState) => state.section.section;
export const { setSection } = sectionSlice.actions;

export default sectionSlice;