import { Text, Pagination, Rating } from "@/components";
import * as S from "@/components/organisms/profile-description/review/Review.styled";

export default function Review() {
	return(
		<S.Wrapper>
			<S.Content>
				<S.ReviewBox>
					<S.ProfileBox>
						<S.ProfileImage>
							<img />
						</S.ProfileImage>

						<S.Box>
							<Text type='common'>Name</Text>
							<Rating/>
						</S.Box>
					</S.ProfileBox>

					<S.ContentBox>
						리뷰리뷰
					</S.ContentBox>
				</S.ReviewBox>
			</S.Content>

			<Pagination/>
		</S.Wrapper>
	)
}