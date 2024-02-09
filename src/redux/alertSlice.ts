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
    setModal: (state, action) => {
			state.modal = action.payload;
		},
    deleteModal: (state) => {
			state.modal = null;
		},
  },
});

export const { setModal, deleteModal } = alertSlice.actions;
export const alertState = (state: RootState) => state.alert.modal;
export default alertSlice;