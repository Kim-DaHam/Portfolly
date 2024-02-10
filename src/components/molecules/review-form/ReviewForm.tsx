import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import * as S from '@/components/molecules/review-form/ReviewForm.styled';
import { SetState } from "@/types";
import { useReviewPostQuery } from '@/utils/api-service/commission';

import { addValidationErrorToast } from '@/utils';

import { Button, Profile, Rating } from '@/components';

type Props = {
	handleReviewOpen: SetState<boolean>;
	commission: any;
};

export type FormValues = {
	content: string;
	score: number;
};

const defaultValues: FormValues = {
	content: '',
	score: 0,
};

export default function ReviewForm({ handleReviewOpen, commission }: Props) {
	const dispatch = useDispatch();
	const { register, handleSubmit, setValue, formState: { errors, isSubmitting }} = useForm<FormValues>({
		mode: 'onSubmit',
		defaultValues: defaultValues,
	});

	const reviewMutation = useReviewPostQuery(commission.id, commission.portfolio.id);

	const onSubmit = (form: FormValues) => {
		return reviewMutation.mutate(form, {
			onSuccess: () => {
				handleReviewOpen(false);
			},
		});
	};

	useEffect(() => {
		addValidationErrorToast(isSubmitting, errors, dispatch);
	}, [isSubmitting]);

	return (
		<S.Wrapper>
			<Profile type='portfolio' portfolio={commission.portfolio}/>
			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<Rating
					setValue={setValue}
					{...register('score', {
						validate: (value: number) => value === 0 ? '별점을 등록하세요.' : true,
					})}
				/>
				<S.TextArea
					{...register('content', {
						required: '리뷰를 최소 10글자 이상 작성하세요.',
						validate: (value: string) => value.length < 10 ? '리뷰를 최소 10글자 이상 작성하세요.' : true,
					})}
				/>

				<S.ButtonBox>
					<Button
						color='black'
						type='submit'
					>
						리뷰 등록
					</Button>
					<Button
						color='gray'
						onClick={() => handleReviewOpen(false)}
					>
						작성 취소
					</Button>
				</S.ButtonBox>
			</S.Form>
		</S.Wrapper>
	)
}