export const getErrorMessage = (status: number) => {
	switch (status) {
		case 401:
		case 402:
			return {
				title: '접근 권한이 없습니다.',
				content: '로그인이 필요한 서비스입니다.',
			};
		case 409:
		case 500:
		default:
			return {
				title: '서비스에 접속할 수 없습니다.',
				content: '새로고침 하거나 잠시 후 다시 접속해 주시기 바랍니다.',
			};
	}
};