import { Pagination, Rating } from "@/components/molecules";
import * as S from "@/components/organisms/profile-description/review/Review.styled";
import { Text } from "@/styles/Text.styled";

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
							<Text size='Medium'>Name</Text>
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