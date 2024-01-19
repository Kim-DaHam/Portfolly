export const checkMultipleErrors = (currentErrors: Array<any>, key: string) => {
	const multipleError = currentErrors.find((error) => {
		return error.id.indexOf(key) !== -1;
	});

	return multipleError ? true : false;
};