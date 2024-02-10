export const validateTitle = {
	min: (value: string) => (value.length < 5) ? '제목을 5글자 이상 입력하세요.' : true,
	max: (value: string) => (value.length > 100) ? '제목을 100글자 미만 입력하세요.' : true,
};

export const validateContent = {
	content: (value: string) => (value.length < 1) ? '커미션 내용을 입력하세요.' : true,
};

export const validateDeadline = (createdAt: string) => {
	return ({
		min: (value: string) => (new Date(value) < new Date(createdAt)) ? '마감일을 최소 하루 이상 설정하세요.' : true,
	});
};