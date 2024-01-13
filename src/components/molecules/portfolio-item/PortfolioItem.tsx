import { HTMLAttributes, useEffect, useRef } from "react";
import { FiMoreHorizontal as MoreIcon } from "react-icons/fi";

import { SquareButton as MoreButton } from "@/components/atoms/button/Button.styled";
import ToggleButton from "@/components/atoms/button/ToggleButton";
import Popper from "@/components/molecules/popper/Popper";
import { Group, Item } from "@/components/molecules/popper/Popper.styled";
import { ButtonGroup, PortfolioItemLayout, ProfileBox } from "@/components/molecules/portfolio-item/PortfolioItem.styled";
import PortfolioThumbnail from "@/components/molecules/portfolio-thumbnail/PortfolioThumbnail";
import Profile from "@/components/molecules/profile/Profile";
import usePopup from "@/hooks/usePopup";
import { Portfolio } from "@/types/portfolio";

type Props = HTMLAttributes<HTMLDivElement> & {
	portfolio: Portfolio;
	onClick: () => void;
}

export default function PortfolioItem({ portfolio, onClick }: Props) {
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

	return (
		<PortfolioItemLayout onClick={onClick}>
			<PortfolioThumbnail portfolio={portfolio}/>

			<ProfileBox>
				<Profile type='portfolio-item' user={{...portfolio, ...portfolio.user}}/>

				<ButtonGroup className='button-group' ref={buttonGroupRef}>
					<ToggleButton type='Bookmark'/>

					<MoreButton onClick={popUp} color='Gray' size='Fit'>
						<MoreIcon/>
					</MoreButton>
				</ButtonGroup>

				{ isPopUp &&
					<Popper coordinate={coordinate} popOut={popOut}>
						<Group>
							<Item>공유하기</Item>
						</Group>
					</Popper>
				}
			</ProfileBox>
		</PortfolioItemLayout>
	)
}