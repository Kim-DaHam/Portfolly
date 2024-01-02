import { useEffect, useRef } from "react";
import { FiMoreHorizontal as Icon } from "react-icons/fi";

import { Group, Item } from "../../popper/Popper.styled";

import { ButtonGroup, PorfolioProfileLayout, SpanBox } from "./PortfolioProfile.styled";

import { SquareButton as MoreButton } from "@/components/atoms/button/Button.styled";
import ToggleButton from "@/components/atoms/button/ToggleButton";
import Image from '@/components/atoms/image/Image';
import Popper from "@/components/molecules/popper/Popper";
import usePopup from "@/hooks/usePopup";
import { Text } from "@/styles/Text.styled";
import { Portfolio } from "@/types/portfolio";

type Props = {
	portfolio: Portfolio;
}

function PortfolioProfile({portfolio}: Props) {
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
		<PorfolioProfileLayout>
			<Image src='' alt='user profile' size='1rem'/>
			<SpanBox>
				<Text size='Medium' color='Black'>{portfolio.title}</Text>
				<Text size='Small' color='Gray'>{portfolio.summary}</Text>
			</SpanBox>

			<ButtonGroup className='button-box' ref={buttonGroupRef}>
				<ToggleButton type='Bookmark'/>

				<MoreButton onClick={openMenu} color='Gray' size='Fit'>
					<Icon/>
				</MoreButton>
			</ButtonGroup>

			{ menuOpen &&
				<Popper right={menuButtonCoordinate.right} bottom={menuButtonCoordinate.bottom} popOut={closeMenu}>
					<Group>
						<Item>공유하기</Item>
					</Group>
				</Popper>
			}
		</PorfolioProfileLayout>
	)
}

export default PortfolioProfile;