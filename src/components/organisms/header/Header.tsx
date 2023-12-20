import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SectionNavigation from "../../molecules/navigator/SectionNavigator";
import Popper from "../../molecules/popper/Popper";
import SearchBar from "../../molecules/searchBar/SearchBar";
import SearchModal from "../modal/search-modal/SearchModal";

import { PAGE_SHOW_SEARCH_BAR, PAGE_SHOW_SECTION_MENU } from "./Header.constants";

import { ButtonBox, HeaderContainer, LogInButton, LogoBox, MenuButton, TrialVersionButton } from "@/components/organisms/header/Header.styled";
import usePopup from "@/hooks/usePopup";
import { ROUTE_PATH } from "@/utils/path";

function Header() {
	const [isHeaderMenuPopUp, menuButtonCoordinate, popUp, popOut] = usePopup();
	const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	const showSearchBar = (location.pathname === PAGE_SHOW_SEARCH_BAR );
	const showSectionMenu = (location.pathname === PAGE_SHOW_SECTION_MENU);

	const handleSearchModal = ()=> {
		setIsSearchModalOpen(prev=>!prev);
	}

	return(
		<HeaderContainer>
			<LogoBox onClick={()=>navigate(ROUTE_PATH.MAIN)}></LogoBox>

			{ showSectionMenu ? <SectionNavigation/> : <div></div> }

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

			<ButtonBox>
				<LogInButton>Log in</LogInButton>

				<TrialVersionButton>Start Trial Version</TrialVersionButton>

				<MenuButton onClick={popUp}>=</MenuButton>
			</ButtonBox>

			{ isHeaderMenuPopUp &&
				<Popper
					type='HeaderMenu'
					right={menuButtonCoordinate.right}
					bottom={menuButtonCoordinate.bottom}
					popOut={popOut}
				/>
			}
		</HeaderContainer>
	)
}

export default Header;