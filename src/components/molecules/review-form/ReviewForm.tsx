import { Button, Profile, Rating } from '@/components';
import * as S from '@/components/molecules/review-form/ReviewForm.styled';
import { SetState } from "@/types";

type Props = {
	handleReviewOpen: SetState<boolean>;
	commission: any;
};

export default function ReviewForm({ handleReviewOpen, commission }: Props) {
	return (
		<S.Wrapper>
			<Profile type='portfolio' user={commission.portfolio}/>
			<S.Form>
				<Rating />
				<S.TextArea />

				<S.ButtonBox>
					<Button color='black'>리뷰 등록</Button>
					<Button color='gray' onClick={() => handleReviewOpen(false)}>작성 취소</Button>
				</S.ButtonBox>
			</S.Form>
		</S.Wrapper>
	)
}