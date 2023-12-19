import { FiBookmark as BookmarkIcon, FiHeart as LikeIcon } from "react-icons/fi";

import { SquareButton } from "./Button.styled";

import { IComponentFactory } from "@/types";

type Toggle = 'Bookmark' | 'Like';

type Props = {
	type: Toggle;
};

const renderToggleButton = (type: Toggle) => {
	const ComponentFactory: IComponentFactory = {
		Bookmark: (
			<SquareButton color='Black'>
				<BookmarkIcon/>
			</SquareButton>
		),
		Like: (
			<SquareButton color='White'>
				<LikeIcon/>
			</SquareButton>
		),
	}

	return ComponentFactory[type];
}

function ToggleButton({type}: Props) {
	return(
		<>
			{renderToggleButton(type)}
		</>
	)
}

export default ToggleButton;