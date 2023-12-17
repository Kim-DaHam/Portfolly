import { FiBookmark, FiHeart } from "react-icons/fi";

import { SquareButton } from "./Button.styled";

import { IComponentFactory } from "@/types";


type Toggle = 'Bookmark' | 'Like';

interface ToggleButtonProps {
	type: Toggle;
}

const renderToggleButton = (type: Toggle) => {
	const ComponentFactory: IComponentFactory = {
		Bookmark: (
			<SquareButton color='Black' type="Icon">
				<FiBookmark/>
			</SquareButton>
		),
		Like: (
			<SquareButton color='White' type="Icon">
				<FiHeart/>
			</SquareButton>
		),
	}

	return ComponentFactory[type];
}

function ToggleButton({type}: ToggleButtonProps) {
	return(
		<>
			{renderToggleButton(type)}
		</>
	)
}

export default ToggleButton;