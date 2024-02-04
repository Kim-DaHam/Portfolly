import { FiMenu as MenuIcon} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Logo from '@/assets/images/logo.png';
import { renderHeaderMenuPopper } from "@/components/organisms/header/Header.helpers";
import * as S from "@/components/organisms/header/Header.styled";
import { logout, userState } from "@/redux/loginSlice";

import { useHeader, useModal, usePopup } from "@/hooks";
import { ROUTE_PATH } from "@/utils";

import { Image, Button, SectionNavigator, Popper, SearchBar, SearchModal } from '@/components';

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
				<Image src={Logo} size='2rem'/>
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
					<Button color='black' onClick={()=>navigate(ROUTE_PATH.PORTFOLIO_EDIT)}>
						Upload
					</Button>
					<Button color='transparent' shape='round' onClick={popUp} className='profile-menu'>
						<Image src={user.profileImage!} size='1.999rem' shape='circle' />
						<MenuIcon size={15} />
					</Button>
				</S.ButtonGroup>
				:
				<S.ButtonGroup>
					<Button color='black' onClick={()=>navigate(ROUTE_PATH.LOGIN)}>
						Create Trial Account
					</Button>
					<Button color='transparent' shape='round' onClick={popUp}>
						<MenuIcon size={15}/>
					</Button>
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