export const isIncludedKeyword = (type: '닉네임' | '프로젝트명', commission: any, keyword: string) => {
	if(type === '닉네임') {
		return commission.client.nickname.includes(keyword);
	}
	if(type === '프로젝트명') {
		return commission.details.title.includes(keyword);
	}
};