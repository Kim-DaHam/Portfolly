import { Fragment, useState } from "react";
import { FaStar as Star, FaStarHalf as HalfStar } from "react-icons/fa";

import { Text } from '@/components';
import * as S from "@/components/molecules/rating/Rating.styled";

type Props = {
	readonly?: boolean;
	setValue?: any;
	score?: number;
};

export default function Rating({ readonly=false, setValue, score=0 }: Props) {
	const [rating, setRating] = useState(score);

	return(
		<S.Wrapper>
			<S.Content>
				{new Array(10).fill(0).map((_, index: number) => {
					const value = 5 - index * 0.5;
					const isHalf = index % 2 === 0 || index === 0 ? false : true;

					return (
						<Fragment key={index}>
							{ !readonly &&
								<S.Input type='radio' id={`star${value}`} value={value}/>
							}
							<S.Label
								onClick={readonly ? () => '' : () => setRating(value)}
								htmlFor={`stars${value}`}
								$isHalf={isHalf}
								$isFilled={value <= rating ? true : false}
							>
								{ isHalf ? <HalfStar /> : <Star />}
							</S.Label>
						</Fragment>
					);
				})}
			</S.Content>
			<Text type='common' color='gray'>{rating} / 5</Text>
		</S.Wrapper>
	)
}