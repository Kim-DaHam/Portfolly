import { useNavigate } from 'react-router-dom';

import * as S from '@/components/molecules/items/review-item/ReviewItem.styled';

import { Image, Text, Rating } from '@/components';

type Props = {
	review: any;
};

export default function ReviewItem({ review }: Props) {
	const navigate = useNavigate();

	return (
		<S.Wrapper>
			<S.ProfileBox>
				<Image
					src={review.user.profileImage}
					alt='user-profile'
					size='3.5rem'
					shape='circle'
				/>

				<S.Box>
					<Text size='bodyMedium'>{review.user.nickname}</Text>
					<Rating readonly />
				</S.Box>

				<Image
					src={review.portfolio.thumbnailUrl}
					alt='portfolio-image'
					size='3.5rem'
					shape='foursquare'
					onClick={() => navigate(`/portfolios/${review.portfolio.id}`)}
				/>
			</S.ProfileBox>

			<S.ContentBox>
				{review.content}
			</S.ContentBox>
		</S.Wrapper>
	);
}