import { ContentBox, FlexColumnBox, ProfileBox, ProfileImage, ReviewBox, ReviewLayout, ReviewList, Span } from "./Review.styled";

import Pagenation from "@/components/molecules/pagenation/Pagenation";
import Rating from "@/components/molecules/rating/Rating";

function Review() {
	return(
		<ReviewLayout>
			<ReviewList>
				<ReviewBox>
					<ProfileBox>
						<ProfileImage>
							<img />
						</ProfileImage>

						<FlexColumnBox>
							<Span>Name</Span>
							<Rating/>
						</FlexColumnBox>
					</ProfileBox>

					<ContentBox>
						리뷰리뷰
					</ContentBox>
				</ReviewBox>

			</ReviewList>
			<Pagenation/>
		</ReviewLayout>
	)
}

export default Review;