import { useState } from "react";
import { FiBookmark as BookmarkIcon, FiHeart as LikeIcon } from "react-icons/fi";

import { SquareButton } from "./Button.styled";

import { Label } from "@/styles/Text.styled";
import { IComponentFactory } from "@/types";
import { useToggleButtonQuery } from "@/utils/api-service/portfolio";

export type Toggle = 'bookmark' | 'like';

type Props = {
	type: Toggle;
	portfolioId: number;
	isToggled: boolean;
	currentLikes?: number;
};

const buttonColor: {[key in Toggle]: string} = {
	like: '#e46868',
	bookmark: '#ffeb54',
};

export default function ToggleButton({type, portfolioId, isToggled, currentLikes=0}: Props) {
	const [color, setColor] = useState(isToggled ? buttonColor[type] : '');

	const toggleButtonMutation = useToggleButtonQuery(portfolioId, type);

	const handleToggleButton = () => {
		toggleButtonMutation.mutate();
		if(isToggled) {
			setColor('');
		}
		if(!isToggled) {
			setColor(buttonColor[type]);
		}
	}

	const renderToggleButton = (type: Toggle) => {
		const ComponentFactory: IComponentFactory = {
			bookmark: (
				<SquareButton color='Black' onClick={handleToggleButton}>
					<BookmarkIcon fill={color} color={color}/>
				</SquareButton>
			),
			like: (
				<SquareButton color='White' onClick={handleToggleButton}>
					<LikeIcon fill={color} color={color}/>
					<Label>{currentLikes}</Label>
				</SquareButton>
			),
		}

		return ComponentFactory[type];
	}

	return(
		<>
			{renderToggleButton(type)}
		</>
	)
}