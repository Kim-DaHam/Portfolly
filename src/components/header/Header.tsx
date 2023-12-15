import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SearchModal from "../modal/SearchModal";
import Popper from "../popper/Popper";
import SearchBar from "../searchBar/SearchBar";

import { ButtonBox, HeaderContainer, LogInButton, LogoBox, MenuButton, TrialVersionButton } from "@/components/header/Header.styled";
import { ROUTE_PATH } from "@/utils/path";

function Header(){
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuButtonCoordinate, setMenuButtonCoordinate] = useState({
			right: 0,
			bottom: 0,
	});
	const [searchBarOpen, setSearchBarOpen] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();
	const showSearchBar = (location.pathname !== '/' && '/login' && '/signup' );

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
			<LogoBox onClick={()=>navigate(ROUTE_PATH.INTRO)}>

			</LogoBox>
			{ showSearchBar ?
				renderSearchBar()
				:
				renderSearchBar()
			}

			<ButtonBox>
				<LogInButton>Log in</LogInButton>

				<TrialVersionButton>Start Trial Version</TrialVersionButton>

				<MenuButton
						id='header-menu'
						onClick = {(e)=> {
								const menuButton = e.target as HTMLElement;
								console.log(menuButton.getBoundingClientRect().bottom)
								setMenuButtonCoordinate((prev) => ({
										...prev,
										right: menuButton.getBoundingClientRect().right,
										bottom: menuButton.getBoundingClientRect().bottom,
								}))
								setMenuOpen((prev)=>!prev)
						}}
				>=</MenuButton>
			</ButtonBox>

			{ menuOpen &&
					<Popper type='header' right={menuButtonCoordinate.right} bottom={menuButtonCoordinate.bottom}/>
			}

		</HeaderContainer>
	)
}

export default Header;