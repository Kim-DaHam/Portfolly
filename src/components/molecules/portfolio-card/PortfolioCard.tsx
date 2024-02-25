import { HTMLAttributes, useEffect, useRef } from "react";
import { FiMoreHorizontal as MoreIcon } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { API_BASE_URL } from "@/app-config";
import { Group } from "@/components/molecules/popper/Popper.styled";
import * as S from "@/components/molecules/portfolio-card/PortfolioCard.styled";
import { section } from "@/redux/sectionSlice";

import { usePopup } from "@/hooks";
import { setToast } from "@/redux";

import { Image, Button, ToggleButton, Popper, PortfolioSlider, Profile } from "@/components";

type Props = HTMLAttributes<HTMLDivElement> & {
	portfolio: any;
}

export default function PortfolioCard({ portfolio, ...props }: Props) {
	const dispatch = useDispatch();
	const buttonGroupRef = useRef(null);
	const currentSection = useSelector(section);

	const { isPopUp, coordinate, popUp, popOut } = usePopup();

	const handleCopy = () => {
		const url = `https://${API_BASE_URL}/portfolios/${portfolio.id}`;
		const textarea = document.createElement("textarea");

		document.body.appendChild(textarea);
		textarea.value = url;
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);

		popOut();
		dispatch(setToast({id: 0, type: 'success', message: 'URL이 클립보드에 복사되었습니다.'}));
	};

	useEffect(()=>{
		const buttonGroup :HTMLElement = buttonGroupRef.current!;

		if(!isPopUp) {
			buttonGroup!.style.display = '';
			return;
		}
		buttonGroup!.style.display = 'flex';
	}, [isPopUp])

	return (
		<S.Wrapper {...props}>
				<PortfolioSlider
					section={currentSection}
					portfolio={portfolio}
				/>

			<S.ProfileBox>
				<Profile
					type='portfolio-card'
					portfolio={portfolio}
					user={portfolio.user}
				/>

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

				<Popper
					$popperState={isPopUp}
					coordinate={coordinate}
					popOut={popOut}
				>
					<Group>
						<Link to='' onClick={handleCopy}>
							URL 복사하기
						</Link>
					</Group>
				</Popper>
			</S.ProfileBox>
		</S.Wrapper>
	)
}