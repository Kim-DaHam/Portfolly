import { FiMenu as MenuIcon} from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Logo from '@/assets/images/logo.png';
import Image from '@/components/atoms/image/Image';
import { Button } from "@/components/atoms/index";
import SectionNavigatior from "@/components/molecules/navigator/SectionNavigator";
import Popper from "@/components/molecules/popper/Popper";
import SearchBar from "@/components/molecules/searchBar/SearchBar";
import { renderHeaderMenuPopper } from "@/components/organisms/header/Header.helpers";
import { ButtonGroup, HeaderContainer, LogoBox } from "@/components/organisms/header/Header.styled";
import SearchModal from "@/components/organisms/modal/search-modal/SearchModal";
import { useHeader, useModal, usePopup } from "@/hooks";
import { isLogin as IsLogin } from "@/redux/loginSlice";
import { ROUTE_PATH } from "@/utils/path";

export default function Header() {
	const { showSearchBar, showSectionNavigator } = useHeader();
	const { isPopUp, coordinate, popUp, popOut } = usePopup();
	const { isModalOpen, handleModal } = useModal();

	const navigate = useNavigate();

	const isLogin = useSelector(IsLogin);

	return(
		<HeaderContainer>
			<LogoBox onClick={()=>navigate('/main/android-ios')}>
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
					<Button color='black' shape='square' onClick={()=>navigate(ROUTE_PATH.PORTFOLIO_EDIT)}>Upload</Button>
					<Button color='transparent' shape='square' onClick={popUp}>
						<Image src='' size='1rem'/>
						<MenuIcon size={15}/>
					</Button>
				</ButtonGroup>
				:
				<ButtonGroup>
					<Button color='white' shape='square' onClick={()=>navigate(ROUTE_PATH.SIGN_IN)}>Log in</Button>
					<Button color='black' shape='square' onClick={()=>navigate(ROUTE_PATH.TRIAL_LOGIN)}>Start Trial Version</Button>
					<Button color='transparent' shape='round' onClick={popUp}><MenuIcon size={15}/></Button>
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