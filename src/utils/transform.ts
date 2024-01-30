const leftPad = (value: number) => {
	if (value >= 10) {
			return value;
	}

	return `0${value}`;
};

export const toLocalDateString = (date: Date) => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();

	return `${year}-${leftPad(month)}-${leftPad(day)}`;
};

export const toLocalTimeString = (date: Date) => {
	const time = date.getHours() > 12 ? '오후' : '오전';
	const hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
	const minutes = date.getMinutes();

	return `${time} ${leftPad(hour)} : ${leftPad(minutes)}`;
}