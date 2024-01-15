import { HTMLAttributes, useEffect, useRef } from "react";
import { FiMoreHorizontal as MoreIcon } from "react-icons/fi";

import { Button, ToggleButton } from "@/components/atoms/index";
import { Popper, PortfolioThumbnail, Profile } from "@/components/molecules/index";
import { Group, Item } from "@/components/molecules/popper/Popper.styled";
import * as S from "@/components/molecules/portfolio-item/PortfolioItem.styled";
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
		<S.Wrapper onClick={onClick}>
			<PortfolioThumbnail portfolio={portfolio}/>

			<S.ProfileBox>
				<Profile type='portfolio-item' user={{...portfolio, ...portfolio.user}}/>

				<S.ButtonGroup className='button-group' ref={buttonGroupRef}>
					<ToggleButton type='bookmark' isToggled={portfolio.isBookmarked} portfolioId={portfolio.id}/>

					<Button onClick={popUp} color='gray' shape='square'>
						<MoreIcon/>
					</Button>
				</S.ButtonGroup>

				{ isPopUp &&
					<Popper coordinate={coordinate} popOut={popOut}>
						<Group>
							<Item>공유하기</Item>
						</Group>
					</Popper>
				}
			</S.ProfileBox>
		</S.Wrapper>
	)
}