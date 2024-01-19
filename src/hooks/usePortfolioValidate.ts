import { UseFormGetValues } from "react-hook-form";

type Props = {
	getValues: UseFormGetValues<any>,
}

export default function usePortfolioValidate({ getValues }: Props) {
	const validateTitle = {
		min: () => getValues('title').length < 5 ? '제목을 5글자 이상 입력하세요.' : true,
		max: () => getValues('title').length > 100 ? '제목을 100글자 미만 입력하세요.' : true,
	};

	const validateContent = {
		content: () => getValues('content').length < 1 ? '포트폴리오 내용을 입력하세요.' : true,
		images: () => {
			if(getValues('section') === 'Video'){
				return getValues('images').length < 1 ? '비디오를 1개 이상 첨부하세요.' : true
			}
			return getValues('images').length < 1 ? '포트폴리오 이미지를 1개 이상 첨부하세요.' : true
		},
	};

	const validateCategory = () => getValues('category') === '카테고리' ? '카테고리를 선택하세요.' : true;

	const validateTags = () => getValues('tags').length > 10? '태그는 최대 10개까지 등록 가능합니다.' : true;

	const validateSummary = {
		min: () => getValues('summary').length < 20 ? '소개글을 20글자 이상 작성하세요.' : true,
		max: () => getValues('summary').length > 1000 ? '소개글을 1000 글자 미만 입력하세요.' : true,
	};

	return {
		title: validateTitle,
		content: validateContent,
		category: validateCategory,
		tags: validateTags,
		summary: validateSummary
	};
}