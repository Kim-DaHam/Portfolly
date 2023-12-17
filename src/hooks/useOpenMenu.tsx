import { useState } from "react";

function useOpenMenu() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuButtonCoordinate, setMenuButtonCoordinate] = useState({
		right: 0,
		bottom: 0,
});

	const openMenu = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const menuButton = event.target as HTMLElement;

		setMenuButtonCoordinate((prev) => ({
				...prev,
				right: calculateCoordinate(menuButton).right,
				bottom: calculateCoordinate(menuButton).bottom,
		}))

		setMenuOpen((prev)=>!prev);
	}

	const closeMenu = ()=> {
		setMenuOpen((prev)=>!prev);
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

	return {menuOpen, menuButtonCoordinate, openMenu, closeMenu}
}

export default useOpenMenu;