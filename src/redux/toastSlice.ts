import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/redux/store';

import type { Toast } from '@/types';

type InitialState = {
	toasts: Toast[],
}

const initialState: InitialState = {
	toasts: [],
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setToast: (state, action) => {
			state.toasts = [...state.toasts, action.payload];
		},
    deleteToast: (state, action) => {
			state.toasts = state.toasts.filter((toast) => toast.id !== action.payload);
		},
  },
});

export const { setToast, deleteToast } = toastSlice.actions;
export const toasts = (state: RootState) => state.toast.toasts;
export default toastSlice;