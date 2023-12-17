import { useState } from "react";

function usePopup() {
	const [popUp, setPopUp] = useState(false);
	const [menuButtonCoordinate, setMenuButtonCoordinate] = useState({
		right: 0,
		bottom: 0,
	});

	const openMenu = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const menuButton = event.currentTarget as HTMLElement;

		setMenuButtonCoordinate((prev) => ({
				...prev,
				right: calculateCoordinate(menuButton).right,
				bottom: calculateCoordinate(menuButton).bottom,
		}))

		setPopUp((prev)=>!prev);
	}

	const closeMenu = ()=> {
		setPopUp((prev)=>!prev);
	}

	const calculateCoordinate = (button: HTMLElement)=> {
		const clientHeight = document.body.clientHeight;
		const coordinates = {
			right: button.getBoundingClientRect().right,
			bottom: button.getBoundingClientRect().bottom,
		}

		if(clientHeight - coordinates.bottom < 200){
			coordinates.bottom = button.getBoundingClientRect().top - 120;
		}

		return {
			right: coordinates.right,
			bottom: coordinates.bottom,
		}
	}

	return [popUp, menuButtonCoordinate, openMenu, closeMenu] as const;
}

export default usePopup;