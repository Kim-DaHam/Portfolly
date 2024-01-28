import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Button, Profile, Rating } from '@/components';
import * as S from '@/components/molecules/review-form/ReviewForm.styled';
import { setToast } from '@/redux/toastSlice';
import { SetState } from "@/types";
import { addValidationErrorToast } from '@/utils';
import { useReviewPostQuery } from '@/utils/api-service/commission';

type Props = {
	handleReviewOpen: SetState<boolean>;
	commission: any;
};

export type FormValues = {
	content: string;
	rating: number;
};

const defaultValues: FormValues = {
	content: '',
	rating: 0,
};

export default function ReviewForm({ handleReviewOpen, commission }: Props) {

	const dispatch = useDispatch();
	const { register, handleSubmit, setValue, formState: { errors, isSubmitting }} = useForm<FormValues>({
		mode: 'onSubmit',
		defaultValues: defaultValues,
	});

	const reviewMutation = useReviewPostQuery(commission.id);

	const onSubmit = (form: FormValues) => {
		return reviewMutation.mutate(form, {
			onSuccess: () => {
				handleReviewOpen(false);
				dispatch(setToast({ id: 0, type: 'success', message: '리뷰가 등록되었습니다.'}));
			},
		});
	};

	useEffect(() => {
		addValidationErrorToast(isSubmitting, errors, dispatch);
	}, [isSubmitting]);

	return (
		<S.Wrapper>
			<Profile type='portfolio' user={commission.portfolio}/>
			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<Rating setValue={setValue} {...register('rating', {
					validate: (value: number) => value === 0 ? '별점을 등록하세요.' : true,
				})}/>
				<S.TextArea {...register('content', {
					required: '리뷰를 최소 10글자 이상 작성하세요.',
					validate: (value: string) => value.length < 10 ? '리뷰를 최소 10글자 이상 작성하세요.' : true,
				})}/>

				<S.ButtonBox>
					<Button color='black' type='submit'>리뷰 등록</Button>
					<Button color='gray' onClick={() => handleReviewOpen(false)}>작성 취소</Button>
				</S.ButtonBox>
			</S.Form>
		</S.Wrapper>
	)
}

function dispatch(arg0: any) {
	throw new Error('Function not implemented.');
}
