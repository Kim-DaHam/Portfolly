import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SectionMenu from "../menu/SectionMenu";
import SearchModal from "../modal/SearchModal";
import Popper from "../popper/Popper";
import SearchBar from "../searchBar/SearchBar";

import { PAGE_SHOW_SEARCH_BAR, PAGE_SHOW_SECTION_MENU } from "./Header.constants";

import { ButtonBox, HeaderContainer, LogInButton, LogoBox, MenuButton, TrialVersionButton } from "@/components/header/Header.styled";
import useOpenMenu from "@/hooks/useOpenMenu";
import { ROUTE_PATH } from "@/utils/path";


function Header() {
	const [menuOpen, menuButtonCoordinate, openMenu, closeMenu] = useOpenMenu();
	const [isSearchModalPopup, setIsSearchModalPopup] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	const showSearchBar = (location.pathname === PAGE_SHOW_SEARCH_BAR );
	const showSectionMenu = (location.pathname === PAGE_SHOW_SECTION_MENU);

	const popUpOutSearchModal = ()=> {
		setIsSearchModalPopup(prev=>!prev);
	}

	return(
		<HeaderContainer>
			<LogoBox onClick={()=>navigate(ROUTE_PATH.MAIN)}></LogoBox>

			{ showSectionMenu ? <SectionMenu/> : <div></div> }

			{ showSearchBar ?
				<>
					<SearchBar isClicked={isSearchModalPopup} onClick={popUpOutSearchModal}/>

					{ isSearchModalPopup &&
						<SearchModal onClick={popUpOutSearchModal}/>
					}
				</>
				:
				<div></div>
			}

			<ButtonBox>
				<LogInButton>Log in</LogInButton>

				<TrialVersionButton>Start Trial Version</TrialVersionButton>

				<MenuButton id='header-menu' onClick = {openMenu}>=</MenuButton>
			</ButtonBox>

			{ menuOpen &&
				<Popper
					type='header'
					right={menuButtonCoordinate.right}
					bottom={menuButtonCoordinate.bottom}
					popOut={closeMenu}
				/>
			}
		</HeaderContainer>
	)
}

export default Header;