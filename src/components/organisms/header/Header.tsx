import { FiMenu as MenuIcon} from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Logo from '@/assets/images/logo.png';
import { RoundButton, SquareButton } from "@/components/atoms/button/Button.styled";
import Image from '@/components/atoms/image/Image';
import SectionNavigatior from "@/components/molecules/navigator/SectionNavigator";
import Popper from "@/components/molecules/popper/Popper";
import SearchBar from "@/components/molecules/searchBar/SearchBar";
import { renderHeaderMenuPopper } from "@/components/organisms/header/Header.helpers";
import { ButtonGroup, HeaderContainer, LogoBox } from "@/components/organisms/header/Header.styled";
import SearchModal from "@/components/organisms/modal/search-modal/SearchModal";
import { useHeader, useModal, usePopup, useSectionNavigator } from "@/hooks";
import { isLogin as IsLogin } from "@/redux/loginSlice";
import { ROUTE_PATH } from "@/utils/path";

export default function Header() {
	const { showSearchBar, showSectionNavigator } = useHeader();
	const { isPopUp, coordinate, popUp, popOut } = usePopup();
	const { isModalOpen, handleModal } = useModal();
	const { handleSection } = useSectionNavigator();

	const navigate = useNavigate();

	const isLogin = useSelector(IsLogin);

	return(
		<HeaderContainer>
			<LogoBox onClick={()=>handleSection('Android/iOS')}>
				<Image src={Logo} size='2.3rem'/>
			</LogoBox>

			{ showSectionNavigator ? <SectionNavigatior/> : <div></div> }

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
				<Popper coordinate={coordinate} popOut={popOut}>
					{renderHeaderMenuPopper(isLogin)}
				</Popper>
			}
		</HeaderContainer>
	)
}