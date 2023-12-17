import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

import { RoundButton as MoreButton } from "../button/Button.styled";
import SearchModal from "../modal/SearchModal";
import Popper from "../popper/Popper";
import SearchBar from "../searchBar/SearchBar";

import { ButtonBox, HeaderContainer, LogInButton, LogoBox, MenuButton, SectionMenuBox, SectionTitle, TrialVersionButton } from "@/components/header/Header.styled";
import useOpenMenu from "@/hooks/useOpenMenu";
import { ROUTE_PATH } from "@/utils/path";


function Header(){
	const [searchBarOpen, setSearchBarOpen] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();
	const showSearchBar = (location.pathname !== '/' && '/login' && '/signup' );
	const showSectionMenu = (location.pathname === '/main')
	const { menuOpen, menuButtonCoordinate, openMenu, closeMenu} = useOpenMenu();

	const renderSectionMenu = ()=> {
		return(
			<SectionMenuBox>
				<SectionTitle>Section</SectionTitle>
				<MoreButton color='White'>
					<FiMoreHorizontal color='gray'/>
				</MoreButton>
			</SectionMenuBox>
		)
	}

	const renderSearchBar = ()=> {
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

			{ showSectionMenu ?
				renderSectionMenu()
				:
				<div></div>
			}

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