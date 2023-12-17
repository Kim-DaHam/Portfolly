import { useEffect, useRef } from "react";
import { FiMoreHorizontal } from "react-icons/fi";

import { SquareButton as MoreButton } from "../button/Button.styled";
import ToggleButton from "../button/ToggleButton";
import Popper from "../popper/Popper";

import { ButtonBox, PortfolioTitle, ProfileContainer, UserName, Image, SpanBox } from "./Profile.styled";

import useOpenMenu from "@/hooks/useOpenMenu";
import { IComponentFactory } from "@/types";



type Profile = 'Default' | 'Portfolio' | 'Chat';

interface ProfileProps {
	type: Profile;
}

function Profile({type}: ProfileProps) {
	const { menuOpen, menuButtonCoordinate, openMenu, closeMenu} = useOpenMenu();
	const buttonBoxRef = useRef(null);

	const renderProfile = (type: Profile) => {
		const ComponentFactory: IComponentFactory = {
			Default: (
				<>
					<UserName type={type}>username</UserName>
				</>
			),
			Portfolio: (
				<>
					<SpanBox>
						<UserName type={type}>username</UserName>
						<PortfolioTitle>PortfolioTitleBlaBla</PortfolioTitle>
					</SpanBox>

					<ButtonBox className='button-box' ref={buttonBoxRef}>
						<ToggleButton type='Bookmark'/>

						<MoreButton onClick={openMenu} color='Gray' type="Icon">
							<FiMoreHorizontal/>
						</MoreButton>
					</ButtonBox>

					{ menuOpen &&
						<Popper type='portfolioItem' right={menuButtonCoordinate.right} bottom={menuButtonCoordinate.bottom} closeMenu={closeMenu}/>
					}
				</>
			),
			Chat: (
				<></>
			)
		}

		return ComponentFactory[type];
	}

	useEffect(()=>{
		const buttonBox :HTMLElement = buttonBoxRef.current!;

		if(menuOpen){
			buttonBox!.style.display = 'flex';
			return;
		}

		buttonBox!.style.display = '';

	}, [menuOpen])

	return(
		<ProfileContainer type={type}>
			<Image type={type}/>
			{renderProfile(type)}
		</ProfileContainer>
	)
}

export default Profile;