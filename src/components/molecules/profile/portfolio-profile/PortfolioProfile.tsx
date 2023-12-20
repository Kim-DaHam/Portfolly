import { useEffect, useRef } from "react";
import { FiMoreHorizontal as Icon } from "react-icons/fi";

import { ButtonGroup, PortfolioTitle, SpanBox, UserName } from "../Profile.styled";

import { SquareButton as MoreButton } from "@/components/atoms/button/Button.styled";
import ToggleButton from "@/components/atoms/button/ToggleButton";
import Popper from "@/components/molecules/popper/Popper";
import usePopup from "@/hooks/usePopup";

function PortfolioProfile() {
	const buttonGroupRef = useRef(null);

	const [menuOpen, menuButtonCoordinate, openMenu, closeMenu] = usePopup();

	useEffect(()=>{
		const buttonGroup :HTMLElement = buttonGroupRef.current!;

		if(menuOpen){
			buttonGroup!.style.display = 'flex';
			return;
		}

		buttonGroup!.style.display = '';

	}, [menuOpen])

	return(
		<>
			<SpanBox>
				<UserName type='Portfolio'>username</UserName>
				<PortfolioTitle>PortfolioTitleBlaBla</PortfolioTitle>
			</SpanBox>

			<ButtonGroup className='button-box' ref={buttonGroupRef}>
				<ToggleButton type='Bookmark'/>

				<MoreButton onClick={openMenu} color='Gray' size='Fit'>
					<Icon/>
				</MoreButton>
			</ButtonGroup>

			{ menuOpen &&
				<Popper type='PortfolioMenu' right={menuButtonCoordinate.right} bottom={menuButtonCoordinate.bottom} popOut={closeMenu}/>
			}
		</>
	)
}

export default PortfolioProfile;