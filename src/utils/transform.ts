const leftPad = (value: number) => {
	if (value >= 10) {
			return value;
	}

	return `0${value}`;
};

export const toLocalDateString = (date: Date) => {
	const year = date.getFullYear();
	const month = leftPad(date.getMonth() + 1);
	const day = leftPad(date.getDate());

	return `${year}-${month}-${day}`;
};