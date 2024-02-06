import { FiBookmark as BookmarkIcon, FiUser as UserIcon, FiMessageSquare as MessageIcon } from "react-icons/fi";
import { Link } from "react-router-dom";

import * as S from "@/components/molecules/popper/Popper.styled";

import { Text } from '@/components';

const PAGE_SHOW_SEARCH_BAR = ['main', 'profile', 'contact', 'portfolios', 'messages'];
const PAGE_SHOW_SECTION_MENU = ['main'];

export const checkIsShowSearchBar = (pathname: string) => {
	return PAGE_SHOW_SEARCH_BAR.indexOf(pathname) > -1;
}

export const checkIsShowSectionMenu = (pathname: string) => {
	return PAGE_SHOW_SECTION_MENU.indexOf(pathname) > -1;
}

export const renderHeaderMenuPopper = (user: any, popOut: ()=>void, logout: ()=>void) => {
	if(user.isLogin){
		return (
			<>
				<S.Group>
					<Link to={`/profile/${user.id}/bookmarks?page=1`} onClick={popOut}>
						<BookmarkIcon size={20}/>
						<Text size='bodyMedium'>북마크</Text>
					</Link>

					<Link
						to={`/profile/${user.id}`}
						state={{prevUrl: location.href}}
						onClick={popOut}
					>
						<UserIcon size={20}/>
						<Text size='bodyMedium'>내 정보</Text>
					</Link>

					<Link to={`/messages`} onClick={popOut}>
						<MessageIcon size={20}/>
						<Text size='bodyMedium'>메시지</Text>
					</Link>
				</S.Group>

				<S.Separator/>

				<S.Group>
					<Link to={`/main/android-ios`} onClick={logout}>
						<Text size='bodyMedium'>로그아웃</Text>
					</Link>
				</S.Group>
			</>
		)
	}

	return (
		<S.Group>
			<Link to={`/login`} onClick={popOut}>
				<BookmarkIcon size={20}/>
				<Text size='bodyMedium'>북마크</Text>
			</Link>
		</S.Group>
	)
}