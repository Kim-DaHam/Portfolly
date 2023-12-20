import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SectionNavigatior from "../../molecules/navigator/SectionNavigator";
import Popper from "../../molecules/popper/Popper";
import SearchBar from "../../molecules/searchBar/SearchBar";
import SearchModal from "../modal/search-modal/SearchModal";

import { PAGE_SHOW_SEARCH_BAR, PAGE_SHOW_SECTION_MENU } from "./Header.constants";

import { SquareButton } from "@/components/atoms/button/Button.styled";
import { ButtonGroup, HeaderContainer, LogoBox } from "@/components/organisms/header/Header.styled";
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

			<ButtonGroup>
				<SquareButton size='Fit' color='White'>Log in</SquareButton>

				<SquareButton size='Fit' color='Black'>Start Trial Version</SquareButton>

				<SquareButton size='Fit' color='Transparency' onClick={popUp}>=</SquareButton>
			</ButtonGroup>

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