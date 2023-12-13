import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Popper from "../popper/Popper";
import SearchBar from "../searchBar/SearchBar";

import { ButtonWrapper, HeaderContainer, LogInButton, LogoWrapper, MenuButton, TrialVersionButton } from "@/components/header/Header.styled";
import { ROUTE_PATH } from "@/utils/path";


function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuButtonCoordinate, setMenuButtonCoordinate] = useState({
        right: 0,
        bottom: 0,
    });

    const navigate = useNavigate();

    return(
        <HeaderContainer>
            <LogoWrapper onClick={()=>navigate(ROUTE_PATH.INTRO)}>

            </LogoWrapper>

            <SearchBar/>

            <ButtonWrapper>
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
            </ButtonWrapper>

            { menuOpen &&
                <Popper type='header' right={menuButtonCoordinate.right} bottom={menuButtonCoordinate.bottom}/>
            }

        </HeaderContainer>
    )
}

export default Header;