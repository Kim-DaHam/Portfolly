import { FiStar as StarIcon } from "react-icons/fi";

import * as S from "@/components/molecules/rating/Rating.styled";
import { Text } from '@/styles/Text.styled';

export default function Rating() {
	const renderStarIcon = ()=>{
		const stars = [];
		for(let i=0; i<5; i++){
			stars.push(<StarIcon/>)
		}
		return stars;
	}

	return(
		<S.Wrapper>
			<S.Content>
				{renderStarIcon()}
			</S.Content>
			<Text size='Medium' color='Gray'>Score</Text>
		</S.Wrapper>
	)
}