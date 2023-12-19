import { FiStar as StarIcon } from "react-icons/fi";

import { RatingBox, RatingLayout, Score } from "./Rating.styled";

function Rating() {
	const renderStarIcon = ()=>{
		const stars = [];
		for(let i=0; i<5; i++){
			stars.push(<StarIcon/>)
		}
		return stars;
	}

	return(
		<RatingLayout>
			<RatingBox>
				{renderStarIcon()}
			</RatingBox>
			<Score>
				Score
			</Score>
		</RatingLayout>
	)
}

export default Rating;