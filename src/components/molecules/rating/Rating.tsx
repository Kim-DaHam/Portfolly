import { FiStar as StarIcon } from "react-icons/fi";

import { RatingBox, RatingLayout } from "./Rating.styled";

import { Text } from '@/styles/Text.styled';

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
			<Text size='Medium' color='Gray'>Score</Text>
		</RatingLayout>
	)
}

export default Rating;