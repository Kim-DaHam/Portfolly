import { ContentBox, ProfileBox, ProfileImage, ReviewBox, ReviewLayout, ReviewList, Span } from "./Review.styled";

import Pagination from "@/components/molecules/pagination/Pagination";
import Rating from "@/components/molecules/rating/Rating";
import { FlexColumnBox } from "@/styles/Container.styled";

function Review() {
	return(
		<ReviewLayout>
			<ReviewList>
				<ReviewBox>
					<ProfileBox>
						<ProfileImage>
							<img />
						</ProfileImage>

						<FlexColumnBox gap='0.5rem' justify="center">
							<Span>Name</Span>
							<Rating/>
						</FlexColumnBox>
					</ProfileBox>

					<ContentBox>
						리뷰리뷰
					</ContentBox>
				</ReviewBox>
			</ReviewList>

			<Pagination/>
		</ReviewLayout>
	)
}

export default Review;