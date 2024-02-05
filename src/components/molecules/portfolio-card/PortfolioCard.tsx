import { HTMLAttributes, useEffect, useRef } from "react";
import { FiMoreHorizontal as MoreIcon } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Group } from "@/components/molecules/popper/Popper.styled";
import * as S from "@/components/molecules/portfolio-card/PortfolioCard.styled";
import { section } from "@/redux/sectionSlice";

import { usePopup } from "@/hooks";

import { Button, ToggleButton, Popper, PortfolioSlider, Profile } from "@/components";

type Props = HTMLAttributes<HTMLDivElement> & {
	portfolio: any;
	onClick: () => void;
}

export default function PortfolioCard({ portfolio, onClick }: Props) {
	const buttonGroupRef = useRef(null);
	const currentSection = useSelector(section);

	const { isPopUp, coordinate, popUp, popOut } = usePopup();

	useEffect(()=>{
		const buttonGroup :HTMLElement = buttonGroupRef.current!;

		if(!isPopUp) {
			buttonGroup!.style.display = '';
			return;
		}
		buttonGroup!.style.display = 'flex';
	}, [isPopUp])

	return (
		<S.Wrapper onClick={onClick}>
			<PortfolioSlider section={currentSection} portfolio={portfolio}/>

			<S.ProfileBox>
				<Profile type='portfolio-card' portfolio={portfolio} user={portfolio.user}/>

				<S.ButtonGroup className='button-group' ref={buttonGroupRef}>
					<ToggleButton
						type='bookmark'
						isToggled={portfolio.isBookmarked}
						portfolioId={portfolio.id}
					/>

					<Button onClick={popUp} color='gray'>
						<MoreIcon/>
					</Button>
				</S.ButtonGroup>

				{ isPopUp &&
					<Popper coordinate={coordinate} popOut={popOut}>
						<Group>
							<Link to=''>
								공유하기
							</Link>
						</Group>
					</Popper>
				}
			</S.ProfileBox>
		</S.Wrapper>
	)
}