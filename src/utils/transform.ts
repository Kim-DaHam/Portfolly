const leftPad = (value: number) => {
	if (value >= 10) {
			return value;
	}

	return `0${value}`;
};

export const toLocalDateString = (date: string | number | Date) => {
	const dateObj = new Date(date);
	const year = dateObj.getFullYear();
	const month = dateObj.getMonth() + 1;
	const day = dateObj.getDate();

	return `${year}-${leftPad(month)}-${leftPad(day)}`;
};

export const toLocalTimeString = (date: string | number | Date) => {
	const dateObj = new Date(date);
	const time = dateObj.getHours() > 12 ? '오후' : '오전';
	const hour = dateObj.getHours() > 12 ? dateObj.getHours() - 12 : dateObj.getHours();
	const minutes = dateObj.getMinutes();

	return `${time} ${leftPad(hour)} : ${leftPad(minutes)}`;
}