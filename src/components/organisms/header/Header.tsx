import { useState } from "react";
import { FiMenu as MenuIcon} from "react-icons/fi";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import SectionNavigatior from "../../molecules/navigator/SectionNavigator";
import Popper from "../../molecules/popper/Popper";
import SearchBar from "../../molecules/searchBar/SearchBar";
import SearchModal from "../modal/search-modal/SearchModal";

import { PAGE_SHOW_SEARCH_BAR, PAGE_SHOW_SECTION_MENU } from "./Header.constants";
import { renderHeaderMenuPopper } from "./Header.utils";

import { RoundButton, SquareButton } from "@/components/atoms/button/Button.styled";
import Image from '@/components/atoms/image/Image';
import { ButtonGroup, HeaderContainer, Logo } from "@/components/organisms/header/Header.styled";
import usePopup from "@/hooks/usePopup";
import { RootState } from "@/redux/store";
import { ROUTE_PATH } from "@/utils/path";

function Header() {
	const [isHeaderMenuPopUp, menuButtonCoordinate, popUp, popOut] = usePopup();
	const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

	const isLogin = useSelector((state: RootState) => state.auth.isLogin);

	const navigate = useNavigate();
	const location = useLocation();
	const firstPathName = location.pathname.split('/')[1];

	const showSearchBar = PAGE_SHOW_SEARCH_BAR.indexOf(firstPathName) !== -1;
	const showSectionMenu = PAGE_SHOW_SECTION_MENU.indexOf(firstPathName) !== -1;

	const handleSearchModal = ()=> {
		setIsSearchModalOpen(prev=>!prev);
	}

	return(
		<HeaderContainer>
			<Logo onClick={()=>navigate(`${ROUTE_PATH.MAIN}/android-ios`)}>
				<Image src='./images/logo.png' size='2.3rem'/>
			</Logo>

			{ showSectionMenu ? <SectionNavigatior/> : <div></div> }

			{ showSearchBar ?
				<>
					<SearchBar isClicked={isSearchModalOpen} onClick={handleSearchModal}/>

					{ isSearchModalOpen &&
						<SearchModal onClick={handleSearchModal}/>
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
					<SquareButton color='White' onClick={()=>navigate(ROUTE_PATH.SIGNIN)}>Log in</SquareButton>
					<SquareButton color='Black' onClick={()=>navigate(ROUTE_PATH.TRIAL_LOGIN)}>Start Trial Version</SquareButton>
					<RoundButton color='Transparency' onClick={popUp}><MenuIcon size={15}/></RoundButton>
				</ButtonGroup>
			}


			{ isHeaderMenuPopUp &&
				<Popper
					right={menuButtonCoordinate.right}
					bottom={menuButtonCoordinate.bottom}
					popOut={popOut}
				>
					{renderHeaderMenuPopper(isLogin)}
				</Popper>
			}
		</HeaderContainer>
	)
}

export default Header;