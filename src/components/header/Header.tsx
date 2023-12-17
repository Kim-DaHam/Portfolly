import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SearchModal from "../modal/SearchModal";
import Popper from "../popper/Popper";
import SearchBar from "../searchBar/SearchBar";

import { ButtonBox, HeaderContainer, LogInButton, LogoBox, MenuButton, TrialVersionButton } from "@/components/header/Header.styled";
import useOpenMenu from "@/hooks/useOpenMenu";
import { ROUTE_PATH } from "@/utils/path";

function Header(){
	const [searchBarOpen, setSearchBarOpen] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();
	const showSearchBar = (location.pathname !== '/' && '/login' && '/signup' );
	const { menuOpen, menuButtonCoordinate, openMenu, closeMenu} = useOpenMenu();

	const renderSearchBar = () => {
		return(
			<>
				<SearchBar isClicked={searchBarOpen} onClick={() => setSearchBarOpen((prev)=>!prev)}/>

				{ searchBarOpen &&
					<SearchModal onClick={() => setSearchBarOpen((prev)=>!prev)}/>
				}
			</>
		)
	}

	return(
		<HeaderContainer>
			<LogoBox onClick={()=>navigate(ROUTE_PATH.MAIN)}>

			</LogoBox>
			{ showSearchBar ?
				renderSearchBar()
				:
				<div></div>
			}

			<ButtonBox>
				<LogInButton>Log in</LogInButton>

				<TrialVersionButton>Start Trial Version</TrialVersionButton>

				<MenuButton id='header-menu' onClick = {openMenu}>=</MenuButton>
			</ButtonBox>

			{ menuOpen &&
					<Popper type='header' right={menuButtonCoordinate.right} bottom={menuButtonCoordinate.bottom} closeMenu={closeMenu}/>
			}

		</HeaderContainer>
	)
}

export default Header;