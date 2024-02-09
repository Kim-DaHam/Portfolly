export type Toast = {
	id: string,
	type: 'error' | 'success',
	message: string,
};

export type Modal = 'alert' | 'search' | 'commission';

export type AlertModal = 'delete' | 'cancel' | 'messageRoom' | 'error';