import { Dispatch } from "react";
import { FieldErrors } from "react-hook-form";

import { setToast } from "@/redux/toastSlice";

export const checkMultipleErrors = (currentErrors: Array<any>, key: string) => {
	const multipleError = currentErrors.find((error) => {
		return error.id.indexOf(key) !== -1;
	});

	return multipleError ? true : false;
};

export const addValidationErrorToast = (isSubmitting: boolean, errors: FieldErrors<any>, dispatch: Dispatch<any>) => {
	if(isSubmitting) {
		const copyErrors: {[key in string]: any} = {...errors};
		const errorKeys = Object.keys(errors);
		const toastId = Date.now();

		if(errorKeys.length > 0)
			dispatch(setToast({ id: toastId, type: 'error', message: copyErrors[errorKeys[0]].message}));
	}
};