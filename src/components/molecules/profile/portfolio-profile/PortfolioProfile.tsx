import { useEffect, useRef } from "react";
import { FiMoreHorizontal as Icon } from "react-icons/fi";

import { ButtonBox, PortfolioTitle, SpanBox, UserName } from "../Profile.styled";

import { SquareButton as MoreButton } from "@/components/atoms/button/Button.styled";
import ToggleButton from "@/components/atoms/button/ToggleButton";
import Popper from "@/components/molecules/popper/Popper";
import usePopup from "@/hooks/usePopup";

function PortfolioProfile() {
	const buttonBoxRef = useRef(null);

	const [menuOpen, menuButtonCoordinate, openMenu, closeMenu] = usePopup();

	useEffect(()=>{
		const buttonBox :HTMLElement = buttonBoxRef.current!;

		if(menuOpen){
			buttonBox!.style.display = 'flex';
			return;
		}

		buttonBox!.style.display = '';

	}, [menuOpen])

	return(
		<>
			<SpanBox>
				<UserName type='Portfolio'>username</UserName>
				<PortfolioTitle>PortfolioTitleBlaBla</PortfolioTitle>
			</SpanBox>

			<ButtonBox className='button-box' ref={buttonBoxRef}>
				<ToggleButton type='Bookmark'/>

				<MoreButton onClick={openMenu} color='Gray'>
					<Icon/>
				</MoreButton>
			</ButtonBox>

			{ menuOpen &&
				<Popper type='PortfolioMenu' right={menuButtonCoordinate.right} bottom={menuButtonCoordinate.bottom} popOut={closeMenu}/>
			}
		</>
	)
}

export default PortfolioProfile;