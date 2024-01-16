import { FiStar as StarIcon } from "react-icons/fi";

import { Text } from '@/components';
import * as S from "@/components/molecules/rating/Rating.styled";

export default function Rating() {
	return(
		<S.Wrapper>
			<S.Content>
				{new Array(0).fill(0, 0, 5).map((_, index: number) => {
					return <StarIcon key={index}/>;
				})}
			</S.Content>
			<Text type='common' color='gray'>Score</Text>
		</S.Wrapper>
	)
}