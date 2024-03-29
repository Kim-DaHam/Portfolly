import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/redux/store';

import type { AlertModal } from '@/types';

type InitialState = {
	modal: {
		type: AlertModal,
		onConfirm: () => void,
	} | null;
}

const initialState: InitialState = {
	modal: null,
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action) => {
			state.modal = action.payload;
		},
    deleteAlert: (state) => {
			state.modal = null;
		},
  },
});

export const { setAlert, deleteAlert } = alertSlice.actions;
export const alertState = (state: RootState) => state.alert.modal;
export default alertSlice;