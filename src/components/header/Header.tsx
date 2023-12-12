import { useNavigate } from "react-router-dom";

import { ROUTE_PATH } from "@/utils/path";

import { ButtonWrapper, HeaderContainer, LogInButton, LogoWrapper, MenuButton, TrialVersionButton } from "@/components/header/Header.styled";
import SearchBar from "../searchBar/SearchBar";
import { useState } from "react";
import Popper from "../popper/Popper";

function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
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
                    onClick = {()=>setMenuOpen((prev)=>!prev)}
                >=</MenuButton>
            </ButtonWrapper>

            { menuOpen &&
                <Popper type='HEADER'/>
            }

        </HeaderContainer>
    )
}

export default Header;