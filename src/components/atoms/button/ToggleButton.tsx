import { useState } from "react";
import { FiBookmark as BookmarkIcon, FiHeart as LikeIcon } from "react-icons/fi";

import { Text, Button } from "@/components/atoms/index";

import type { IComponentFactory } from "@/types";

import { useToggleButtonQuery } from "@/utils";

export type Toggle = 'bookmark' | 'like';

type Props = {
	type: Toggle;
	portfolioId: string;
	isToggled: boolean;
	currentLikes?: number;
};

const buttonColor: {[key in Toggle]: string} = {
	like: '#e46868',
	bookmark: '#ffeb54',
};

const renderToggleButton = (
	type: Toggle,
	color: string,
	currentLikes: number,
	handleToggleButton: ()=>void
) => {
	const ComponentFactory: IComponentFactory = {
		bookmark: (
			<Button color='black' onClick={handleToggleButton}>
				<BookmarkIcon
					size={14}
					fill={color}
					color={color}
				/>
			</Button>
		),
		like: (
			<Button color='white' onClick={handleToggleButton}>
				<LikeIcon
					size={14}
					fill={color}
					color={color === 'white' ? 'black' : color}
				/>
				<Text size='label'>
					{currentLikes}
				</Text>
			</Button>
		),
	}

	return ComponentFactory[type];
};

export default function ToggleButton({type, portfolioId, isToggled, currentLikes=0}: Props) {
	const [color, setColor] = useState(isToggled ? buttonColor[type] : 'white');

	const toggleButtonMutation = useToggleButtonQuery(portfolioId, type);

	const handleToggleButton = () => {
		toggleButtonMutation.mutate();
		console.log(type, isToggled)
		if(isToggled) {
			setColor('white');
			return;
		}
		setColor(buttonColor[type]);
	};

	return(
		<>
			{renderToggleButton(type, color, currentLikes, handleToggleButton)}
		</>
	)
}