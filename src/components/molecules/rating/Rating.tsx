import { FiStar as StarIcon } from "react-icons/fi";

import * as S from "@/components/molecules/rating/Rating.styled";
import { Text } from '@/styles/Text.styled';

export default function Rating() {
	return(
		<S.Wrapper>
			<S.Content>
				{new Array(0).fill(0, 0, 5).map((_, index: number) => {
					return <StarIcon key={index}/>;
				})}
			</S.Content>
			<Text size='Medium' color='Gray'>Score</Text>
		</S.Wrapper>
	)
}