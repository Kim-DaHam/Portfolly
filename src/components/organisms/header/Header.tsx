import { FiMenu as MenuIcon} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Logo from '@/assets/images/logo.png';
import { Image, Button, SectionNavigator, Popper, SearchBar, SearchModal } from '@/components';
import { renderHeaderMenuPopper } from "@/components/organisms/header/Header.helpers";
import * as S from "@/components/organisms/header/Header.styled";
import { useHeader, useModal, usePopup } from "@/hooks";
import { logout, userState } from "@/redux/loginSlice";
import { ROUTE_PATH } from "@/utils";

export default function Header() {
	const { showSearchBar, showSectionNavigator } = useHeader();
	const { isPopUp, coordinate, popUp, popOut } = usePopup();
	const { isModalOpen, handleModal } = useModal();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector(userState);

	const handleLogOut = () => {
		dispatch(logout());
		popOut();
	};

	return(
		<S.Wrapper>
			<S.Logo onClick={()=>navigate('/main/android-ios')}>
				<Image src={Logo} size='2.3rem'/>
			</S.Logo>

			{ showSectionNavigator ? <SectionNavigator/> : <div></div> }

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

			{ user.isLogin ?
				<S.ButtonGroup>
					<Button color='black' shape='square' onClick={()=>navigate(ROUTE_PATH.PORTFOLIO_EDIT)}>Upload</Button>
					<Button color='transparent' shape='square' onClick={popUp}>
						<Image src='' size='1rem'/>
						<MenuIcon size={15}/>
					</Button>
				</S.ButtonGroup>
				:
				<S.ButtonGroup>
					<Button color='black' shape='square' onClick={()=>navigate(ROUTE_PATH.LOGIN)}>Start Trial Version</Button>
					<Button color='transparent' shape='round' onClick={popUp}><MenuIcon size={15}/></Button>
				</S.ButtonGroup>
			}

			{ isPopUp &&
				<Popper coordinate={coordinate} popOut={popOut}>
					{renderHeaderMenuPopper(user, popOut, handleLogOut)}
				</Popper>
			}
		</S.Wrapper>
	)
}