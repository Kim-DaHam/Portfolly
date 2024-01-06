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

type Props = {
	portfolio: any;
}

export default function PortfolioProfile({portfolio}: Props) {
	const buttonGroupRef = useRef(null);

	const { isPopUp, coordinate, popUp, popOut } = usePopup();

	useEffect(()=>{
		const buttonGroup :HTMLElement = buttonGroupRef.current!;

		if(isPopUp){
			buttonGroup!.style.display = 'flex';
			return;
		}

		buttonGroup!.style.display = '';

	}, [isPopUp])

	return(
		<PorfolioProfileLayout>
			<Image src={portfolio.user.profileImage} alt='user profile' size='3.5rem'/>
			<SpanBox>
				<Text size='Medium' color='Black'>{portfolio.title}</Text>
				<Text size='Small' color='Gray'>{portfolio.summary}</Text>
			</SpanBox>

			<ButtonGroup className='button-box' ref={buttonGroupRef}>
				<ToggleButton type='Bookmark'/>

				<MoreButton onClick={popUp} color='Gray' size='Fit'>
					<Icon/>
				</MoreButton>
			</ButtonGroup>

			{ isPopUp &&
				<Popper coordinate={coordinate} popOut={popOut}>
					<Group>
						<Item>공유하기</Item>
					</Group>
				</Popper>
			}
		</PorfolioProfileLayout>
	)
}