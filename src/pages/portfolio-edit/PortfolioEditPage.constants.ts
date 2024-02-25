import { UseFormGetValues } from "react-hook-form";

export const validateTitle = {
	min: (value: string) => (value.length < 5) ? '제목을 5글자 이상 입력하세요.' : true,
	max: (value: string) => (value.length > 100) ? '제목을 100글자 미만 입력하세요.' : true,
};

export const validateContent = (getValues: UseFormGetValues<any>) => {
	const validation = {
		content: () => (getValues('content').length < 1) ? '포트폴리오 내용을 입력하세요.' : true,
		images: () => {
			if(getValues('section') === 'Video') {
				return (getValues('videos').length < 1) ? '비디오를 1개 이상 첨부하세요.' : true;
			}

			return (getValues('images').length < 1) ? '포트폴리오 이미지를 1개 이상 첨부하세요.' : true;
		}
	};

	return validation;
};

export const validateCategory = {
	category: (value: string) => (value === '카테고리') ? '카테고리를 선택하세요.' : true,
};

export const validateTags = {
	max: (value: string[]) => (value.length > 10) ? '태그는 최대 10개까지 등록 가능합니다.' : true,
};

export const validateSummary = {
	min: (value: string) => (value.length < 20) ? '소개글을 20글자 이상 작성하세요.' : true,
	max: (value: string) => (value.length > 1000) ? '소개글을 1000 글자 미만 입력하세요.' : true,
};