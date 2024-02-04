import * as S from '@/components/molecules/items/review-item/ReviewItem.styled';

import { Image, Text, Rating } from '@/components';

type Props = {
	review: any;
};

export default function ReviewItem({ review }: Props) {

	return (
		<S.Wrapper>
			<S.ProfileBox>
				<Image src={review.user.profileImage} alt='user-profile' size='60px' shape='foursquare' />

				<S.Box>
					<Text size='bodyMedium'>{review.user.nickname}</Text>
					<Rating readonly/>
				</S.Box>
			</S.ProfileBox>

			<S.ContentBox>
				{review.content}
			</S.ContentBox>
		</S.Wrapper>
	);
}