import { FiBookmark as BookmarkIcon, FiUser as UserIcon, FiMessageSquare as MessageIcon } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Text } from '@/components';
import * as S from "@/components/molecules/popper/Popper.styled";

const PAGE_SHOW_SEARCH_BAR = ['main', 'profile', 'contact', 'portfolios'];
const PAGE_SHOW_SECTION_MENU = ['main'];

export const checkIsShowSearchBarPage = (firstPathName: string) => {
	return PAGE_SHOW_SEARCH_BAR.indexOf(firstPathName) > -1;
}

export const checkIsShowSectionMenuPage = (firstPathName: string) => {
	return PAGE_SHOW_SECTION_MENU.indexOf(firstPathName) > -1;
}

export const renderHeaderMenuPopper = (user: any, popOut: ()=>void, logout: ()=>void) => {
	if(user.isLogin){
		return (
			<>
				<S.Group>
					<Link to={`/profile/${user.id}?tab=bookmarks`} onClick={popOut}>
						<BookmarkIcon size={20}/>
						<Text type='common'>북마크</Text>
					</Link>

					<Link to={`/profile/${user.id}`} onClick={popOut}>
						<UserIcon size={20}/>
						<Text type='common'>내 정보</Text>
					</Link>

					<Link to={`/messages`} onClick={popOut}>
						<MessageIcon size={20}/>
						<Text type='common'>메시지</Text>
					</Link>
				</S.Group>

				<S.Separator/>

				<S.Group>
					<Link to={`/main/android-ios`} onClick={logout}>
						<Text type='common'>로그아웃</Text>
					</Link>
				</S.Group>
			</>
		)
	}

	return (
		<S.Group>
			<Link to={`/login`} onClick={popOut}>
				<BookmarkIcon size={20}/>
				<Text type='common'>북마크</Text>
			</Link>
		</S.Group>
	)
}