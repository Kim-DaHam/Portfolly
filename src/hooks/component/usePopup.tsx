import { useState } from "react";

import { moveScrollY, stopScrollY } from "@/utils";

function usePopup() {
	const [isPopUp, setIsPopUp] = useState(false);
	const [coordinate, setCoordinate] = useState({
		right: 0,
		bottom: 0,
	});

	const getCoordinates = (button: HTMLElement)=> {
		const clientHeight = document.body.clientHeight;
		const coordinates = {
			right: button.getBoundingClientRect().right,
			bottom: button.getBoundingClientRect().bottom,
		}

		const isThereNoUnderPlaceToPopUp = screen.height - coordinates.bottom < 200;

		const popUpAtUpperPlace = (coordinates: {right:number, bottom:number})=>{
			if(clientHeight !== 0)
				coordinates.bottom = button.getBoundingClientRect().top - 80;
		}

		if(isThereNoUnderPlaceToPopUp){
			popUpAtUpperPlace(coordinates);
		}

		return {
			right: coordinates.right,
			bottom: coordinates.bottom,
		}
	}

	const popUp = (event:React.MouseEvent<HTMLButtonElement, MouseEvent> | MouseEvent) => {
		const menuButton = event.currentTarget as HTMLElement;

		setCoordinate(prev => ({
			...prev,
			right: getCoordinates(menuButton).right,
			bottom: getCoordinates(menuButton).bottom,
		}))

		stopScrollY();
		setIsPopUp(prev=>!prev);
	}

	const popOut = () => {
		if(isPopUp) {
			moveScrollY();
		}
		setIsPopUp(prev=>!prev);
	}

	return { isPopUp, coordinate, popUp, popOut };
}

export default usePopup;