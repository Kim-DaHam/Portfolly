import { HTMLAttributes, useEffect, useRef } from "react";
import { FiMoreHorizontal as MoreIcon } from "react-icons/fi";

import ToggleButton from "@/components/atoms/button/ToggleButton";
import { Button } from "@/components/atoms/index";
import Popper from "@/components/molecules/popper/Popper";
import { Group, Item } from "@/components/molecules/popper/Popper.styled";
import { ButtonGroup, PortfolioItemLayout, ProfileBox } from "@/components/molecules/portfolio-item/PortfolioItem.styled";
import PortfolioThumbnail from "@/components/molecules/portfolio-thumbnail/PortfolioThumbnail";
import Profile from "@/components/molecules/profile/Profile";
import usePopup from "@/hooks/usePopup";

type Props = HTMLAttributes<HTMLDivElement> & {
	portfolio: any;
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
					<ToggleButton type='bookmark' isToggled={portfolio.isBookmarked} portfolioId={portfolio.id}/>

					<Button onClick={popUp} color='gray' shape='square'>
						<MoreIcon/>
					</Button>
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