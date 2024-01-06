import { useState } from "react";
import { FiMenu as MenuIcon} from "react-icons/fi";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import SectionNavigatior from "../../molecules/navigator/SectionNavigator";
import Popper from "../../molecules/popper/Popper";
import SearchBar from "../../molecules/searchBar/SearchBar";
import SearchModal from "../modal/search-modal/SearchModal";

import { checkIsShowSearchBarPage, checkIsShowSectionMenuPage, renderHeaderMenuPopper } from "./Header.utils";

import Logo from '@/assets/images/logo.png';
import { RoundButton, SquareButton } from "@/components/atoms/button/Button.styled";
import Image from '@/components/atoms/image/Image';
import { ButtonGroup, HeaderContainer, LogoBox } from "@/components/organisms/header/Header.styled";
import useModal from "@/hooks/useModal";
import usePopup from "@/hooks/usePopup";
import { isLogin as IsLogin } from "@/redux/loginSlice";
import { ROUTE_PATH } from "@/utils/path";

function Header() {
	const { isPopUp, buttonCoordinate, popUp, popOut } = usePopup();
	const { isModalOpen, handleModal } = useModal();

	const navigate = useNavigate();
	const location = useLocation();

	const isLogin = useSelector(IsLogin);
	const firstPathName = location.pathname.split('/')[1];

	const showSearchBar = checkIsShowSearchBarPage(firstPathName);
	const showSectionMenu = checkIsShowSectionMenuPage(firstPathName);

	return(
		<HeaderContainer>
			<LogoBox onClick={()=>navigate(`/main/android-ios`)}>
				<Image src={Logo} size='2.3rem'/>
			</LogoBox>

			{ showSectionMenu ? <SectionNavigatior/> : <div></div> }

			{ showSearchBar ?
				<>
					<SearchBar isClicked={isModalOpen} onClick={handleModal}/>

					{ isModalOpen &&
						<SearchModal onClick={handleModal}/>
					}
				</>
				:
				<div></div>
			}

			{ isLogin ?
				<ButtonGroup>
					<SquareButton color='Black' onClick={()=>navigate(ROUTE_PATH.PORTFOLIO_EDIT)}>Upload</SquareButton>
					<RoundButton color='Transparency' onClick={popUp}>
						<Image src='' size='1rem'/>
						<MenuIcon size={15}/>
					</RoundButton>
				</ButtonGroup>
				:
				<ButtonGroup>
					<SquareButton color='White' onClick={()=>navigate(ROUTE_PATH.SIGN_IN)}>Log in</SquareButton>
					<SquareButton color='Black' onClick={()=>navigate(ROUTE_PATH.TRIAL_LOGIN)}>Start Trial Version</SquareButton>
					<RoundButton color='Transparency' onClick={popUp}><MenuIcon size={15}/></RoundButton>
				</ButtonGroup>
			}


			{ isPopUp &&
				<Popper
					right={buttonCoordinate.right}
					bottom={buttonCoordinate.bottom}
					popOut={popOut}
				>
					{renderHeaderMenuPopper(isLogin)}
				</Popper>
			}
		</HeaderContainer>
	)
}

export default Header;