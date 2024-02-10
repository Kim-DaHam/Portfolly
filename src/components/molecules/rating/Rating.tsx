import { Fragment, forwardRef, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { FaStar as Star, FaStarHalf as HalfStar } from "react-icons/fa";

import * as S from "@/components/molecules/rating/Rating.styled";

import { Text } from '@/components';

type Props = {
	readonly?: boolean;
	setValue?: UseFormSetValue<any>;
	score?: number;
};

function Rating({ readonly=false, setValue=()=>'', score=0 }: Props) {
	const [rating, setRating] = useState(score / 20);

	const handleRating = (value: number) => {
		setValue('score', value * 20);
		setRating(value);
	};

	return(
		<S.Wrapper>
			<S.Content $readonly={readonly}>
				{new Array(10).fill(0).map((_, index: number) => {
					const value = 5 - index * 0.5;
					const isHalf = index % 2 === 0 || index === 0 ? false : true;

					return (
						<Fragment key={index}>
							{ !readonly &&
								<S.Input type='radio' id={`star${value}`} value={value}/>
							}
							<S.Label
								onClick={readonly ? () => '' : () => handleRating(value)}
								htmlFor={`stars${value}`}
								$isHalf={isHalf}
								$isFilled={value <= rating ? true : false}
								$readonly={readonly}
							>
								{ isHalf ? <HalfStar /> : <Star />}
							</S.Label>
						</Fragment>
					);
				})}
			</S.Content>
			<Text size='bodyMedium' color='gray'>{rating} / 5</Text>
		</S.Wrapper>
	)
}

export default forwardRef(Rating);