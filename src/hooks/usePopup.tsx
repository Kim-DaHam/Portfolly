import { useState } from "react";

function usePopup() {
	const [isPopUp, setIsPopUp] = useState(false);
	const [buttonCoordinate, setButtonCoordinate] = useState({
		right: 0,
		bottom: 0,
	});

	const calculateCoordinate = (button: HTMLElement)=> {
		const clientHeight = document.body.clientHeight;
		const coordinates = {
			right: button.getBoundingClientRect().right,
			bottom: button.getBoundingClientRect().bottom,
		}

		const isThereNoUnderPlaceToPopUp = clientHeight - coordinates.bottom < 200;

		const popUpAtUpperPlace = (coordinates: {right:number, bottom:number})=>{
			if(clientHeight !== 0)
				coordinates.bottom = button.getBoundingClientRect().top - 120;
		}

		if(isThereNoUnderPlaceToPopUp){
			popUpAtUpperPlace(coordinates);
		}

		return {
			right: coordinates.right,
			bottom: coordinates.bottom,
		}
	}

	const popUp = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const menuButton = event.currentTarget as HTMLElement;

		setButtonCoordinate(prev => ({
				...prev,
				right: calculateCoordinate(menuButton).right,
				bottom: calculateCoordinate(menuButton).bottom,
		}))

		setIsPopUp(prev=>!prev);
	}

	const popOut = ()=>{
		setIsPopUp(prev=>!prev);
	}

	return { isPopUp, buttonCoordinate, popUp, popOut };
}

export default usePopup;